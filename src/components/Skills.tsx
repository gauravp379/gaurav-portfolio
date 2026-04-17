import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {skillGroup.items.map((item, i) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                        <span className="text-sm font-semibold text-primary">{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2.5 backdrop-blur-sm overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                          className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full relative"
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 translate-x-[-150%] group-hover:animate-[shimmer_2s_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
