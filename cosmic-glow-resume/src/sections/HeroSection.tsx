
import { motion } from "framer-motion";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { name, title } = profileData.basics;
  
  return (
    <section id="hero" className="section flex flex-col justify-center items-center relative">
      <div className="scan-line" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <motion.h1 
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-widest mb-4",
            "relative z-10 text-transparent bg-clip-text bg-neon-gradient"
          )}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {name}
          <div className="absolute inset-0 text-transparent bg-clip-text bg-neon-gradient blur-sm opacity-70" aria-hidden="true">
            {name}
          </div>
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl text-gray-400 font-alt tracking-wider mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {title}
        </motion.h2>
        
        <motion.div
          className="flex flex-col md:flex-row gap-5 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a 
            href="#contact" 
            className="glow-btn group"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <motion.span
              className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity rounded-md"
              initial={false}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          
          <a 
            href="#projects" 
            className="glow-btn group"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <motion.span
              className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity rounded-md"
              initial={false}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute left-0 bottom-8 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.a 
          href="#about"
          className="flex flex-col items-center text-sm text-gray-400 hover:text-white transition-colors"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ▼
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
