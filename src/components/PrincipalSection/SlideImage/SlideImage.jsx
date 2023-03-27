import { useState } from "react";
import "./SlideImage.style.css";

function SlideImage({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "77vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slide = {
    position: "relative",
    height: "100%",
  };

  const leftArrow = {
    position: "absolute",
    top: "90%",
    left: "90%",
    fontSize: "25px",
    cursor: "pointer",
  };

  const rightArrow = {
    position: "absolute",
    top: "90%",
    left: "95%",
    fontSize: "25px",
    cursor: "pointer",
  };

  const previous = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const isLastImage = currentIndex === slides.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={slide}>
      <div onClick={previous} className="leftArrow" style={leftArrow}>
        ❬
      </div>
      <div onClick={next} className="rightArrow" style={rightArrow}>
        ❭
      </div>
      <div className="slideStyle" style={slideStyle}></div>
    </div>
  );
}

export default SlideImage;
