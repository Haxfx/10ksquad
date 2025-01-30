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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
          What's New
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-purple-900 rounded-xl p-6 text-white hover:transform 
                         hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-purple-200 mb-4">{item.description}</p>
              <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 
                               py-2 rounded-full transition-colors">
                Get the News
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
