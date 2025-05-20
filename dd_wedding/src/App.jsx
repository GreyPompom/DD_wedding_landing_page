import React, { useRef } from 'react';
import {} from 'gsap';
import './App.css';
import HeroSection from './components/layout/HeroSection';
import WebsiteContent from './components/layout/WebsiteContent';
function App() {
  const websiteContentRef = useRef(null);

  return (
    <div className="App">
      <HeroSection websiteContentRef={websiteContentRef} />
      <WebsiteContent ref={websiteContentRef} />
    </div>
  );
}

export default App;