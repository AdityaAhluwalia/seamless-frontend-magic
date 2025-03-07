
import React from 'react';

const CommunityStatsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="inline-block text-xl md:text-2xl font-semibold bg-samsung-blue text-white px-4 py-1">
            #ACTIVE Community Marketing ✨
          </h2>
        </div>
        
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Galaxy Watch 4 being used" 
            className="w-full h-[300px] md:h-[350px] object-cover"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-around p-4">
            <div className="text-center text-white mb-4 md:mb-0">
              <div className="text-2xl md:text-3xl font-bold mb-1">8.9K</div>
              <p className="text-xs md:text-sm mb-1">DISCUSSIONS STARTED</p>
              <p className="text-[10px] md:text-xs">BY COMMUNITY MEMBERS ABOUT THE DEVICE</p>
            </div>
            
            <div className="text-center text-white mb-4 md:mb-0">
              <div className="text-2xl md:text-3xl font-bold mb-1">6.1K</div>
              <p className="text-xs md:text-sm mb-1">NEW MEMBERS</p>
              <p className="text-[10px] md:text-xs">JOINED THE WEARABLE TECH COMMUNITY</p>
            </div>
            
            <div className="text-center text-white">
              <div className="text-2xl md:text-3xl font-bold mb-1">52.1K</div>
              <p className="text-xs md:text-sm mb-1">QUESTIONS ANSWERED</p>
              <p className="text-[10px] md:text-xs">BY SAMSUNG COMMUNITY EXPERTS AND MEMBERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStatsSection;
