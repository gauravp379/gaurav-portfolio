import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              {personalInfo.about}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="glass-card px-6 py-4 flex-1 text-center">
                <h3 className="text-3xl font-bold text-white mb-1">Passionate</h3>
                <p className="text-primary text-sm font-medium">Developer</p>
              </div>
              <div className="glass-card px-6 py-4 flex-1 text-center">
                <h3 className="text-3xl font-bold text-white mb-1">Continuous</h3>
                <p className="text-secondary text-sm font-medium">Learner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Visual element simulating a tech orbit/sphere */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-xl animate-pulse" />
              <div className="absolute w-[120%] h-[120%] rounded-full border border-primary/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-secondary/30 border-dotted animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="glassmorphism w-32 h-32 rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <span className="text-4xl font-heading font-black text-gradient">AI/ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
