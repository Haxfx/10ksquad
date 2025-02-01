'use client';

const Hero = () => {
  return (
    <section className="min-h-screen relative">
      <div className="h-screen relative z-10">
        <div 
          className="absolute inset-0 bg-cover z-0"
          style={{
            backgroundImage: 'url("/header_bg.webp")',
            opacity: '1',
            backgroundPosition: '50% 98%',
          }}
        />
      </div>
      <div className="relative h-24 w-full">
        <div 
          className="absolute inset-0 bg-cover bg-top z-10 -top-2"
          style={{
            backgroundImage: 'url("/header_wave.webp")',
            opacity: '1'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
