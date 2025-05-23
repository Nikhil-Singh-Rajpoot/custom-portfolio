
import { motion } from "framer-motion";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const { work } = profileData;
  
  return (
    <section id="experience" className="section flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            <span className="neon-text">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mb-8" />
        </motion.div>
        
        <div className="relative px-4">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-cyan-400" />
          
          {work.map((job, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={`${job.company}-${index}`}
                className={cn(
                  "flex flex-col md:flex-row items-center mb-12 relative",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white z-10 transform md:translate-x-[-50%] shadow-neon" />
                
                {/* Content */}
                <div className={cn(
                  "w-full md:w-1/2 mb-4 md:mb-0",
                  isEven ? "md:pr-12" : "md:pl-12"
                )}>
                  <div className="glass-card p-6 hover:shadow-neon transition-shadow duration-300">
                    <h3 className="text-xl font-alt tracking-wider mb-1">{job.position}</h3>
                    <h4 className="text-lg font-bold mb-2 text-cyan-400">{job.company}</h4>
                    <p className="text-sm text-gray-400 mb-3">
                      {job.startDate} — {job.endDate || 'Present'}
                    </p>
                    <p className="text-gray-300 mb-4">{job.summary}</p>
                    
                    <ul className="list-disc list-inside space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i} 
                          className="text-sm text-gray-400"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
