import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../style/components/Hero.css'; // CSS específico para o hero

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ title, subtitle  }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const lettersRef = useRef([]);
  const subtitleRef = useRef(null);

  // Adiciona letras ao array de refs
  const addToLettersRef = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animação de entrada
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animação letra por letra
    tl.from(lettersRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.3
    });
    
    // Animação do subtítulo
    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.4");

    // Efeito de fade out ao rolar
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      onLeave: () => {
        gsap.to(titleRef.current, { opacity: 0, y: -50, duration: 0.8 });
        gsap.to(subtitleRef.current, { opacity: 0, y: -30, duration: 0.8 });
      },
      onEnterBack: () => {
        gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 });
        gsap.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  // Divide a palavra "PRAIA" em letras individuais
  const renderAnimatedLetters = () => {
    return title.split("").map((letter, index) => (
      <span 
        key={index} 
        ref={addToLettersRef}
        className="hero-letter"
        style={{ display: 'inline-block' }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section className="hero-praia" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          {renderAnimatedLetters()}
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;