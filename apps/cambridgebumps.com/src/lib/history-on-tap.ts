import type { TransitionBeforePreparationEvent } from "astro:transitions/client";

// Makes the history entry for a link at the tap, not when the page arrives.
//
// WebKit hides from Back a history entry that `pushState` adds without a
// recent user activation, and the entry before it too. `<ClientRouter />`
// pushes its entry only once the new page has been fetched and swapped in. In
// Chrome and Edge on iOS (WebKit, where a tap's activation lasts only while
// the tap is being dispatched), that is every link; in Safari, any page that
// takes more than ten seconds to arrive. Either way one such entry sends Back
// off the site: Home → Bumps charts → Back left cambridgebumps.com.
//
// So when a navigation starts during a tap, this pushes a copy of the current
// entry there and then, and turns the router's later `pushState` into a
// `replaceState` of that copy. Back then lands where it should everywhere.
// Navigations without an activation, and Back and Forward, are left alone.
//
// See https://github.com/withastro/astro/issues/18377, where this comes from.
// Remove it once Astro's router pushes its entry before fetching.
export function installHistoryOnTap(): void {
  const activation = navigator.userActivation;

  if (!activation) return;

  const push = history.pushState;
  const replace = history.replaceState;

  // True while an entry made at a tap waits for the router's push.
  let waiting = false;

  history.pushState = function (this: History, ...args) {
    if (!waiting) return push.apply(this, args);

    waiting = false;

    return replace.apply(this, args);
  };

  window.addEventListener("popstate", () => (waiting = false), true);

  document.addEventListener("astro:before-preparation", (event) => {
    const preparation = event as TransitionBeforePreparationEvent;

    if (
      preparation.navigationType !== "push" ||
      preparation.formData ||
      !activation.isActive ||
      location.href === preparation.to.href
    ) {
      return;
    }

    // A second tap before the first page arrives reuses the entry.
    if (!waiting) {
      push.call(history, history.state, "", location.href);
      waiting = true;
    }

    const load = preparation.loader;

    preparation.loader = async () => {
      await load();

      // The router gave up on swapping (a fetch failed, or the page isn't
      // one of ours) and will load the address in full. Point the entry at
      // it first, so that load replaces the entry instead of adding another.
      if (
        preparation.defaultPrevented &&
        waiting &&
        !preparation.signal.aborted
      ) {
        waiting = false;
        replace.call(history, history.state, "", preparation.to.href);
      }
    };
  });
}
