import Image from 'next/image';

const Squad = () => {
  return (
    <section className="relative py-32 pt-40 min-h-[40em] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/middle_bg.webp")',
          opacity: '1'
        }}
      />
      <div className="relative container mx-auto px-4 max-w-[1024px] z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Logo Section */}
          <div className="w-full lg:w-1/2">
            <div className="transform hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_10k.webp" 
                alt="10K Squad" 
                width={300}
                height={300}
                className="w-[200px] sm:w-[250px] lg:w-[300px] mx-auto lg:mx-0"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm sm:text-base text-white opacity-[0.8] leading-relaxed
                         p-6">
              The 10k Squad was created as a place for all the most active community 
              members in Monad and Monad Eco. Started as a group of friends helping 
              each other to be more active and informed. With constant support and 
              help that we were giving to each other we grow more and more each day. 
              You can find us all around Monad Eco and in Monad discord server with 
              10k in our names. We will always be there to help anyone that need any 
              help, and we are always there to kick you if you try to slack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
