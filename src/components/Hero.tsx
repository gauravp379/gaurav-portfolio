import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative">
      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wider mb-4 uppercase text-sm md:text-base"
        >
          Hello, World! I am
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl font-light text-gray-300 mb-8 h-10 md:h-12"
        >
          <span className="opacity-80">I am a </span>
          <span className="font-semibold text-gradient">
            <Typewriter
              words={personalInfo.taglines}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="px-8 py-4 rounded-full font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer"
          >
            Contact Me
          </Link>

          <a
            href="/Gaurav_Pawar_Resume.pdf"
            download="Gaurav_Pawar_Resume.pdf"
            className="group px-8 py-4 rounded-full flex items-center gap-2 font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer"
          >
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer text-gray-500 hover:text-white transition-colors"
      >
        <Link to="about" smooth={true} duration={500}>
          <ChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
