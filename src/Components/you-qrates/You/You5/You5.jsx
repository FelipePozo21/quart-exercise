import { RxCaretDown } from "react-icons/rx";

export function You5() {
  return (
    <div className="w-[800px] h-[427px] bg-transparent mt-20 flex items-center justify-center relative">
      <img
        className="w-[600px] h-[427px] bg-transparent"
        src="https://images.prismic.io/qrates-prd/d405f120-87ed-4136-aea5-3b0c903a5a45_Frame+440.png?auto=compress,format"
      />
      <div className="bg-black absolute w-[6px] top-0 -right-[4px] h-[410px]">
        <div className="absolute top-0 text-7xl -right-[42px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            5
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
