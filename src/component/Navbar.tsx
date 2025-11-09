import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Github, Linkedin, HelpCircle } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className="text-white w-full fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-300 transition-colors">
              <LazyLoadImage
                src="/Grammair-logo-no-bg.png"
                alt="Grammair Logo"
                width={48}
                height={48}
                className="h-12 w-12" // 40px by 40px
              />
              <span className="hidden sm:inline">Grammair</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/info" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 flex items-center gap-1">
                <HelpCircle size={20} />
                <span className="hidden sm:inline">How to Use?</span>
              </Link>
              <Link to="https://github.com/bonzonkim" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700">
                <Github size={20}/>
              </Link>
              <Link to="https://www.linkedin.com/in/bumgu/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700">
                <Linkedin size={20}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
