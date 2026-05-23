import React, { useEffect, useRef } from 'react';

const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let nebulaClouds = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initNebula();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.1,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const initNebula = () => {
      nebulaClouds = [
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.3,
          radius: canvas.width * 0.4,
          color: 'rgba(30, 58, 138, 0.05)',
        },
        {
          x: canvas.width * 0.7,
          y: canvas.height * 0.6,
          radius: canvas.width * 0.5,
          color: 'rgba(76, 29, 149, 0.04)',
        },
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.2,
          radius: canvas.width * 0.35,
          color: 'rgba(8, 145, 178, 0.03)',
        },
      ];
    };

    const drawNebula = () => {
      nebulaClouds.forEach(cloud => {
        const gradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.radius
        );
        gradient.addColorStop(0, cloud.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const drawStars = (time) => {
      stars.forEach(star => {
        star.opacity += Math.sin(time * star.twinkleSpeed) * 0.01;
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0.2) star.opacity = 0.2;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Subtle glow for brighter stars
        if (star.radius > 1) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
          );
          glow.addColorStop(0, `rgba(96, 165, 250, ${star.opacity * 0.3})`);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.fillRect(star.x - star.radius * 3, star.y - star.radius * 3, star.radius * 6, star.radius * 6);
        }
      });
    };

    const animate = (time) => {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebula();
      drawStars(time);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(to bottom, #0a0a0f, #0f1419)' }}
    />
  );
};

export default CosmicBackground;
