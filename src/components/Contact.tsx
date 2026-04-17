import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.18c0 5.5 3.3 6.6 6.5 7A4.8 4.8 0 0 0 9.5 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-gray-300 font-light text-lg mb-8">
              I'm always open to discussing product design work, software engineering opportunities, or partnership opportunities. Let's connect!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email Me</h4>
                  <p className="text-sm font-light">{personalInfo.contact.email}</p>
                </div>
              </a>

              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LinkedinIcon size={20} className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                  <p className="text-sm font-light">Connect with me</p>
                </div>
              </a>

              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GithubIcon size={20} className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">GitHub</h4>
                  <p className="text-sm font-light">Check out my repos</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="group relative w-full flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                <span className="relative z-10">Send Message</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
