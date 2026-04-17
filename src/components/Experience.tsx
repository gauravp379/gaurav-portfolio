import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Experience & <span className="text-gradient">Learning</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[45px] bg-background p-2 rounded-full border border-white/10 group-hover:border-primary transition-colors">
                {item.type === 'education' ? (
                  <GraduationCap className="w-5 h-5 text-secondary" />
                ) : (
                  <BookOpen className="w-5 h-5 text-primary" />
                )}
              </div>
              
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium">{item.organization}</p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium whitespace-nowrap w-max">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
