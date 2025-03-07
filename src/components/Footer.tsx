
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-samsung-blue font-semibold text-xl mb-1">dipsocial</div>
            <div className="text-gray-500 text-sm">© 2023 All rights reserved</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="space-y-1 text-gray-500">
                <li>Company</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-gray-500">
                <li>Marketing</li>
                <li>Analytics</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1 text-gray-500">
                <li>Email</li>
                <li>Phone</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
