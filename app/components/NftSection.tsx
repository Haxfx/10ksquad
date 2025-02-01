import Image from "next/image";

const NftSection = () => {
  return (
    <section className="lg:py-20">
      <div className="container mx-auto px-4 max-w-[1024px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 lg:w-[80%] text-pink tracking-wide-plus">
              <span className="font-luckiest">Cute </span>
              <span className="font-adrip text-darkpink text-4xl">NFTs </span>
              <span className="font-luckiest">For </span>
              <br className="hidden sm:block" />
              <span className="font-luckiest">Cute </span>
              <span className="font-adrip text-darkpink text-4xl">Degens</span>
            </h2>
            <p className="text-xs sm:text-sm w-full lg:w-2/3 mb-8 text-black opacity-[0.5] leading-relaxed">
              The 10k Squad was created as a place for all the misfits. 
              Everyone deserves to belong and we want to make sure that happens.
            </p>
            <button className="text-[0.8em] bg-purple-900 text-white px-8 py-3 rounded-full 
                             hover:bg-purple-800 hover-glow gradient-button">
              Join Us
            </button>
          </div>

          {/* NFT Image */}
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <div className="relative">
              <div className="bg-backgroundLight rounded-xl pt-[19.5rem] w-full">
                <Image 
                  src="/bird.gif" 
                  alt="Featured NFT Gif" 
                  width={400}
                  height={400}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                           w-[80%] sm:w-[90%] rounded-2xl shadow-xl
                           hover:scale-105 transition-transform duration-300
                           cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftSection;
