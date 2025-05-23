
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useIsMobile } from '@/hooks/use-mobile';
import Starfield from './StarfieldBackground';

const ThreeCanvas = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const isMobile = useIsMobile();
  
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
  
  if (reducedMotion) {
    return (
      <div className="fixed inset-0 z-[-1] bg-black">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))"
             }} 
        />
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Starfield 
          count={isMobile ? 2000 : 5000} 
          depth={1500}
          speed={0.2}
          mouseEffect={0.05}
        />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
