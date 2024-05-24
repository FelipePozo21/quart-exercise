import { RxCaretDown } from "react-icons/rx";

export function You6() {
  return (
    <div className="h-[700px] relative">
      <div className="bg-black absolute w-[6px] top-0 -right-[4px] h-[660px]">
        <div className="absolute top-0 text-7xl -right-[42px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            6
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
