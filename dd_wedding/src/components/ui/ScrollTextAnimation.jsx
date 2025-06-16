import React, { useRef, useEffect } from 'react';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../style/components/ScrollTextAnimation.css'; // Criaremos este CSS

gsap.registerPlugin(ScrollTrigger);

const ScrollTextAnimation = ({ text, textColor = "#fff", backgroundColor = "#black" }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const animation = gsap.fromTo(textRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, [text]); // Adicionei text como dependência

  return (
    <div 
      className="text-animation-container" 
      ref={containerRef}
      style={{ backgroundColor }}
    >
      <p 
        className="album-description" 
        ref={textRef}
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
};

export default ScrollTextAnimation;