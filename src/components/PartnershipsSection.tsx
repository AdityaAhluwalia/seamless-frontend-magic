
import React from 'react';

const PartnershipsSection = () => {
  const partners = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png",
      name: "Google",
      description: "Wear OS Partner"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Strava_Logo.svg/1200px-Strava_Logo.svg.png",
      name: "Strava",
      description: "Fitness Tracking Partner"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
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
                className="h-8 object-contain mx-auto mb-3"
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
