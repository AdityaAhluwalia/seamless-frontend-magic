
import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Introduction</h2>
        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
          <p>
            The Galaxy Watch4 Classic is Samsung's premium smartwatch that combines the traditional look of a high-end timepiece with advanced health and fitness tracking. With a rotating bezel for easy navigation, a vibrant display, and a suite of health monitoring tools, it offers both style and functionality.
          </p>
          <p>
            Powered by Wear OS, the Watch4 Classic provides access to a vast ecosystem of apps while maintaining Samsung's intuitive interface. Its durable design, impressive battery life, and comprehensive feature set make it an excellent choice for anyone seeking a smartwatch that doesn't compromise on aesthetics or capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
