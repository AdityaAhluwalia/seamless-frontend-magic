
import React from 'react';

const AboutSection = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1575311373937-040b8e97df69?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Person using Galaxy Watch while working out"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Galaxy Watch displaying fitness metrics"
    },
    {
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Person checking notifications on Galaxy Watch"
    },
    {
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Close-up of Galaxy Watch features"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">About Samsung GalaxyWatch 4</h2>
        <div className="max-w-3xl mx-auto text-gray-600 mb-10 space-y-4">
          <p>
            The Samsung Galaxy Watch4 is the latest addition to Samsung's smartwatch lineup, featuring advanced health monitoring, fitness tracking, and smart features. With its sleek design and powerful capabilities, it's designed to help users stay connected and healthy throughout their day.
          </p>
          <p>
            With built-in GPS, heart rate monitoring, sleep tracking, and more, the Galaxy Watch4 provides comprehensive insights into your wellbeing. It also offers seamless integration with other Samsung devices and a wide range of third-party apps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img 
                src={feature.image} 
                alt={feature.alt} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
