import { RxCaretDown } from "react-icons/rx";

export function You7() {
  return (
    <div className="w-[590px] h-[400px] text-right mr-20 relative">
      <h3 className="font-bold text-3xl mb-4">Receive revenue</h3>
      <p className="text-xl font-medium">
        Make a request to receive your revenue. We can deposit your
      </p>
      <p className="text-xl font-medium">
        funds to your pre-registered bank account or Paypal account.
      </p>
      <img src="../../../../public/assets/qrates-photo-5.avif" />
      <div className="bg-black absolute w-[6px] top-0 -right-[84px] h-[500px]">
        <div className="absolute top-0 text-7xl -right-[42px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            7
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
