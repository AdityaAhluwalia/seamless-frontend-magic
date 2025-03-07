
import React from 'react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1576846628882-27ed23c1186d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Healthcare",
      description: "How medical professionals use Galaxy Watch 4 to monitor patients"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Fitness Enthusiasts",
      description: "Tracking performance gains with Galaxy Watch 4"
    },
    {
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Everyday Use",
      description: "How Galaxy Watch 4 fits into daily life"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-10">More Case Studies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{study.title}</h3>
                <p className="text-gray-600 text-sm">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
