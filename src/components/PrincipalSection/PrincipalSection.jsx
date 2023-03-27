import SlideImage from "./SlideImage/SlideImage";
import "./PrincipalSection.style.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function PrincipalSection() {
  const slides = [
    { url: "https://rb.gy/u67sdy" },
    { url: "https://rb.gy/dcst3k" },
    { url: "https://rb.gy/y4zsu8" },
    { url: "https://rb.gy/uwtsrm" },
  ];

  return (
    <div className="sectionContainer">
      <div className="sectionInfo">
        <Fade left>
          <h1>SMART SHOPPING</h1>
          <p>Everything you need in one place - enjoy</p>
          <Link to="/products">
            <button>Discover now</button>
          </Link>
        </Fade>
      </div>
      <Fade top>
        <div className="sectionSlide">
          <SlideImage className="slideCss" slides={slides} />
        </div>
      </Fade>
    </div>
  );
}

export default PrincipalSection;
