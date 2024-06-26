import { RxCaretDown } from "react-icons/rx";

export function You2() {
  return (
    <div className="mr-20 text-right w-[590px] relative">
      <h3 className="font-bold text-3xl mb-2">Start a Qrates page,</h3>
      <h3 className="font-bold text-3xl ">
        confirm and pay for production cost.
      </h3>
      <h3 className="font-bold text-3xl mb-4">Pay up front? Crowdfunding?</h3>
      <p className="text-xl font-medium">
        Pay for the production of your product in advance and start production
        immediately, or choose the crowdfunding option and press as many copies
        you like with pledges you collect from your fans.
      </p>
      <h4 className="text-2xl font-semibold mb-4">
        Qrates page and Artist page
      </h4>
      <p className="text-xl font-medium">
        The Qrates page is your storefront on Qrates to sell your music. The
        Artist page is your profile page. Upload your images to the template
        provided and fill in the form to set it up.
      </p>
      <img
        className="mt-4"
        src="../../../../public/assets/qrates-photo-12.avif"
        alt=""
      />
      <div className="bg-black absolute w-[6px] top-0 -right-[84px] h-[740px]">
        <div className="absolute top-0 text-7xl -right-[42px]">
          <p className="border-4 border-black px-6 py-2  bg-white rounded-full">
            2
          </p>
        </div>
        <RxCaretDown size={60} className="absolute -bottom-6 -left-[28px]" />
      </div>
    </div>
  );
}
