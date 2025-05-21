import React, { forwardRef, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import NavBar from './NavBar';
const WebsiteContent = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  useEffect(() => {
    if (ref) {
      ref.current = { headerRef };
    }
  }, [ref]);
useEffect(() => {
  const header = document.querySelector(".header");
  const content = document.querySelector(".content");

  const onScroll = () => {
    const scrollTop = window.scrollY;

    // Transição suave: aumenta opacidade do content e reduz escala do header
    gsap.to(header, {
      scale: Math.max(1 - scrollTop / 500, 0.8),
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(content, {
      opacity: Math.min(scrollTop / 200, 1),
      y: scrollTop > 100 ? 0 : 50,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <>
      <div className="website-content">
        <NavBar />
        <div className="header" ref={headerRef}>
          <h1 class="title-header">Duda & Dani</h1>
        </div>
      </div>
    </>
  );
});

export default WebsiteContent;