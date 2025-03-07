
import React from 'react';

const MarketingStrategySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Community Marketing Strategy</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-lg font-semibold mb-3">1. Establish and stimulate discussion in Samsung's platforms</h3>
            <p className="text-gray-600 mb-4">
              Create engaging content and discussions across Samsung's owned platforms to generate buzz and interest in the Galaxy Watch 4. Foster an active community of users who can share experiences, tips, and feedback.
            </p>
            <p className="text-gray-600">
              Implement a content calendar that includes product highlights, user testimonials, expert reviews, and interactive elements like polls and Q&A sessions to keep the community engaged and informed.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex-1 min-w-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1575311373937-040b8e97df69?q=80&w=300&auto=format&fit=crop" 
                alt="Galaxy Watch 4 on wrist" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1 min-w-[300px] bg-pink-50 rounded-lg p-6">
              <div className="text-center">
                <h3 className="text-gray-500 mb-2">DEVICE USAGE</h3>
                <div className="text-5xl font-bold mb-2">75</div>
                <p className="text-gray-500">PERCENT OF OWNERS USE THE DEVICE DAILY</p>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-gray-500 mb-2">ENGAGEMENT</h3>
                <div className="text-5xl font-bold mb-2">3.8M</div>
                <p className="text-gray-500">COMMUNITY POSTS AND REPLIES ABOUT GALAXY WATCH</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-lg font-semibold mb-3">2. Bring industry experts to share best practices</h3>
            <p className="text-gray-600 mb-4">
              Partner with fitness trainers, health experts, and technology influencers to provide valuable insights and demonstrate how to maximize the Galaxy Watch 4's features.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Host live Q&A sessions with fitness professionals discussing workout tracking</li>
              <li>Create educational content with healthcare experts about health monitoring features</li>
              <li>Collaborate with tech reviewers to showcase device customization and optimization</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">3. Community leaders to moderate discussions</h3>
            <p className="text-gray-600 mb-4">
              Identify and empower community leaders who can facilitate meaningful discussions, provide support, and create a positive environment for Galaxy Watch 4 users.
            </p>
            <p className="text-gray-600">
              Select active and knowledgeable community members to serve as moderators who can answer questions, share expert tips, and ensure discussions remain constructive and helpful. Provide these leaders with exclusive access to product information and training to enhance their effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategySection;
