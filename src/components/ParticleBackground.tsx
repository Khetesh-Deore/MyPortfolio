import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const composerRef = useRef<any>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const initThreeJS = async () => {
      // Dynamically import Three.js modules
      const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js');
      const { EffectComposer } = await import('https://cdn.jsdelivr.net/npm/three@0.157.0/examples/jsm/postprocessing/EffectComposer.js');
      const { RenderPass } = await import('https://cdn.jsdelivr.net/npm/three@0.157.0/examples/jsm/postprocessing/RenderPass.js');
      const { UnrealBloomPass } = await import('https://cdn.jsdelivr.net/npm/three@0.157.0/examples/jsm/postprocessing/UnrealBloomPass.js');

      if (!canvasRef.current) return;

      // Scene, Camera, and Renderer Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 50;

      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        antialias: true, 
        alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Store references
      sceneRef.current = scene;
      rendererRef.current = renderer;

      // Post-processing for Glow Effect
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.0, // strength
        0.1, // radius
        0.1  // threshold
      );
      composer.addPass(bloomPass);
      composerRef.current = composer;

      // Particle System
      const particlesCount = 3000; // Reduced for better performance
      const particlesData: any[] = [];
      const particlesGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);
      
      const particleColors = [
        new THREE.Color(0x3b82f6), // Blue
        new THREE.Color(0x1d4ed8), // Dark blue
        new THREE.Color(0x60a5fa), // Light blue
        new THREE.Color(0x93c5fd)  // Very light blue
      ];

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = (Math.random() - 0.5) * 150;
        const y = (Math.random() - 0.5) * 150;
        const z = (Math.random() - 0.5) * 100;
        posArray[i3] = x;
        posArray[i3 + 1] = y;
        posArray[i3 + 2] = z;

        particlesData.push({
          originalX: x, originalY: y, originalZ: z,
          velocityX: 0, velocityY: 0, velocityZ: 0
        });
        
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        colorArray[i3] = color.r;
        colorArray[i3 + 1] = color.g;
        colorArray[i3 + 2] = color.b;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.3,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleMesh);

      // Mouse interaction
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const mousePosition = new THREE.Vector3();

      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      document.addEventListener('mousemove', handleMouseMove);

      // Animation Loop
      const clock = new THREE.Clock();
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Update mouse position in 3D space
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, mousePosition);

        // Animate particles
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particlesCount; i++) {
          const i3 = i * 3;
          const data = particlesData[i];
          
          // Mouse repulsion effect
          const dx = mousePosition.x - positions[i3];
          const dy = mousePosition.y - positions[i3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 10) {
            const force = (10 - dist) * 0.1;
            data.velocityX -= (dx / dist) * force;
            data.velocityY -= (dy / dist) * force;
          }

          // Return to original position (spring effect)
          data.velocityX += (data.originalX - positions[i3]) * 0.01;
          data.velocityY += (data.originalY - positions[i3 + 1]) * 0.01;
          
          // Wave motion
          const waveX = Math.sin(elapsedTime * 0.5 + data.originalX * 0.1) * 0.5;
          const waveY = Math.cos(elapsedTime * 0.5 + data.originalY * 0.1) * 0.5;

          // Apply velocities and damping
          positions[i3] += data.velocityX + waveX;
          positions[i3 + 1] += data.velocityY + waveY;
          data.velocityX *= 0.95;
          data.velocityY *= 0.95;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        // Animate camera slightly
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        composer.render();
      };

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      animate();

      // Cleanup function
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
      };
    };

    initThreeJS();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
};

export default ParticleBackground;