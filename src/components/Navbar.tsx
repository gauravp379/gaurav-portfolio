import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-heading font-bold text-gradient">
          {personalInfo.name.split(' ')[0]}<span className="text-gray-100">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary before:w-full"
              className="relative cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition-colors
                         before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 
                         before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-300
                         hover:before:w-full"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={personalInfo.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-full border border-white/20 hover:border-primary/50 hover:bg-white/5 transition-all text-sm font-medium"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 glassmorphism transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0 border-transparent opacity-0'}`}>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white font-medium text-lg py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
