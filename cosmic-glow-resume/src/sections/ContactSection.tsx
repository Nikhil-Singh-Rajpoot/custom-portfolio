
import { motion } from "framer-motion";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const { email, phone, website, location, profiles } = profileData.basics;
  
  return (
    <section id="contact" className="section flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            <span className="neon-text">CONTACT</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mb-8" />
        </motion.div>
        
        <motion.div
          className="glass-card p-8 mx-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-alt tracking-wider mb-6">GET IN TOUCH</h3>
              
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a 
                      href={`mailto:${email}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </motion.li>
                
                {phone && (
                  <motion.li 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                      📞
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a 
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </motion.li>
                )}
                
                {location && (
                  <motion.li 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                      📍
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p>{location}</p>
                    </div>
                  </motion.li>
                )}
                
                {website && (
                  <motion.li 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                      🌐
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <a 
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {website.replace(/https?:\/\//i, '')}
                      </a>
                    </div>
                  </motion.li>
                )}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alt tracking-wider mb-6">FOLLOW ME</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {profiles.map((profile, index) => (
                  <motion.a
                    key={profile.network}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                      {profile.network[0]}
                    </div>
                    <span>{profile.network}</span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <a 
                  href="#" 
                  className="glow-btn w-full flex justify-center"
                  onClick={() => window.print()}
                >
                  DOWNLOAD RESUME
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
