import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "./Search.png";
import { Spinner, Badge, Button } from "reactstrap";
import { useState, useEffect } from "react";
import "./ProductPage.style.css";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

function ProductPage() {
  const [initialList, setInitialList] = useState(null);
  const [productList, setProductList] = useState(initialList);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productListFetch) => {
        setInitialList(productListFetch);
        setProductList(productListFetch);
        console.log(initialList);
      });
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categoriesFetch) => {
        setProductCategories(categoriesFetch);
      });
    console.log(productCategories);
  }, []);

  useEffect(() => {
    if (initialList) {
      const newSearchList = initialList.filter((product) => {
        return product.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setProductList(newSearchList);
    }
    console.log(searchText);
  }, [searchText]);

  const filterByCategory = (categoryName) => {
    if (initialList) {
      const newFilteredList = initialList.filter((product, index) => {
        return product.category === categoryName;
      });
      setProductList(newFilteredList);
      setSelectedCategory(categoryName);

      console.log(selectedCategory);
    }
  };

  return (
    <>
      <div className="productPageStyle">
        <div className="categoriesStyle d-flex flex-column w-5">
          <Fade left>
            <h1> PRODUCT CATEGORIES</h1>
            {productCategories.map((category, index) => {
              return (
                <h2
                  className={
                    category === selectedCategory
                      ? "text-secondary"
                      : "text-dark"
                  }
                  onClick={() => filterByCategory(category)}
                  key={"category_" + index}
                >
                  {category}
                </h2>
              );
            })}
            <motion.div
              className="deleteButton"
              whileHover={{ scale: 1.2, x: 15 }}
            >
              <Button
                size="sm"
                style={{
                  width: "100px",
                  marginTop: "10px",
                  marginLeft: "45px",
                }}
                onClick={() => {
                  setSelectedCategory(null), setProductList(initialList);
                }}
              >
                Clear Filter!
              </Button>
            </motion.div>
          </Fade>
        </div>

        <div className="productsSection">
          <div className="searchIcon">
            <img src={Search} />
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
          </div>

          {productList && initialList ? (
            <>
              <div className="productsStyle">
                {productList.map((product, index) => {
                  return (
                    <ProductComponent
                      product={product}
                      name={product.title}
                      url={product.image}
                      price={product.price}
                      key={"product_" + index}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <Spinner>Loading..</Spinner>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
