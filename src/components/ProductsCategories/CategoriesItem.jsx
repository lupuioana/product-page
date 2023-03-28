import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CategoriesItem({ name, image }) {
  const itemStyle = {
    height: "100%",
    position: "relative",
    color: "black",
    padding: "10px;",
  };
  const imageStyle = {
    width: "350px",
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    margin: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  };

  const nameStyle = {
    position: "absolute",
    zIndex: 1,
    top: "70%",
    margin: "20px",
    fontSize: "15px",
  };

  const buttonStyle = {
    position: "absolute",
    zIndex: 1,
    top: "78%",
    left: "10px",
    margin: "25px",
    border: "none",
    background: "none",
    fontFamily: "Noto Serif Ahom",
    color: "black",
  };

  return (
    <div style={itemStyle}>
      <img src={image} style={imageStyle}></img>
      <h3 style={nameStyle}> {name}</h3>
      <Link to="/products">
        <motion.button
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          style={buttonStyle}
        >
          Discover now
        </motion.button>
      </Link>
    </div>
  );
}

export default CategoriesItem;
