'use client';

import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];
    let nebulae = [];
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const initNebulae = () => {
      nebulae = [];
      for (let i = 0; i < 3; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 300 + 200,
          color: `hsla(${Math.random() * 60 + 180}, 70%, 40%, 0.03)`,
          speed: Math.random() * 0.1 + 0.02,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach((nebula, i) => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `hsla(${180 + i * 30}, 70%, 50%, 0.04)`);
        gradient.addColorStop(0.5, `hsla(${200 + i * 20}, 60%, 30%, 0.02)`);
        gradient.addColorStop(1, 'rgba(10,10,15,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        nebula.x += (mouseX - canvas.width / 2) * 0.0001 * nebula.speed;
        nebula.y += (mouseY - canvas.height / 2) * 0.0001 * nebula.speed;
      });

      // Draw stars
      stars.forEach(star => {
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Add glow to brighter stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.1})`;
          ctx.fill();
        }

        // Parallax movement
        star.x += (mouseX - canvas.width / 2) * 0.00005 * star.speed;
        star.y += (mouseY - canvas.height / 2) * 0.00005 * star.speed;
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resize();
    initStars();
    initNebulae();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
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
        background: '#0a0a0f',
      }}
    />
  );
}
