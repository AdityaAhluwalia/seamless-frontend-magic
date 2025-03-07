
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-samsung-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-around text-center mb-12">
          <div>
            <div className="text-3xl font-bold mb-2">100,000+</div>
            <p className="text-sm text-gray-300">ACTIVE WATCH USERS</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">700M+</div>
            <p className="text-sm text-gray-300">DATA POINTS COLLECTED</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">75</div>
            <p className="text-sm text-gray-300">FITNESS ACTIVITIES TRACKED</p>
          </div>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h3 className="text-samsung-navy font-semibold text-center mb-6">Ready to get started?</h3>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 text-sm mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 text-sm mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-gray-700 text-sm mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm"
                  placeholder="Enter your company name"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-samsung-blue text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
              
              <div className="text-center text-gray-500 text-xs mt-4">
                By submitting, you agree to our privacy policy
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
