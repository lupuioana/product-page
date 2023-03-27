import ProductComponent from "../ProductComponent/ProductComponent";
import { useEffect, useState } from "react";

function trendingProductsList() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const trendingProductsListStyle = {
    display: " flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((trendingListFetch) => {
        setTrendingProducts(trendingListFetch);
      });
  });

  return (
    <>
      <div style={trendingProductsListStyle}>
        {trendingProducts.map((trendingProduct, index) => {
          return (
            <ProductComponent
              product={trendingProduct}
              key={"trendingProduct_" + index}
            />
          );
        })}
      </div>
    </>
  );
}

export default trendingProductsList;
