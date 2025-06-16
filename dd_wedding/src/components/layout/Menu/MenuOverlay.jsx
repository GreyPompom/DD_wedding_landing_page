import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../../style/components/MenuOverlay.css';
import imageMenuDefault from '../../../assets/images/menu/menu-default.jpg';
import imagePraia from '../../../assets/images/menu/menu-praia.jpg';
import imageCidade from '../../../assets/images/menu/menu-cidade.jpg';
import imageAbout from '../../../assets/images/menu/menu-about-us.jpg';

const MenuOverlay = ({ isOpen, containerRef, menuToggleRef }) => {
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuPreviewImgRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const menuImages = {
    praia: imagePraia,
    cidade: imageCidade,
    about: imageAbout
  };

  useEffect(() => {
    const container = document.querySelector('.routes');
    const menuToggle = menuToggleRef.current;
    const menuOverlay = menuOverlayRef.current;
    const menuContent = menuContentRef.current;
    const menuPreviewImg = menuPreviewImgRef.current;
    const menuLinks = document.querySelectorAll(".link a");

    console.log(isOpen)
    if (!menuToggle || !menuOverlay || !menuContent || !menuPreviewImg) return;

    // const cleanupPreviewImages = () => {
    //   const previewImages = menuPreviewImg.querySelectorAll("img");
    //   if (previewImages.length > 3) {
    //     for (let i = 0; i < previewImages.length - 3; i++) {
    //       menuPreviewImg.removeChild(previewImages[i]);
    //     }
    //   }
    // };

    const animateMenuToggle = (isOpening) => {
      const open = document.querySelector("p#menu-open");
      const close = document.querySelector("p#menu-close");

      gsap.to(isOpening ? open : close, {
        x: isOpening ? -5 : -5,
        y: isOpening ? -10 : 10,
        rotation: isOpening ? -5 : 5,
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(isOpening ? close : open, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        delay: isOpening ? 0.5 : 0.5,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const openMenu = () => {
      if (isAnimatingRef.current || isOpen) return;
      isAnimatingRef.current = true;

      gsap.to(container, {
        rotation: 10,
        x: 300,
        y: 450,
        scale: 1.5,
        duration: 1.25,
        ease: "power4.inOut",
      });

      animateMenuToggle(true);

      gsap.to(menuContent, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.25,
        ease: "power4.inOut",
      });

      gsap.to([".link a", ".social a"], {
        y: "0%",
        delay: 0.75,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
        duration: 1.25,
        ease: "power4.inOut",
        onComplete: () => {
          isOpen = true;
          isAnimatingRef.current = false;
        },
      });
    };

    const closeMenu = () => {
      if (isAnimatingRef.current || !isOpen) return;
      isAnimatingRef.current = true;

      gsap.to(container, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.25,
        ease: "power4.inOut",
      });

      animateMenuToggle(false);

      gsap.to(menuContent, {
        rotation: -15,
        x: -100,
        y: -100,
        scale: 1.5,
        opacity: 0.25,
        duration: 1.25,
        ease: "power4.inOut",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "power4.inOut",
        onComplete: () => {
          isOpen = false;
          isAnimatingRef.current = false;
          gsap.set([".link a", ".social a"], { y: "120%" });
          resetPreviewImage();
        },
      });
    };

    const handleToggleClick = () => {
      if (!isOpen) openMenu();
      else closeMenu();
    };

    menuToggle.addEventListener("click", handleToggleClick);

     menuLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (!isOpen || isAnimatingRef.current) return;

        const menuKey = link.getAttribute('data-menu');
        if (!menuKey || !menuImages[menuKey]) return;

        const imageBox = menuPreviewImg.querySelector('.image-box');
        if (imageBox) {
          gsap.to(imageBox, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              imageBox.src = menuImages[menuKey];
              gsap.to(imageBox, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
              });
            }
          });
        }
      });
    });

    return () => {
      menuToggle.removeEventListener("click", handleToggleClick);
      menuLinks.forEach(link => {
        link.removeEventListener("mouseover", () => {});
      });
    };
  }, [isOpen, containerRef, menuToggleRef]);
  return (
    <div className="menu-overlay" ref={menuOverlayRef}>
      <div className="menu-content" ref={menuContentRef}>
        <div className="menu-items">
          <div className="col-lg">
            <div className="menu-preview-img" ref={menuPreviewImgRef}>
               <img 
                className="image-box" 
                src={imageMenuDefault} 
                alt="Menu Preview" 
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="menu-links">
             <div className="link">
                <a href="/praia" data-menu="praia">Praia</a>
              </div>
              <div className="link">
                <a href="/cidade" data-menu="cidade">Cidade</a>
              </div>
              <div className="link">
                <a href="/about" data-menu="about">About Us</a>
              </div>
            </div>

            <div className="menu-socials">
              <div className="social"><a href="#">Behance</a></div>
              <div className="social"><a href="#">Dribbble</a></div>
              <div className="social"><a href="#">LinkedIn</a></div>
              <div className="social"><a href="#">Instagram</a></div>
            </div>
          </div>
        </div>
        <div className="menu-footer">

          <div className="col-sm">
            <a href="/">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;