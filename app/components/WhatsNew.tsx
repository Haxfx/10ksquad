'use client';

interface NewsCard {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const WhatsNew = () => {
  const newsItems: NewsCard[] = [
    {
      id: 1,
      title: "Sneak Peaks",
      description: "Sneak peaks will be posted in our discord. Stay tunned!",
      image: "/news.webp",
      url: "/",
    },
    {
      id: 2,
      title: "New Collection Drop",
      description: "Don't miss our exclusive drop",
      image: "/news_2.webp",
      url: "/",
    },
    {
      id: 3,
      title: "Community Update",
      description: "Follow us on twitter  for all the info.",
      image: "/news.webp",
      url: "https://x.com/the10kSquad",
    },
    {
      id: 4,
      title: "Special Event",
      description: "The 10k squad artists will draw entire collection in Live VC chats in Monad and Monad Eco projects.",
      image: "/news.webp",
      url: "https://x.com/the10kSquad/status/1884283579074764874?t=hxVXpbTTIMaDfRO98M1GOg&s=19",
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
                  backgroundImage:`url("${item.image}")`
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
              <a href={item.url} target="_blank">
                <button className="absolute text-xs -bottom-[18] right-4 transform 
                                 bg-purple-800 hover:bg-pink-500 text-white px-3 
                                 py-2 rounded-lg transition-colors shadow-lg">
                  Get me there!
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
