import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const transitionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animação de entrada
    tl.from(transitionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    });

    // Cleanup - Animação de saída
    return () => {
      gsap.to(transitionRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.in"
      });
    };
  }, [location.key]);

  return (
    <div ref={transitionRef} className="page-transition-container">
      {children}
    </div>
  );
};

export default PageTransition;