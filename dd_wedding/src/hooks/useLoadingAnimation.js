import { gsap } from 'gsap';
import { useEffect } from 'react';

export const useLoadingAnimation = (refs) => {
  useEffect(() => {
    const {
      preLoaderRef,
      digit1Ref,
      digit2Ref,
      digit3Ref,
      progressBarRef,
      heroImgsRef,
      heroRef,
      overlayRef
    } = refs;

    gsap.set("nav", { y: -150 });

    const splitTextIntoSpans = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.innerText;
        const splitText = text
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
        element.innerHTML = splitText;
      }
    };

    splitTextIntoSpans(".header h1");

    // Animation functions
    const animate = (digit, duration, delay = 1) => {
      const numHeight = digit.querySelector(".num").clientHeight;
      const totalDistance = (digit.querySelectorAll(".num").length - 1) * numHeight;
      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    // Start animations
    animate(digit3Ref.current, 5);
    animate(digit2Ref.current, 6);
    animate(digit1Ref.current, 2, 5);

    gsap.to(progressBarRef.current, {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7,
    });

    gsap.to(progressBarRef.current, {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 8.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(preLoaderRef.current, {
          display: "none",
        });
      },
    });

    gsap.to(".hero-imgs > img", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 9,
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0.7,
          duration: 0.8,
          ease: "power2.inOut"
        });
      }
    });

    gsap.to(heroRef.current, {
      scale: 1.3,
      duration: 3,
      ease: "power3.inOut",
      delay: 9,
    });

    gsap.to("nav", {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 11,
    });

    gsap.to("h1 span", {
      top: "0px",
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      delay: 11,
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf([
        digit1Ref.current,
        digit2Ref.current,
        digit3Ref.current,
        progressBarRef.current,
        heroImgsRef.current,
        heroRef.current,
        "nav",
        "h1 span"
      ]);
    };
  }, [refs]);
};

const lastImg = document.querySelector('.hero-imgs > img:last-child');

// Configuração inicial do CSS para evitar cortes
gsap.set(lastImg, {
  objectFit: 'contain',
  width: '100%',
  height: '100%'
});

// Animação parallax
gsap.to(lastImg, {
  y: '-20%', // Movimento vertical (ajuste conforme necessário)
  scrollTrigger: {
    trigger: '.hero-imgs',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});