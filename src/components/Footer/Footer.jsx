import "./Footer.style.css";
import Facebook from "./Facebook.png";
import Github from "./Github.png";
import Linkedin from "./Linkedin.png";
import Twitter from "./Twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="links_footer">
          <Link id="home" to="/">
            Home
          </Link>
          <Link id="products" to="/products">
            Products
          </Link>
          <h3>Outstock © 2015</h3>
        </div>
        <div className="socialMedia">
          <a id="facebook" href="#">
            <img src={Facebook} />
          </a>
          <a href="#">
            <img src={Twitter} />
          </a>
          <a href="#">
            <img src={Linkedin} />
          </a>
          <a href="#" id="github">
            <img src={Github} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
