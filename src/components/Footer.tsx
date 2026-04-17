import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm font-light">
            © {currentYear} <span className="text-white font-medium">{personalInfo.name}</span>. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={personalInfo.contact.github} className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a>
          <a href={personalInfo.contact.linkedin} className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
          
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
