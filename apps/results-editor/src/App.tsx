import {
  processResults,
  readEvent,
  stepOn,
  writeString,
} from "bumps-results-tools/bumps";
import { ComponentProps, useEffect, useMemo, useState } from "react";

import { BumpsChart } from "react-bumps-chart";
import { Event } from "bumps-results-tools/types";
import { resultFiles } from "bumps-results-tools/tg-files";

type BumpsChartData = ComponentProps<typeof BumpsChart>["data"];

const DEFAULT_RESULT = "torpids2025_men";

const resultGroups = Object.groupBy(
  resultFiles,
  (file) => `${file.set} ${file.gender}`,
);

type Doc = {
  // A file in resultFiles, or the name a new file will be saved under.
  id: string;
  // The text on disk, or null for a new file that hasn't been saved.
  saved: string | null;
  text: string;
};

function openDoc(id: string): Doc {
  return { id, saved: "", text: "" };
}

function initialDoc(): Doc {
  const id = decodeURIComponent(window.location.hash.slice(1));

  return openDoc(
    resultFiles.some((file) => file.id === id) ? id : DEFAULT_RESULT,
  );
}

// mays2025_men -> mays2026_men
function nextYearId(id: string) {
  return id.replace(
    /([0-9]{4})(?:\.[0-9]+)?_/,
    (_, year) => `${Number(year) + 1}_`,
  );
}

function App() {
  const [doc, setDoc] = useState(initialDoc);
  const [saveError, setSaveError] = useState<string | null>(null);

  const dirty = doc.text !== doc.saved;
  const unsaved = doc.saved === null;

  useEffect(() => {
    window.history.replaceState(null, "", `#${doc.id}`);

    // A new file may share its name with one on disk (next year's file that
    // already exists). Loading that would make saving overwrite it.
    if (unsaved) {
      return;
    }

    let cancelled = false;

    // This also runs when Vite hot-reloads a TG file, so keep unsaved edits.
    resultFiles
      .find((file) => file.id === doc.id)
      ?.load()
      .then((text) => {
        if (!cancelled) {
          setDoc((current) =>
            current.id !== doc.id
              ? current
              : {
                  ...current,
                  saved: text,
                  text: current.text === current.saved ? text : current.text,
                },
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [doc.id, unsaved]);

  const { data, errors } = useMemo(() => {
    try {
      const parsed = readEvent(doc.text);

      if (!parsed.event) {
        return { data: null, errors: parsed.errors };
      }

      const processed = processResults(parsed.event, false);

      return {
        data: processed.event ?? null,
        errors: [...parsed.errors, ...processed.errors],
      };
    } catch (e) {
      return { data: null, errors: [String(e)] };
    }
  }, [doc.text]);

  const confirmDiscard = () =>
    !dirty || window.confirm(`Discard unsaved changes to ${doc.id}.txt?`);

  const handleOpen = (id: string) => {
    if (confirmDiscard()) {
      setSaveError(null);
      setDoc(openDoc(id));
    }
  };

  const handleNextYear = () => {
    if (!data || !confirmDiscard()) {
      return;
    }

    setSaveError(null);
    setDoc({
      id: nextYearId(doc.id),
      saved: null,
      text: writeString(stepOn(data as Event)),
    });
  };

  const handleSave = async () => {
    const { id, saved, text } = doc;

    // The dev server's save-tg-files plugin writes the file. A new file is
    // only created, never written over one that exists.
    const res = await fetch(`/tg-files/${id}`, {
      method: "PUT",
      headers: saved === null ? { "If-None-Match": "*" } : {},
      body: text,
    });

    if (!res.ok) {
      setSaveError(
        res.status === 404
          ? "Saving needs the dev server (pnpm dev)"
          : (await res.text()) || `Couldn't save ${id}.txt`,
      );
      return;
    }

    setSaveError(null);
    setDoc((current) =>
      current.id === id ? { ...current, saved: text } : current,
    );
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();

        if (dirty) {
          handleSave();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    if (!dirty) {
      return;
    }

    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();

    window.addEventListener("beforeunload", onBeforeUnload);

    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty]);

  const isNew = !resultFiles.some((file) => file.id === doc.id);

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="flex flex-row h-screen">
        <div className="flex-1 overflow-auto flex flex-col">
          <div className="flex flex-wrap items-center gap-2 p-1">
            <select value={doc.id} onChange={(e) => handleOpen(e.target.value)}>
              {isNew && <option value={doc.id}>{`${doc.id} (new)`}</option>}
              {Object.entries(resultGroups).map(([group, files]) => (
                <optgroup key={group} label={group}>
                  {files!.map((file) => (
                    <option key={file.id} value={file.id}>
                      {`${group} ${file.year}`}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <button
              type="button"
              className="rounded bg-sky-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:opacity-50 disabled:hover:bg-sky-600"
              disabled={!dirty}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="rounded bg-sky-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              onClick={handleNextYear}
            >
              Generate next years starting positions
            </button>
            <span className="font-mono text-xs text-gray-600 dark:text-gray-300">
              {`${doc.id}.txt`}
              {unsaved
                ? " · new, not saved"
                : dirty
                  ? " · unsaved changes"
                  : ""}
            </span>
            {saveError && (
              <span className="text-xs text-red-700 dark:text-red-300">
                {saveError}
              </span>
            )}
          </div>
          {errors.length > 0 && (
            <ul className="m-2 rounded border border-red-300 bg-red-50 px-3 py-2 font-mono text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
              {errors.map((error, i) => (
                <li key={i} className="whitespace-pre-wrap">
                  {error}
                </li>
              ))}
            </ul>
          )}
          <div className="flex-1">
            <textarea
              className="h-full w-full resize-none bg-transparent px-3 py-1.5 text-base font-mono text-gray-900 dark:text-white"
              name="tg_format"
              spellCheck="false"
              value={doc.text}
              onChange={(e) => {
                const text = e.target.value;
                setDoc((current) => ({ ...current, text }));
              }}
            />
          </div>
        </div>
        <div className="flex-1 h-screen max-w-[480px] overflow-auto">
          {data?.div_size && <BumpsChart data={data as BumpsChartData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
