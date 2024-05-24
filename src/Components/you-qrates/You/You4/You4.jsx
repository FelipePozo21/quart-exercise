import { RxCaretDown } from "react-icons/rx";

export function You4() {
  return (
    <div className="h-[284px] w-[600px] text-right mr-20 relative">
      <h3 className="font-bold text-3xl mb-4">
        Upload yout product assets and start production
      </h3>
      <p className="text-xl font-medium">
        Prepare your audio and print files required for production.
      </p>
      <div className="bg-black absolute w-[6px] top-0 -right-[84px] h-[298px]">
        <div className="absolute top-0 text-7xl -right-[42px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            4
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
