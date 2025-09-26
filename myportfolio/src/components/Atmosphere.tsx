import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Atmosphere() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[1, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec3 vNormal;
          
          vec3 palette( float t ) {
            vec3 a = vec3(0.5, 0.5, 0.5);
            vec3 b = vec3(0.5, 0.5, 0.5);
            vec3 c = vec3(1.0, 1.0, 1.0);
            vec3 d = vec3(0.263, 0.416, 0.557);
            return a + b * cos(6.28318 * (c * t + d));
          }
          
          void main() {
            float pulse = sin(uTime * 1.5) * 0.15 + 0.85;
            float wave = sin(uTime * 2.0 + vNormal.x * 5.0) * 0.1;
            float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0) * (pulse + wave);
            vec3 color = palette(intensity * 0.2 + uTime * 0.1);
            vec3 glow = mix(vec3(0.3, 0.6, 1.0), color, 0.5) * intensity;
            gl_FragColor = vec4(glow, intensity * 0.5);
          }
        `}
        uniforms={{
          uTime: { value: 0 }
        }}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}
