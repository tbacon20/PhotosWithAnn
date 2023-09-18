import { Link } from "react-router-dom";
import Logo from "../../src/assets/img/PWA-logo.jpg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/booking">Booking</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>

      <Link to="/">
        <img
          src={Logo}
          alt="Photos With Ann Logo"
          style={{ height: "100px", width: "auto" }}
        />
      </Link>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
