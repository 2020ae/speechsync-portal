
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      // Play exit animation
      if (containerRef.current) {
        containerRef.current.classList.add('opacity-0');
        containerRef.current.classList.remove('opacity-100');
      }
      
      // After animation, update ref and play enter animation
      const timeout = setTimeout(() => {
        prevLocationRef.current = location.pathname;
        if (containerRef.current) {
          containerRef.current.classList.remove('opacity-0');
          containerRef.current.classList.add('opacity-100');
        }
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);
  
  return (
    <div 
      ref={containerRef}
      className="transition-opacity duration-300 opacity-100"
    >
      {children}
    </div>
  );
};

export default PageTransition;
