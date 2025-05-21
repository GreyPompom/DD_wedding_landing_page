import { Link } from 'react-router-dom';
import '../../style/components/NavBar.css';
const Navbar = () => {
  return (
    <nav>
      <div className="logo"><Link to="/">Logo</Link></div>
      <div className="site-info">
        <p>wedding</p>
      </div>
      <div className="menu">
        <Link to="/praia">Praia</Link>
        <Link to="/cidade">Cidade</Link>
        <Link to="/about-us">About Us</Link>
      </div>
    </nav>

    
  );
};

export default Navbar;