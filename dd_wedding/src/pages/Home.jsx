import React, { useRef , useEffect} from 'react';
import HeroSection from '../components/layout/HeroSection';
import WebsiteContent from '../components/layout/WebsiteContent';
import gsap from "gsap";
import SplitType from "split-type";


const Home = () => {
  const websiteContentRef = useRef(null);
  const manifestoRef = useRef(null);
 useEffect(() => {
  const manifestoText = new SplitType(".manifesto-title h1", {
    types: ["words", "chars"],
    tagName: "span",
    wordClass: "word",
    charClass: "char",
  });

  const style = document.createElement("style");
  style.textContent = `
       .word {
         display: inline-block;
         margin-right: 0em;
       }
       .char {
         display: inline-block;
       }
     `;
  document.head.appendChild(style);

  gsap.set(manifestoText.chars, {
    opacity: 0.25,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".manifesto",
      start: "top 35%",
      end: "bottom 75%",
      scrub: true,
    },
  });

  manifestoText.chars.forEach((char, index) => {
    tl.to(
      char,
      {
        opacity: 1,
        duration: 0.1,
        ease: "none",
      },
      index * 0.1
    );
  });

  return () => {
    document.head.removeChild(style);
    tl.kill();
  };
}, []);

  return (
    <>
    <section className="box-header">

      <HeroSection websiteContentRef={websiteContentRef} />
      <WebsiteContent ref={websiteContentRef} />
      </section>
      <section className="manifesto" id="manifesto" ref={manifestoRef}>
        <div className="box">
         
          <div className="manifesto-title">
            <h1>
              We challenge norms, embrace change, pioneer progress. We are
              innovators merging art and technology to craft experiences that
              surprise, delight, and evolve.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
