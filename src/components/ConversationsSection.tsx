
import React from 'react';

const ConversationsSection = () => {
  // Array of mock conversation screenshots
  const conversations = Array(8).fill(null).map((_, index) => (
    <div key={index} className="bg-white rounded-md shadow-sm p-3 text-xs h-full">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
        <div>
          <div className="font-medium">User{index + 1}</div>
          <div className="text-gray-500 text-[10px]">Just now</div>
        </div>
      </div>
      <p className="text-gray-700">
        The Galaxy Watch 4 has completely changed how I monitor my fitness. The body composition feature is incredibly useful!
      </p>
    </div>
  ));

  return (
    <section className="py-12 md:py-16 bg-samsung-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Real People Real Conversations 💬</h2>
        <p className="text-center text-sm text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10">
          Here's what our community members are saying about their experiences with the Samsung Galaxy Watch 4
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {conversations}
        </div>
      </div>
    </section>
  );
};

export default ConversationsSection;
