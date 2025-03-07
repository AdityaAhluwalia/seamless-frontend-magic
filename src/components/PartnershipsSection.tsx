
import React from 'react';

const PartnershipsSection = () => {
  const partners = [
    {
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Google",
      description: "Wear OS Partner"
    },
    {
      logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Strava",
      description: "Fitness Tracking Partner"
    },
    {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Adidas",
      description: "Athletic Wear Partner"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8 md:mb-12">Our Technology Partners</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center max-w-[200px] transition-transform hover:scale-105">
              <div className="bg-gray-50 rounded-full p-4 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-16 w-16 object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
