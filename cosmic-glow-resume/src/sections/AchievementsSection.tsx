
import { motion } from "framer-motion";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const AchievementsSection = () => {
  const { achievements } = profileData;
  
  if (!achievements.length) return null;
  
  return (
    <section id="achievements" className="section flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            <span className="neon-text">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6 px-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={`${achievement.title}-${index}`}
              className="glass-card p-6 border-l-4"
              style={{ borderColor: `rgba(0, 255, 255, ${0.5 + (index % 3) * 0.15})` }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-alt tracking-wider mb-1">{achievement.title}</h3>
              {achievement.awarder && (
                <p className="font-bold mb-2 text-cyan-400">{achievement.awarder}</p>
              )}
              <p className="text-sm text-gray-400 mb-3">{achievement.date}</p>
              <p className="text-gray-300">{achievement.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
