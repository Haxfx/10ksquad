'use client';

interface NewsCard {
  id: number;
  title: string;
  description: string;
}

const WhatsNew = () => {
  const newsItems: NewsCard[] = [
    {
      id: 1,
      title: "Our Stories are Up",
      description: "Check out our latest collection stories"
    },
    {
      id: 2,
      title: "New Collection Drop",
      description: "Don't miss our exclusive drop"
    },
    {
      id: 3,
      title: "Community Update",
      description: "See what's happening in our community"
    },
    {
      id: 4,
      title: "Special Event",
      description: "Join our upcoming special event"
    }
  ];

  return (
    <section className="py-20">
      <div className="relative container mx-auto px-4  max-w-[1024px]">
        <h2 className="text-md text-left font-luckiest text-heading mb-2">
          The 10k News
        </h2>
        <h2 className="text-4xl text-left font-adrip text-black mb-12">
          What&#39;s New
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#F8CBE3] rounded-xl p-6 text-black hover:transform 
                         hover:scale-105 transition-transform relative overflow-visible cursor-pointer"
            >
              <div 
                className="absolute rounded-xl top-0 left-0 right-0 h-32 bg-cover bg-center opacity-100
                          shadow-[inset_0_20px_20px_rgba(0,0,0,0.4)]"
                style={{
                  backgroundImage: 'url("/news.webp")'
                }}
              />
              <div className="flex flex-col z-10 mt-28 h-28"> 
                <div 
                  className="absolute bottom-32 left-11 h-7 w-7 z-10 bg-cover bg-center opacity-100"
                  style={{
                    backgroundImage: 'url("/logo_10k.webp")'
                  }}
                />
                <h3 className="text-md text-black mb-3 pt-6">{item.title}</h3>
                <p className="text-xs text-black mb-4">{item.description}</p>
              </div>
              <button className="absolute text-xs -bottom-[18] right-4 transform 
                                 bg-purple-800 hover:bg-pink-500 text-white px-3 
                                 py-2 rounded-lg transition-colors shadow-lg">
                  Get me there!
                </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
