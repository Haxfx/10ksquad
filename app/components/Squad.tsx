
import Image from 'next/image';

const Squad = () => {
    return (
      <section className="relative py-20 h-[40em] items-center">
        <div 
          className="absolute inset-0 bg-cover bg-top z-0"
          style={{
            backgroundImage: 'url("/middle_bg.webp")',
            opacity: '1'
          }}
        />
        <div className="relative container mx-auto px-4 h-full  max-w-[1024px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
            <div className="md:w-1/2">
              <div className="mb-8">
                          <Image 
                            src="/logo_10k.webp" 
                            alt="10K Squad" 
                            width={300}
                            height={300}
                            className="w-auto"
                          />
                        </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm mb-8 text-white opacity-[0.8]">
              The 10k Squad was created as a place for all the most active community members in Monad and Monad Eco. Started as a group of friends helping each other to be more active and informed . With constant support and help that we were giving to each other we grow more and more each day. You can find us all around Monad Eco and in Monad discord server with 10k in our names. We will always be there to help anyone that need any help, and we are always there to kick you if you try to slack .
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Squad;
  