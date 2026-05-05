import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Float, MeshDistortMaterial } from '@react-three/drei';

const FloatingShape = ({ isDarkMode }) => {
    const meshRef = useRef();

    // useFrame((state) => {
    //     meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    //     meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    // });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <group ref={meshRef}>

                {/* Purple rounded rectangle */}
                <RoundedBox args={[2.9, 1, 0.6]} radius={0.2} position={[-0.55, 1, 0]}>
                    <meshStandardMaterial color="#7c3aed" />
                </RoundedBox>

                {/* Cyan small square */}
                <RoundedBox args={[1, 1, 0.6]} radius={0.2} position={[1.5, 1, 0]}>
                    <meshStandardMaterial color="#06b6d4" />
                </RoundedBox>

                {/* Orange block */}
                <RoundedBox args={[1.8, 1, 0.6]} radius={0.2} position={[-1.1, -0.1, 0]}>
                    <meshStandardMaterial color="#ff4d00" />
                </RoundedBox>

                {/* Yellow square */}
                <RoundedBox args={[1, 1, 0.6]} radius={0.2} position={[0.4, -0.1, 0]}>
                    <meshStandardMaterial color="#facc15" />
                </RoundedBox>

                {/* Yellow circle */}
                <mesh position={[1.5, -0.1, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#facc15" />
                </mesh>

                {/* Bottom big orange bar */}
                <RoundedBox args={[4, 1, 0.6]} radius={0.2} position={[0, -1.2, 0]}>
                    <meshStandardMaterial color="#ff4d00" />
                </RoundedBox>

            </group>
        </Float>
    );
};

const Techwin = ({ isDarkMode }) => {
    return (
        <div className="w-full h-full min-h-[300px] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={isDarkMode ? .5 : 1} />
                <directionalLight position={[10, 10, 10]} intensity={2} />
                <directionalLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                <FloatingShape isDarkMode={isDarkMode} />
                {/* <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} /> */}
            </Canvas>
        </div>
    );
};

export default Techwin;
