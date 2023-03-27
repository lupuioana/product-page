import CategoriesItem from "./CategoriesItem";
import { useState } from "react";
import Zoom from "react-reveal/Zoom";

import "./CategoriesList.style.css";

function CategoriesList() {
  const [categories, setCategories] = useState([
    { category: "Accesories", image: "https://rb.gy/rlk2dc" },
    { category: "Clothes", image: "https://rb.gy/7192a1" },
    { category: "Jewerlly", image: "https://rb.gy/gbaned" },
  ]);

  const categoriesListStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
  };

  return (
    <div className="categoriesListStyle">
      <Zoom left>
        {categories.map((category, index) => {
          return (
            <CategoriesItem
              name={category.category}
              image={category.image}
              key={"todo_" + index}
            />
          );
        })}
      </Zoom>
    </div>
  );
}

export default CategoriesList;
