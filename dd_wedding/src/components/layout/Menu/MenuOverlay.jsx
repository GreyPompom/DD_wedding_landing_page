import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../../style/components/MenuOverlay.css';
const MenuOverlay = ({ isOpen, containerRef, menuToggleRef }) => {
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuPreviewImgRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const container =document.querySelector('.hero');
    const menuToggle = menuToggleRef.current;
    const menuOverlay = menuOverlayRef.current;
    const menuContent = menuContentRef.current;
    const menuPreviewImg = menuPreviewImgRef.current;
    const menuLinks = document.querySelectorAll(".link a");

    console.log(isOpen)
    if (!menuToggle || !menuOverlay || !menuContent || !menuPreviewImg) return;

    const cleanupPreviewImages = () => {
      const previewImages = menuPreviewImg.querySelectorAll("img");
      if (previewImages.length > 3) {
        for (let i = 0; i < previewImages.length - 3; i++) {
          menuPreviewImg.removeChild(previewImages[i]);
        }
      }
    };

    const resetPreviewImage = () => {
      menuPreviewImg.innerHTML = "";
      const defaultPreviewImg = document.createElement("img");
      defaultPreviewImg.src = "/img-1.jpg";
      menuPreviewImg.appendChild(defaultPreviewImg);
    };

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

    // Adiciona event listeners
    menuToggle.addEventListener("click", handleToggleClick);

    menuLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (!isOpen || isAnimatingRef.current) return;

        const imgSrc = link.getAttribute("data-img");
        if (!imgSrc) return;

        const previewImages = menuPreviewImg.querySelectorAll("img");
        if (
          previewImages.length > 0 &&
          previewImages[previewImages.length - 1].src.endsWith(imgSrc)
        )
          return;

        const newPreviewImg = document.createElement("img");
        newPreviewImg.src = imgSrc;
        newPreviewImg.style.opacity = "0";
        newPreviewImg.style.transform = "scale(1.25) rotate(10deg)";

        menuPreviewImg.appendChild(newPreviewImg);
        cleanupPreviewImages();

        gsap.to(newPreviewImg, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.75,
          ease: "power2.out",
        });
      });
    });

    // Cleanup function
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
              <img src="/img-1.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm">
            <div className="menu-links">
              <div className="link">
                <a href="#" data-img="/img-1.jpg">Visions</a>
              </div>
              <div className="link">
                <a href="#" data-img="/img-2.jpg">Core</a>
              </div>
              <div className="link">
                <a href="#" data-img="/img-3.jpg">Signals</a>
              </div>
              <div className="link">
                <a href="#" data-img="/img-4.jpg">Connect</a>
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
          <div className="col-lg">
            <a href="#">Run Sequence</a>
          </div>
          <div className="col-sm">
            <a href="#">Origin</a>
            <a href="#">Join Signal</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;