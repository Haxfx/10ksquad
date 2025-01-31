import Image from "next/image";

const NftSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-[1024px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-5xl mb-6 w-[60%] text-pink">
              <span className="font-luckiest">Cute </span>
              <span className="font-adrip text-5xl  text-darkpink">NFTs </span>
              <span className="font-luckiest">For </span>
              <span className="font-luckiest">Cute </span>
              <span className="font-adrip text-5xl  text-darkpink">Degens </span>
            </h2>
            <p className="text-xs w-2/3 mb-8 text-black opacity-[0.5]">
              The 10k Squad was created as a place for all the misfits. 
              Everyone deserves to belong and we want to make sure that happens.
            </p>
            <button className="text-[0.7em] bg-purple-900 text-white px-8 py-3 rounded-full 
                             hover:bg-purple-800 hover-glow gradient-button">
              Join Us
            </button>
          </div>
          <div className="w-1/3">
            <div className="relative">
              <div className="bg-backgroundLight rounded-xl pt-[19.5rem]">
                <Image 
                  src="/bird.gif" 
                  alt="Featured NFT Gif" 
                  width="100"
                  height="100"
                  className="w-80 h-88 object-cover rounded-2xl shadow-xl absolute -top-8 left-4 transform hover:scale-125 transition-transform duration-300"
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
