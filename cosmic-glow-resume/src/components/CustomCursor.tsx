
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  useEffect(() => {
    // Only enable custom cursor if reduced motion is not preferred
    if (reducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, reducedMotion]);
  
  // Don't render the custom cursor if reduced motion is preferred
  if (reducedMotion) return null;
  
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
        animate={{ 
          x: position.x - 8,
          y: position.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ 
          width: "16px", 
          height: "16px", 
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,0,255,0.3) 70%, transparent 100%)",
          filter: "blur(1px)",
          boxShadow: "0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.4)"
        }}
      />
      
      {/* Cursor trail particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
          style={{ 
            width: 8 - i,
            height: 8 - i,
            opacity: 0.5 - i * 0.08,
            background: i % 2 ? 
              "radial-gradient(circle, rgba(0,255,255,0.8) 0%, transparent 80%)" :
              "radial-gradient(circle, rgba(255,0,255,0.8) 0%, transparent 80%)",
            filter: "blur(1px)",
          }}
          animate={{ 
            x: position.x - (4 - i/2),
            y: position.y - (4 - i/2),
            opacity: isVisible ? 0.5 - i * 0.08 : 0,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400 - i * 50, 
            damping: 25 - i * 2,
            mass: 0.5 + i * 0.1,
            delay: i * 0.01
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
