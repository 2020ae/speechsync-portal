
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              <span className="text-primary">Speech</span>Sync
            </h3>
            <p className="text-sm text-muted-foreground">
              Converting text to natural-sounding speech with advanced AI technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SpeechSync. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              Crafted with precision and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
