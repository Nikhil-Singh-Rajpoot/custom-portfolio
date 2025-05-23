
import { motion } from "framer-motion";
import { useState } from "react";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }: { project: typeof profileData.projects[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      className="h-80 w-full relative perspective"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className={cn(
            "absolute inset-0 w-full h-full rounded-lg shadow-lg",
            "backface-hidden overflow-hidden glass-card"
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-alt tracking-wider mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="mt-auto flex gap-3">
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  Live Demo
                </a>
              )}
              {project.repo && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className={cn(
            "absolute inset-0 w-full h-full rounded-lg shadow-lg",
            "backface-hidden overflow-hidden p-6 glass-card"
          )}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-alt tracking-wider mb-4 text-center">Technologies</h3>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.map((tech) => (
              <div 
                key={tech} 
                className="px-3 py-1 bg-neon-gradient text-black text-sm rounded-full font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { projects } = profileData;
  
  if (!projects.length) return null;
  
  return (
    <section id="projects" className="section flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            <span className="neon-text">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
