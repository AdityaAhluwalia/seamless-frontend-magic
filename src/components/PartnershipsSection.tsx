
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">Our Technology Partners</h2>
        
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {partners.map((partner, index) => (
            <div key={index} className="text-center max-w-[200px]">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-20 w-20 object-cover mx-auto mb-3 rounded"
                loading="lazy"
              />
              <h3 className="font-semibold text-sm">{partner.name}</h3>
              <p className="text-xs text-gray-500">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
