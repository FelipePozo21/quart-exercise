import { RxCaretDown } from "react-icons/rx";
export function You1() {
  return (
    <div className="h-[780px] mt-20 text-right mr-20 w-[600px] relative">
      <h3 className="font-bold text-3xl mb-2">Express your work on Qrates</h3>
      <p className="font-bold text-xl mb-2">Qrates studio</p>
      <p className="font-bold text-xl">
        Your product details should match the details of your music.
      </p>
      <p className="font-bold text-xl">
        Tweak and customize your vinyl, sleeve, jacket, and more.
      </p>

      <div className="bg-black absolute w-[6px] top-0 -right-[84px] h-[740px]">
        <div className="absolute top-0 text-7xl -right-[42px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            1
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
