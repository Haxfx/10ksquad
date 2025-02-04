'use client';

const Hero = () => {
  return (
    <section className="min-h-screen relative">
      <div className="h-screen relative z-30">
        <div 
          className="relative inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/hero.webp")',
            opacity: '1',
            transform: 'scale(1.1)',
            height: '120vh',
            top: '-25vh',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
      <div className="relative h-24 w-full">
        <div 
          className="absolute inset-0 bg-cover bg-top z-30 -top-2"
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