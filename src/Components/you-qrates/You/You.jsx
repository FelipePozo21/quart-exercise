import { You1 } from "./You1/You1";
import { You2 } from "./You2/You2";
import { You3 } from "./You3/You3";
import { You4 } from "./You4/You4";
import { You5 } from "./You5/You5";
import { You6 } from "./You6/You6";
import { You7 } from "./You7/You7";

export function You() {
  return (
    <div className="bg-[#E4E5DE] h-[full] w-full flex flex-col items-end ">
      <div className="w-[500px] flex justify-center flex-col items-center mt-12 mr-20 gap-8">
        <h4 className="px-2 py-[4px] bg-white border-2 border-black font-medium text-lg w-max">
          You
        </h4>
        <h5 className="text-4xl font-bold">Focus on making music</h5>
        <p className="text-xl font-semibold text-center">
          You can focus on your music production with peace of mind: the Artist
          Toolkit has lots of information about music production, knowledge
          about vinyl records and cassettes, and tips on how to sell your music.
          Artist Toolkit
        </p>
      </div>
      <You1 />
      <You2 />
      <You3 />
      <You4 />
      <You5 />
      <You6 />
      <You7 />
    </div>
  );
}
