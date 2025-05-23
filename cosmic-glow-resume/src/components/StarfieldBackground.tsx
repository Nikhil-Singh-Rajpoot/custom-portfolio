
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StarfieldProps {
  count?: number;
  depth?: number;
  size?: number;
  speed?: number;
  mouseEffect?: number;
}

const generateStarfield = (count: number, depth: number) => {
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  
  for (let i = 0; i < count; i++) {
    // Random positions in 3D space
    positions[i * 3] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = -Math.random() * depth;
    
    // Random sizes
    sizes[i] = Math.random() * 2 + 0.5;
  }
  
  return { positions, sizes };
};

const Starfield = ({ count = 5000, depth = 1000, size = 1, speed = 0.2, mouseEffect = 0.1 }: StarfieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, sizes } = generateStarfield(count, depth);
  
  // Create a texture loader and load the star texture
  const starTexture = new THREE.TextureLoader().load('/star.png');
  
  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current) return;
    
    const elapsedTime = clock.getElapsedTime();
    const points = pointsRef.current;
    
    // Apply mouse effect
    points.rotation.x = (mouse.y - 0.5) * mouseEffect;
    points.rotation.y = (mouse.x - 0.5) * mouseEffect;
    
    // Move stars for depth effect
    const positions = points.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 2] += speed;
      
      // Reset positions when stars move past the camera
      if (positions[i3 + 2] > 0) {
        positions[i3] = (Math.random() - 0.5) * 2000;
        positions[i3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i3 + 2] = -depth;
      }
    }
    
    points.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation={true}
        alphaTest={0.5}
        transparent={true}
        vertexColors={true}
        color={new THREE.Color(0x00ffff)}
        map={starTexture}
      />
    </points>
  );
};

export default Starfield;
