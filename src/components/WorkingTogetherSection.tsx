
import React from 'react';

const WorkingTogetherSection = () => {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <div className="inline-block mb-4">
          <span className="inline-block bg-yellow-400 rounded-full p-3">
            <span className="text-2xl">👋</span>
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Interested in working together?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Partner with us to create compelling campaigns for the Samsung Galaxy Watch 4. We work with brands and agencies to develop integrated marketing strategies.
        </p>
        <button className="text-samsung-blue font-medium underline">
          Let's talk about your project
        </button>
      </div>
    </section>
  );
};

export default WorkingTogetherSection;
