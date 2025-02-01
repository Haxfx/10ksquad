'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState<'squad' | 'artists'>('squad');

  const artistMembers: TeamMember[] = [
    {
      id: 1,
      name: "Artist 1",
      role: "Lead Artist",
      description: "Creating unique and vibrant artwork for the 10K Squad collection.",
      image: "/team/1000026806.png"
    },
    {
      id: 2,
      name: "Artist 2",
      role: "Character Designer",
      description: "Specializing in character design and animation.",
      image: "/team/artist2.png"
    },
    {
      id: 3,
      name: "Artist 3",
      role: "Background Artist",
      description: "Crafting immersive backgrounds and environments.",
      image: "/team/artist3.png"
    },
    {
      id: 4,
      name: "Artist 4",
      role: "Concept Artist",
      description: "Developing initial concepts and visual direction.",
      image: "/team/artist4.png"
    },
    {
      id: 5,
      name: "Artist 5",
      role: "Digital Artist",
      description: "Expert in digital art and NFT creation.",
      image: "/team/artist5.png"
    },
    {
      id: 6,
      name: "Artist 6",
      role: "Creative Director",
      description: "Overseeing the artistic vision of the project.",
      image: "/team/artist6.png"
    }
  ];

  const squadMembers: TeamMember[] = [
    {
      id: 1,
      name: "Puresoul",
      role: "Wannabe Founder",
      description: "Caffeine addict and workaholic. Leader of this Squad.",
      image: "/team/puresoul.png"
    },
    {
      id: 2,
      name: "LKA",
      role: "Lead Kindness Advocate",
      description: "Digital diva & creative catalyst combining visionary vibes with a tactical touch!",
      image: "/team/lka.jpg"
    },
    {
      id: 3,
      name: "MGD",
      role: "Mediator Gatekeeper Director",
      description: "Balancing grace with a touch of sidekick energy",
      image: "/team/mgd.jpg"
    },
    {
      id: 4,
      name: "JEEZY",
      role: "Ban Hammer",
      description: "Because why be ordinary when you can be extraordinary?",
      image: "/team/jeezy.jpg"
    },
    {
      id: 5,
      name: "CASH",
      role: "Newbies King",
      description: "I'm the referee, the babysitter, and the therapist—all in one. Welcome to the glamorous life of moderating.",
      image: "/team/cash.jpg"
    },
    {
      id: 6,
      name: "AFONSO",
      role: "Jolly Fella",
      description: "A perfect balance of authority and cheer—he'll ban you, but only after making you smile. Also, Happy Holidays.",
      image: "/team/afonso.jpg"
    },
    {
      id: 7,
      name: "KARATE KID",
      role: "Byte Me",
      description: "The person who knows more about bots than they do about people—yet somehow manages to make the server run smoother than your Wi-Fi during a Zoom meeting.",
      image: "/team/karatekid.jpg"
    },
    {
      id: 8,
      name: "UDAY",
      role: "Bug Slayer",
      description: "Master at creating elegant solutions to problems he have never seen before, and master at creating even more problems for problems he've already solved.",
      image: "/team/uday.png"
    },
    {
      id: 9,
      name: "THE INVISIBLE J",
      role: "Unsung Mod Hero",
      description: "Silently watching, making sure chaos doesn't erupt, and only stepping in when the conversation turns into a dumpster fire—usually just in time to say, \"Please keep it civil!\"",
      image: "/team/theinvisiblej.jpg"
    },
    {
      id: 10,
      name: "LEYS BOBR",
      role: "Your Wet Dream",
      description: "Is the fresh recruit who only knows two commands: \"mute\" and \"ban,\" and he use both liberally, hoping he'll figure out the rest later.",
      image: "/team/leysbobr.PNG"
    },
    {
      id: 11,
      name: "KUTSAL",
      role: "JPEG Pirate",
      description: "Navigating the high seas of the blockchain, searching for rare and valuable digital booty.",
      image: "/team/kutsal.PNG"
    },
    {
      id: 12,
      name: "SIKDAR",
      role: "Wannabe Colab Manager",
      description: "He is keeping the team sane, and somehow convincing everyone that it's all under control—just before the next unexpected curveball lands.",
      image: "/team/sikdar.png"
    }
  ];

  return (
    <section className="relative py-20 lg:px-20"><div 
        className="absolute inset-0 bg-cover bg-top z-0 top-[-9rem] mb-[-12rem]"
        style={{
          backgroundImage: 'url("/team_bg.webp")',
          opacity: '1'
        }}
      />
      <div className="relative container mx-auto px-4 max-w-[1280px]">
        <div className="flex justify-between mb-12 font-luckiest text-xl">
          <div className="text-white font-adrip text-4xl">
            The 10k Team
          </div>
          <div className="flex">
          <button 
            onClick={() => setActiveTab('squad')}
            className={`px-6 py-2 transition-allduration-300
              ${activeTab === 'squad' 
                ? 'text-white' 
                : 'text-white/20'}`}
                >
            10K Squad
          </button>
          <button 
            onClick={() => setActiveTab('artists')}
            className={`px-6 py-2 rounded-full transition-all duration-300
              ${activeTab === 'artists' 
                ? 'text-white' 
                : 'text-white/20'}`}
                >
            10K Artists
          </button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(activeTab === 'squad' ? squadMembers : artistMembers).map((member) => (
            <div 
              key={member.id} 
              className="bg-background rounded-xl p-6 text-black hover:transform 
                         hover:scale-105 transition-transform relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-56 bg-cover bg-center opacity-100"
                style={{
                  backgroundImage: `url('${member.image}')`
                }}
              />
              <div className="relative z-10 mt-44 -mb-10"> 
                <div 
                  className="absolute top-[-20px] left-5 h-7 w-7 z-10 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(`/logo_10k.webp")'
                  }}
                />
                <h3 className="text-xl font-bold text-left mb-2">{member.name}</h3>
                <p className="text-sm font-bold text-left text-purple-900 mb-2">{member.role}</p>
                <p className="text-xs text-left text-purple-900/80">{member.description}</p>
                <div className="flex justify-center space-x-3 mt-4">
                  <a href="#" className="text-purple-900 hover:text-purple-700">
                    <Image 
                      src="/twitter.svg" 
                      alt="Twitter" 
                      width={20} 
                      height={20}
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
