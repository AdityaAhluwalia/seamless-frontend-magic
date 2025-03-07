
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/fbf2eb45-41f7-4436-911e-314dcd829c0e.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto h-full flex flex-col justify-center px-4">
        <div className="relative z-10 max-w-lg">
          <div className="inline-block bg-white px-3 py-1 rounded-md text-sm mb-3">
            SAMSUNG
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            #AllNewGalaxyWatch4
          </h1>
          <p className="text-white text-lg md:text-xl max-w-md mb-6">
            Discover the next generation of wearable technology
          </p>
          <Button className="bg-samsung-blue hover:bg-blue-700 text-white flex items-center gap-2">
            Explore Features <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
