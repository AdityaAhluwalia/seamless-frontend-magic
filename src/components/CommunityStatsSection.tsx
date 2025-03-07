
import React from 'react';

const CommunityStatsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="inline-block text-2xl font-semibold bg-samsung-blue text-white px-4 py-1">
            #ACTIVE Community Marketing ✨
          </h2>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1080&auto=format&fit=crop" 
            alt="Galaxy Watch 4 being used" 
            className="w-full h-[300px] object-cover rounded-lg"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-around">
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">8.9K</div>
              <p className="text-sm mb-1">DISCUSSIONS STARTED</p>
              <p className="text-xs">BY COMMUNITY MEMBERS ABOUT THE DEVICE</p>
            </div>
            
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">6.1K</div>
              <p className="text-sm mb-1">NEW MEMBERS</p>
              <p className="text-xs">JOINED THE WEARABLE TECH COMMUNITY</p>
            </div>
            
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-1">52.1K</div>
              <p className="text-sm mb-1">QUESTIONS ANSWERED</p>
              <p className="text-xs">BY SAMSUNG COMMUNITY EXPERTS AND MEMBERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStatsSection;
