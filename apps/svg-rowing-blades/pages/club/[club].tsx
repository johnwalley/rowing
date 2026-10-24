import { Blade, names } from "react-rowing-blades";

import { useRouter } from "next/router";
import { type ComponentProps } from "react";
import Layout from "../../components/Layout";

const allNames = {
  ...names.cambridge,
  ...names.international,
  ...names.oxford,
  ...names.uk,
};

const Club = () => {
  const router = useRouter();
  const club = router.query.club as ComponentProps<typeof Blade>["club"];

  return (
    <Layout title={`SVG Rowing Blades | ${allNames[club]}`}>
      <div className="flex flex-col items-center">
        <div className="sm:flex">
          <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <Blade
              club={club}
              size={100}
              className="h-32 w-32 border border-gray-300 bg-white text-gray-300"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold">{allNames[club]}</h4>
            <p className="mt-1">{club}</p>
          </div>
        </div>
        <a href={`/images/${club}.svg`} download={`${club}.svg`}>
          <button className="mt-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Download
          </button>
        </a>
      </div>
    </Layout>
  );
};

export default Club;
