import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Users, MapPin, MessageCircle, PenTool, Home, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Nexus', href: '/', icon: Home },
    { name: 'Data Logs', href: '/blog', icon: PenTool },
    { name: 'Entities', href: '/characters', icon: Users },
    { name: 'Realms', href: '/places', icon: MapPin },
    { name: 'Network', href: '/community', icon: MessageCircle },
    { name: 'Archives', href: '/books', icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-primary/30 cyber-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-cyber-primary opacity-50 animate-ping"></div>
              </div>
              <span className="text-xl font-bold font-medieval text-cyber-primary neon-text group-hover:text-cyber-secondary transition-colors duration-300">
                CyberScribe
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium font-cyber transition-all duration-300 relative group ${
                      isActive
                        ? 'bg-cyber-primary/20 text-cyber-primary cyber-glow'
                        : 'text-cyber-light hover:bg-cyber-primary/10 hover:text-cyber-primary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-primary"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-primary hover:text-cyber-secondary p-2 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden slide-in-cyber">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-darker/95 border-t border-cyber-primary/30">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 block px-3 py-2 rounded-md text-base font-medium font-cyber transition-all duration-300 ${
                    isActive
                      ? 'bg-cyber-primary/20 text-cyber-primary cyber-glow'
                      : 'text-cyber-light hover:bg-cyber-primary/10 hover:text-cyber-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;