import React, { useRef } from 'react';
import HeroSection from '../components/layout/HeroSection';
import WebsiteContent from '../components/layout/WebsiteContent';

const Home = () => {
  const websiteContentRef = useRef(null);

  return (
    <>
      <HeroSection websiteContentRef={websiteContentRef} />
      <WebsiteContent ref={websiteContentRef} />
    </>
  );
};

export default Home;
