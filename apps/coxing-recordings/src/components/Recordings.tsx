import { useMemo, useState } from "react";

interface Recording {
  id: string;
  name: string;
  year: string;
  description: string;
  cox: string;
  videoId: string;
}

const embedUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}`;

/**
 * Shows the video's thumbnail, and loads the YouTube player only once it is clicked.
 */
function Video({ recording }: { recording: Recording }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="w-full h-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${recording.videoId}?autoplay=1&rel=0`}
        title={`${recording.name} - Coxswain Recording`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <button
      type="button"
      className="group relative w-full h-full cursor-pointer"
      aria-label={`Play ${recording.name}`}
      onClick={() => setPlaying(true)}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={`https://i.ytimg.com/vi/${recording.videoId}/hqdefault.jpg`}
        alt={recording.name}
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-gray-900/70 group-hover:text-pink-600 group-focus-visible:text-pink-600"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="32" fill="currentColor" />
          <path d="M26 20v24l18-12z" fill="white" />
        </svg>
      </span>
    </button>
  );
}

/**
 * Recordings component that displays a searchable grid of coxing recordings.
 * Renders all recordings but hides non-matching ones, so a playing video doesn't reload.
 */
export default function Recordings({
  recordings,
}: {
  recordings: Recording[];
}) {
  const [searchValue, setSearchValue] = useState("");

  const filteredRecordings = useMemo(() => {
    const query = searchValue.toLowerCase();
    return recordings.filter(
      (recording) =>
        recording.name.toLowerCase().includes(query) ||
        recording.description.toLowerCase().includes(query) ||
        recording.cox.toLowerCase().includes(query) ||
        recording.year.toLowerCase().includes(query),
    );
  }, [recordings, searchValue]);

  const filteredIds = useMemo(
    () => new Set(filteredRecordings.map((r) => r.id)),
    [filteredRecordings],
  );

  const videoStructuredData = useMemo(
    () =>
      recordings.map((recording) => ({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: `${recording.name} - Coxswain Recording`,
        description: recording.description,
        embedUrl: embedUrl(recording.videoId),
        uploadDate: `${recording.year}-01-01`,
        creator: {
          "@type": "Person",
          name: recording.cox,
        },
      })),
    [recordings],
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStructuredData),
        }}
      />
      <h1 className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Coxswain Recordings
      </h1>
      <p className="block text-3xl font-extrabold tracking-tight text-pink-600 sm:text-4xl">
        Get inspired
      </p>
      <form
        className="mt-4 mb-6 sm:flex"
        role="search"
        aria-label="Search coxswain recordings"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="recording-search" className="sr-only">
          Search
        </label>
        <input
          id="recording-search"
          name="search"
          type="search"
          className="w-full mb-4 sm:mb-0 sm:mr-4 px-5 py-3 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 sm:max-w-xs border border-gray-300 rounded-md"
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <p className="self-end">
          Showing <strong>{filteredRecordings.length}</strong> of{" "}
          <strong>{recordings.length}</strong> recordings
        </p>
      </form>
      <h2 className="sr-only">Recordings</h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {recordings.map((recording) => (
          <div
            key={recording.id}
            className={`relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden ${filteredIds.has(recording.id) ? "" : "hidden"}`}
          >
            <div className="aspect-video bg-gray-200">
              <Video recording={recording} />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900">
                {recording.name}
              </h3>
              <p className="text-sm text-gray-500">{recording.description}</p>
              <div className="flex-1 flex flex-col justify-end">
                <p className="text-sm italic text-gray-500">{recording.cox}</p>
                <p className="text-base font-medium text-gray-900">
                  {recording.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredRecordings.length === 0 && (
        <p className="text-gray-500">No recordings match “{searchValue}”</p>
      )}
    </>
  );
}
