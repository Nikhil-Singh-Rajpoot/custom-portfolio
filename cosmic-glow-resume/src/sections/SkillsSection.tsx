
import { motion } from "framer-motion";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const { skills } = profileData;
  
  return (
    <section id="skills" className="section flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            <span className="neon-text">SKILLS</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mb-8" />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-alt tracking-wider">{skill.name}</h3>
                <span className="text-sm font-mono">{skill.level}%</span>
              </div>
              
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1 }}
                />
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {skill.keywords.map(keyword => (
                  <span 
                    key={keyword} 
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
