import * as React from "react";

import { Blade, clubs, shortNames } from "react-rowing-blades";

import Layout from "../components/Layout";
import Link from "next/link";

const allShortNames = {
  ...shortNames.cambridge,
  ...shortNames.oxford,
  ...shortNames.uk,
  ...shortNames.international,
};

const allClubs = [
  ...clubs.cambridge,
  ...clubs.oxford,
  ...clubs.uk,
  ...clubs.international,
].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const IndexPage = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const filteredClubs = React.useMemo(
    () =>
      allClubs.filter((club) =>
        allShortNames[club].toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  return (
    <Layout title="SVG Rowing Blades">
      <div className="bg-white">
        <div className="pb-8">
          <h2 className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            SVG Rowing Blades
          </h2>
          <p className="block text-3xl font-extrabold tracking-tight text-pink-600 sm:text-4xl">
            Find and download images
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="blade-search" className="sr-only">
              Search
            </label>
            <input
              id="blade-search"
              name="search"
              type="search"
              className="w-full mb-4 sm:mb-0 sm:mr-4 px-5 py-3 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 sm:max-w-xs border-gray-300 rounded-md"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            />
            <p className="self-end">
              Showing <strong>{filteredClubs.length}</strong> of{" "}
              <strong>{allClubs.length}</strong> blades
            </p>
          </form>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"
      >
        {filteredClubs.map((club) => (
          <Link key={club} href={`club/${club}`}>
            <a>
              <li key={club} className="relative">
                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden">
                  <Blade
                    club={club}
                    className="object-cover pointer-events-none group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for {club}</span>
                  </button>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {allShortNames[club]}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none font-mono">
                  {club}
                </p>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
