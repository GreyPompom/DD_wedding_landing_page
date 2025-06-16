import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import '../../src/style/aboutUs.css';

gsap.registerPlugin(SplitText);
import Perfil_mih from '../../src/assets/images/perfil/perfil-mih.jpg';
import Perfil_emely from '../../src/assets/images/perfil/perfil-emely.jpg';
import Perfil_maria from '../../src/assets/images/perfil/perfil-maria.jpg';
import Perfil_millena from '../../src/assets/images/perfil/perfil-millena.jpg';
const membros = [
  {
    id: 1,
    name: 'Mih',
    image: Perfil_mih,
    alt: 'Foto de perfil da Mih'
  },
  {
    id: 2,
    name: 'Emely',
    image: Perfil_emely,
    alt: 'Foto de perfil da Emely'
  },
  {
    'id': 3,
    'name': 'Maria Souza', 
    'image': Perfil_maria,
    'alt': 'Foto de perfil da Maria Souza'
  },
  {
    id: 4,
    name: 'Millena',
    image: Perfil_millena,
    alt: 'Foto de perfil da Millena'
  }
];
const AboutUs = () => {

  // Array de objetos com informações das imagens

  const profileImagesContainerRef = useRef(null);
  const profileImagesRef = useRef([]);
  const nameElementsRef = useRef([]);
  const defaultLettersRef = useRef([]);

  useEffect(() => {
    const nameHeadings = document.querySelectorAll('.profile-names .name h1');
    const nameElements = document.querySelectorAll('.profile-names .name');

    nameElementsRef.current = Array.from(nameElements);

    nameHeadings.forEach((heading) => {
      new SplitText(heading, { type: 'chars' }).chars.forEach((char) => {
        char.classList.add('letter');
      });
    });

    const defaultLetters = nameElements[0].querySelectorAll('.letter');
    defaultLettersRef.current = Array.from(defaultLetters);
    gsap.set(defaultLettersRef.current, { y: '100%' });

    if (window.innerWidth >= 900) {
      setupHoverEffects();
    }

    return () => {
      nameHeadings.forEach(heading => {
        SplitText.revert(heading);
      });
    };
  }, []);

  const setupHoverEffects = () => {
    const profileImages = Array.from(profileImagesRef.current);

    profileImages.forEach((img, index) => {
      if (!img) return;

      const correspondingName = nameElementsRef.current[index + 1];
      if (!correspondingName) return;

      const letters = correspondingName.querySelectorAll('.letter');

      img.addEventListener('mouseenter', () => handleImageHover(img, letters, true));

      img.addEventListener('mouseleave', () => handleImageHover(img, letters, false));
    });

    if (profileImagesContainerRef.current) {
      profileImagesContainerRef.current.addEventListener('mouseenter', handleContainerHover);
      profileImagesContainerRef.current.addEventListener('mouseleave', handleContainerLeave);
    }
  };

  const handleImageHover = (img, letters, isEntering) => {
    gsap.to(img, {
      width: isEntering ? 140 : 70,
      height: isEntering ? 140 : 70,
      duration: 0.5,
      ease: 'power4.out'
    });

    gsap.to(letters, {
      y: isEntering ? '-100%' : '0%',
      ease: 'power4.out',
      duration: 0.75,
      stagger: {
        each: 0.025,
        from: 'center'
      }
    });
  };

  const handleContainerHover = () => {
    gsap.to(defaultLettersRef.current, {
      y: '0%',
      ease: 'power4.out',
      duration: 0.75,
      stagger: {
        each: 0.025,
        from: 'center'
      }
    });
  };

  const handleContainerLeave = () => {
    gsap.to(defaultLettersRef.current, {
      y: '100%',
      ease: 'power4.out',
      duration: 0.75,
      stagger: {
        each: 0.025,
        from: 'center'
      }
    });
  };

  const addToImagesRef = (el, index) => {
    profileImagesRef.current[index] = el;
  };

  return (
    <div className="page about-us">
      <section className="team">
        <div className="profile-images" ref={profileImagesContainerRef}>
          {membros.map((membro, index) => (
            <div
              key={membro.id} // Melhor usar o id único do membro
              className="img"
              ref={(el) => addToImagesRef(el, index)}
            >
              <img src={membro.image} alt={`Foto de ${membro.name}`} />
            </div>
          ))}
        </div>

        <div className="profile-names">
          <div className="name default"><h1>THE SQUAD</h1></div>
          {membros.map((membro) => (
            <div key={membro.id} className="name">
              <h1>{membro.name}</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;