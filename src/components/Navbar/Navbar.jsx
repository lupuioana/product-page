import "./Navbar.style.css";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/products" className="products">
            Products
          </Link>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
        <Link to="/wishlist" className="wishlist">
          Wishlist
        </Link>
      </div>
    </>
  );
}

export default Navbar;
