
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/fbf2eb45-41f7-4436-911e-314dcd829c0e.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="relative z-10">
          <div className="inline-block bg-white px-3 py-1 rounded-md text-sm mb-3">
            SAMSUNG
          </div>
          <h1 className="text-white text-5xl font-bold mb-4">
            #AllNewGalaxyWatch4
          </h1>
          <p className="text-white text-xl max-w-md">
            Discover the next generation of wearable technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
