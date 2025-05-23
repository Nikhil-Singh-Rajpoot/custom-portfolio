
import { motion } from "framer-motion";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const EducationSection = () => {
  const { education } = profileData;
  
  if (!education.length) return null;
  
  return (
    <section id="education" className="section flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            <span className="neon-text">EDUCATION</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-alt tracking-wider mb-1">{edu.institution}</h3>
              <p className="font-bold mb-2 text-cyan-400">{edu.studyType} in {edu.area}</p>
              <p className="text-sm text-gray-400 mb-3">
                {edu.startDate} — {edu.endDate || 'Present'}
              </p>
              {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
