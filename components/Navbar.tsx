import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Teatro', href: '#teatro' },
    { name: 'Dança', href: '#danca' },
    { name: 'Vídeos', href: '#monologos' },
    { name: 'Fotos', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
        }`}
    >
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-300 ${scrolled ? 'max-w-6xl' : ''}`}>
        <div className={`relative rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-pinky-200/50' : 'bg-black/20 backdrop-blur-sm'
          }`}>
          <a href="#home" className={`text-3xl font-display font-bold tracking-tight transition-colors flex items-center gap-2 ${scrolled ? 'text-pinky-500' : 'text-white'}`}>
            <span>MALU</span>
            <Heart size={20} className="fill-current animate-pulse" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${scrolled
                    ? 'text-gray-600 hover:bg-pinky-100 hover:text-pinky-600'
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-full focus:outline-none transition-colors ${scrolled ? 'bg-pinky-100 text-pinky-600' : 'bg-white/20 text-white'
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X strokeWidth={2.5} />
            ) : (
              <Menu strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-pinky-500 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleClick}
              className="text-3xl font-display font-bold text-white hover:text-pinky-100 transform hover:scale-110 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="absolute bottom-10">
            <Heart className="text-white/50 w-12 h-12 fill-white/20 animate-bounce" />
          </div>
        </div>
      )}
    </nav>
  );
};