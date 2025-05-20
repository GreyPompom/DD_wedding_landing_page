import React, { forwardRef, useRef, useEffect } from 'react';

const WebsiteContent = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  useEffect(() => {
    if (ref) {
      ref.current = { headerRef };
    }
  }, [ref]);

  return (
    <>
      <div className="website-content">
        <nav>
          <div className="logo"><p>Logo</p></div>
          <div className="site-info">
            <p>(Photographer, creative director, filmmaker)</p>
          </div>
          <div className="menu"><p>Menu</p></div>
        </nav>
        <div className="header" ref={headerRef}>
          <h1>Duda & Dani</h1>
        </div>
      </div>
      <div className="content">
        <div className="content-text">
          <h2>Welcome to our wedding website!</h2>
          <p>We are so excited to share this special day with you.</p>
        </div>
        <div className="content-images">
          <img src="image1.jpg" alt="Wedding" />
          <img src="image2.jpg" alt="Wedding" />
        </div>
      </div>
    </>
  );
});

export default WebsiteContent;