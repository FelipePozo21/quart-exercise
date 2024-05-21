import { Qrates1 } from "./Qrates1/Qrates1";
import { Qrates2 } from "./Qrates2/Qrates2";
import { Qrates3 } from "./Qrates3/Qrates3";
import { Qrates4 } from "./Qrates4/Qrates4";
import { Qrates5 } from "./Qrates5/Qrates5";
import { Qrates6 } from "./Qrates6/Qrates6";
import { Qrates7 } from "./Qrates7/Qrates7";

export function Qrates() {
  const text = `Well'take care of the hassle`;
  return (
    <div className="bg-[#FFF804] h-[full] w-full flex flex-col items-start ">
      <div className="w-[500px] flex justify-center flex-col items-center mt-12 ml-20 gap-8">
        <h4 className="px-2 py-[4px] bg-white border-2 border-black font-medium text-lg w-max">
          QRATES
        </h4>
        <h5 className="text-4xl font-bold">{text}</h5>
        <p className="text-xl font-semibold text-center">
          You can focus on your music production with peace of mind: the Artist
          Toolkit has lots of information about music production, knowledge
          about vinyl records and cassettes, and tips on how to sell your music.
          Artist Toolkit
        </p>
      </div>
      <Qrates1 />
      <Qrates2 />
      <Qrates3 />
      <Qrates4 />
      <Qrates5 />
      <Qrates6 />
      <Qrates7 />
    </div>
  );
}
