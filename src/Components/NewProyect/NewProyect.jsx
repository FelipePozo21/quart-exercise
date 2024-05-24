import { VscArrowSmallRight } from "react-icons/vsc";

export function NewProyect() {
  return (
    <div className="h-[180px] bg-black flex items-center relative">
      <div className="flex items-center w-2/3 mx-auto justify-between">
        <div className="flex items-center">
          <h2 className="text-white text-4xl font-bold">Start a new proyect</h2>
          <VscArrowSmallRight color="white" size={70} />
        </div>
        <button className="px-[36px] text-white py-[12px] rounded-full bg-black border-2 border-[#B1B1B1]">
          MAKE YOUR OWN
        </button>
      </div>
    </div>
  );
}
