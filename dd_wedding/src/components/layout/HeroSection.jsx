import React, { useRef } from 'react';
import { useLoadingAnimation } from '../../hooks/useLoadingAnimation';
import Counter from '../ui/Counter';
import '../../../src/App.css';
import img1 from '../../assets/images/hero/cidade-1-retangulo.jpg';
import img2 from '../../assets/images/hero/praia-4-retangulo.jpg';
import img3 from '../../assets/images/hero/teatro-1-retangulo.jpg';
import img4 from '../../assets/images/hero/praia-5-retangulo.jpg';
import img5 from '../../assets/images/hero/praia-7-retangulo.jpg';
import img6 from '../../assets/images/hero/praia-8-retangulo.jpg';
import img7 from '../../assets/images/hero/cidade-2-retangulo.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const HeroSection = () => {
  const preLoaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const heroImgsRef = useRef(null);
  const heroRef = useRef(null);
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const overlayRef = useRef(null);

  useLoadingAnimation({
    preLoaderRef,
    progressBarRef,
    heroImgsRef,
    heroRef,
    digit1Ref,
    digit2Ref,
    digit3Ref,
    overlayRef
  });

  return (
    <section className="hero" ref={heroRef}>
       <div className="pre-loader" ref={preLoaderRef}>
        <p>Loading</p>
        <Counter ref={{ digit1Ref, digit2Ref, digit3Ref }} />
        <div className="progress-bar" ref={progressBarRef}></div>
      </div>

      <div className="hero-imgs" ref={heroImgsRef}>
       {images.map((img, i) => (
          <img key={i} src={img} alt={`Imagem ${i + 1}`} />
        ))}
        
        <div className="green-overlay" ref={overlayRef} />
      </div>
    </section>
  );
};

export default HeroSection;