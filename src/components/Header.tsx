
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-samsung-blue font-semibold text-xl">dipsocial</h1>
        </div>
        <Button 
          variant="default" 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
