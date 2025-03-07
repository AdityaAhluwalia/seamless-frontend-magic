
import React from 'react';

const HighlightsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">The Big Benefits Highlights</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Health monitoring taken to the next level</h3>
            <p className="text-gray-600">
              The Galaxy Watch 4 features advanced sensors that monitor your heart rate, blood oxygen levels, and even body composition, providing comprehensive insights into your health status.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Enhanced workout tracking for all fitness levels</h3>
            <p className="text-gray-600">
              With automatic workout detection for multiple activities and detailed metrics for runners, cyclists, and swimmers, the Galaxy Watch 4 is the perfect companion for fitness enthusiasts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Seamless ecosystem integration</h3>
            <p className="text-gray-600">
              The Galaxy Watch 4 works perfectly with other Samsung devices, allowing you to control your smart home, respond to messages, and manage calls directly from your wrist.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Long-lasting battery and durable design</h3>
            <p className="text-gray-600">
              With up to 40 hours of battery life and a water-resistant design, the Galaxy Watch 4 is built to keep up with your active lifestyle without frequent charging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
