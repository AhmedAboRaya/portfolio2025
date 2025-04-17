import React, { useEffect, useRef } from 'react';

const TwinklingStars = () => {
  const containerRef = useRef(null);
  const animationRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous animations
    animationRefs.current.forEach(cancelAnimationFrame);
    animationRefs.current = [];

    // Create twinkling stars
    const stars = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute bg-white rounded-full';
      
      // Random properties
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = Math.random() * 0.7 + 0.3;
      const duration = Math.random() * 5 + 3;
      const delay = Math.random() * 5;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      star.style.opacity = opacity;
      star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
      star.style.zIndex = '0';
      
      container.appendChild(star);
      stars.push(star);
    }

    // Add CSS for twinkling animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: ${Math.random() * 0.3 + 0.1}; transform: scale(0.9); }
        50% { opacity: ${Math.random() * 0.8 + 0.2}; transform: scale(1.1); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      stars.forEach(star => star.remove());
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full "
    />
  );
};

export default TwinklingStars;