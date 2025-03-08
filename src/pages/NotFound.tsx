
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 page-transition">
      <div className="text-center space-y-6 max-w-md animate-slide-up">
        <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-primary/10">
          <span className="text-3xl font-bold text-primary">404</span>
        </div>
        
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        
        <p className="text-muted-foreground">
          We couldn't find the page you were looking for. The page may have been moved, 
          deleted, or never existed.
        </p>
        
        <div className="pt-4">
          <Link to="/">
            <Button className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
