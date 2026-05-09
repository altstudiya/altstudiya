'use client';

import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let nebulae = [];
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const createNebulae = () => {
      nebulae = [];
      for (let i = 0; i < 5; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          color: `hsla(${Math.random() * 60 + 180}, 70%, 30%, 0.03)`,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    const drawNebula = (nebula) => {
      const gradient = ctx.createRadialGradient(
        nebula.x, nebula.y, 0,
        nebula.x, nebula.y, nebula.radius
      );
      gradient.addColorStop(0, `hsla(${Math.random() * 60 + 180}, 70%, 40%, 0.05)`);
      gradient.addColorStop(0.5, `hsla(${Math.random() * 60 + 180}, 60%, 25%, 0.03)`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach((nebula) => {
        nebula.x += nebula.speedX;
        nebula.y += nebula.speedY;

        if (nebula.x < -200) nebula.x = canvas.width + 200;
        if (nebula.x > canvas.width + 200) nebula.x = -200;
        if (nebula.y < -200) nebula.y = canvas.height + 200;
        if (nebula.y > canvas.height + 200) nebula.y = -200;

        drawNebula(nebula);
      });

      // Draw stars
      stars.forEach((star) => {
        const parallaxX = (mouseX - canvas.width / 2) * star.speed * 2;
        const parallaxY = (mouseY - canvas.height / 2) * star.speed * 2;
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(
          star.x + parallaxX,
          star.y + parallaxY,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Glow effect for brighter stars
        if (star.size > 1.5) {
          ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.15})`;
          ctx.beginPath();
          ctx.arc(
            star.x + parallaxX,
            star.y + parallaxY,
            star.size * 3,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resize();
    createStars();
    createNebulae();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}