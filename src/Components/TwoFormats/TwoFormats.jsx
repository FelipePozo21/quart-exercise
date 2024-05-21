export function TwoFormats() {
  return (
    <div className="max-h-[1000px] bg-[#E4E5DE]">
      <div className="text-center text-4xl font-bold h-[220px] flex justify-center items-center border-2 border-b-black">
        <h2>Choose from two formats with promised quality</h2>
      </div>
      <div className="flex justify-center h-[600px] items-center w-full gap-32">
        <div className="flex items-center flex-col justify-center w-[520px] h-[550px] gap-6 mt-8 ">
          <h3 className="font-bold text-4xl">Vinyl</h3>
          <p className="w-[520px] font-semibold text-pretty text-center text-lg">
            We know how special pressed records are to you. Our products are
            built for fans, by fans. We make it easy for artists to press vinyl,
            so the music you love can keep reaching ears in the most beautiful
            way.
          </p>
          <img
            className="w-[520px] h-[325px] "
            src="../../../../public/assets/qrates-photo-11.avif"
          />
        </div>
        <div className="absolute border border-black h-[600px] w-[1px]"></div>
        <div className="flex items-center flex-col justify-center w-[520px] h-[550px] gap-6 mt-8">
          <h3 className="font-bold text-4xl">Cassette</h3>
          <p className="w-[520px] font-semibold text-pretty text-center text-lg">
            Cassettes have always been special to music fans and artists.
            Whether you are saving a recording of a great concert, or preserving
            an early demo, there’s no better way to keep that music close than
            on cassette tapes.
          </p>
          <img
            className="w-[520px] h-[325px]"
            src="../../../../public/assets/qrates-photo-10.avif"
          />
        </div>
      </div>
    </div>
  );
}
