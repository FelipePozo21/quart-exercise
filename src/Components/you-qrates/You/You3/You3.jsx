import { RxCaretDown } from "react-icons/rx";

export function You3() {
  return (
    <div className="w-[600px] text-right h-[600px] mt-6 mr-20 relative">
      <h3 className="font-bold text-3xl mb-4">Collect orders from fans</h3>
      <p className="text-xl font-medium">
        Share your Qrates page and collect orders from your fans. A variety of
        tools are also available to promote your music.
      </p>
      <div className="bg-black absolute w-[6px] top-0 -right-[84px] h-[580px]">
        <div className="absolute top-0 text-7xl -right-[43px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            3
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
