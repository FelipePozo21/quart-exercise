import disc from "../../../icons/disc.svg";

export function ForArtist() {
  return (
    <div>
      <div className="w-screen bg-black h-[1400px] relative flex justify-center items-center">
        <div className="mx-12 w-[70vw] flex flex-col my-4 h-[1400px] items-start  text-wrap gap-8">
          <div className="mt-20 flex flex-col gap-6">
            <div>
              <button className="text-white font-semibold px-2 py-2 border-2 border-white">
                FOR ARTISTS
              </button>
            </div>
            <div className="w-[550px] flex flex-col gap-12">
              <h1 className="text-white text-6xl font-bold">
                Music in your hands. Without the barriers.
              </h1>
              <p className="text-white text-3xl font-semibold">
                Full-service production, a global retail network, customer
                support - and you keep up to 85% of profits. ↓
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[600px] h-[750px] absolute top-[140px] right-[450px] rotate-12 z-10"
              src="../../../../public/assets/qrates-photo-1.avif"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[600px] h-[750px] absolute -rotate-12 left-[360px] bottom-16"
              src="../../../../public/assets/qrates-photo-2.avif"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[500px] h-[500px] absolute right-[450px] z-10 bottom-[100px]"
              src={disc}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
