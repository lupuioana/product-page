import "./Footer.style.css";
import Facebook from "./Facebook.png";
import Github from "./Github.png";
import Linkedin from "./Linkedin.png";
import Twitter from "./Twitter.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="links_footer">
          <a id="home" href="#">
            Home
          </a>
          <a id="products" href="#">
            Products
          </a>
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
