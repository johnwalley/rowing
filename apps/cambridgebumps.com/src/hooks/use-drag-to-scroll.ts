import { useEffect, useState, type RefObject } from "react";

// A drag shorter than this, in pixels, is a click.
const THRESHOLD = 4;

// Lets a mouse scroll a box by dragging it, as a finger already can. A wide
// multi-year chart otherwise scrolls sideways only with Shift and the wheel, or
// the scrollbar at the foot of a tall box. Touch and pen keep the browser's own
// scrolling.
//
// A drag that moves more than `THRESHOLD` swallows the click that ends it, so
// letting go over a link (the year strip's) doesn't follow it.
//
// Returns whether a drag is under way, for a grabbing cursor.
export function useDragToScroll(ref: RefObject<HTMLElement | null>) {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const box = ref.current;

    if (!box) return;

    let start: {
      x: number;
      y: number;
      left: number;
      top: number;
      id: number;
    } | null = null;
    let moved = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;

      // Leave form controls to themselves
      if ((event.target as Element).closest("input, select, button")) return;

      start = {
        x: event.clientX,
        y: event.clientY,
        left: box.scrollLeft,
        top: box.scrollTop,
        id: event.pointerId,
      };
      moved = false;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!start || event.pointerId !== start.id) return;

      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;

      if (!moved) {
        if (Math.hypot(dx, dy) < THRESHOLD) return;

        moved = true;
        setDragging(true);
        box.setPointerCapture(event.pointerId);
        // The press may have started selecting the chart's text
        window.getSelection()?.removeAllRanges();
      }

      box.scrollLeft = start.left - dx;
      box.scrollTop = start.top - dy;
    };

    const end = (event: PointerEvent) => {
      if (!start || event.pointerId !== start.id) return;

      if (box.hasPointerCapture(event.pointerId)) {
        box.releasePointerCapture(event.pointerId);
      }

      start = null;
      setDragging(false);
    };

    const onClick = (event: MouseEvent) => {
      if (!moved) return;

      moved = false;
      event.preventDefault();
      event.stopPropagation();
    };

    // A drag would otherwise pick up a link or select the chart's text
    const onDragStart = (event: DragEvent) => event.preventDefault();

    box.addEventListener("pointerdown", onPointerDown);
    box.addEventListener("pointermove", onPointerMove);
    box.addEventListener("pointerup", end);
    box.addEventListener("pointercancel", end);
    box.addEventListener("click", onClick, true);
    box.addEventListener("dragstart", onDragStart);

    return () => {
      box.removeEventListener("pointerdown", onPointerDown);
      box.removeEventListener("pointermove", onPointerMove);
      box.removeEventListener("pointerup", end);
      box.removeEventListener("pointercancel", end);
      box.removeEventListener("click", onClick, true);
      box.removeEventListener("dragstart", onDragStart);
    };
  }, [ref]);

  return dragging;
}
