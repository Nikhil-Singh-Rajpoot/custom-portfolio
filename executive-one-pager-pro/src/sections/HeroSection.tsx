
import profile from '@/data/profile';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <AnimatedSection id="hero" className="py-24 md:py-32 min-h-[90vh] flex items-center">
      <div className="container max-w-content mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {profile.basics.picture && (
            <motion.div 
              className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img 
                src={profile.basics.picture} 
                alt={profile.basics.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          )}
          
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-normal mb-2">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{profile.basics.name}</h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">{profile.basics.title}</h2>
              
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                {profile.basics.summary}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
                
                <a 
                  href={profile.basics.links.find(link => link.label.toLowerCase() === 'linkedin')?.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
