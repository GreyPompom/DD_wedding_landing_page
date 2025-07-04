import { Link } from 'react-router-dom';
import '../../style/components/NavBar.css';
import MenuOverlay from './Menu/MenuOverlay';
import { useRef , useState} from 'react';
import Logo from '../../assets/logo/logo-simbolo.png';
const Navbar = () => {
   const menuToggleRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="menu-container">
        <nav>
          <div className="menu-toggle" ref={menuToggleRef} onClick={toggleMenu}>
            <p id="menu-open">Menu</p>
            <p id="menu-close">Close</p>
          </div>
          <div className="site-info">
            <p>wedding</p>
          </div>
          <div className="logo"><a href='/'>Duda & Dani</a> </div>
        </nav>
        <MenuOverlay 
          isOpen={isMenuOpen} 
          onToggle={toggleMenu}
          menuToggleRef={menuToggleRef}/>
      </div>
    </>
  );
};

export default Navbar;