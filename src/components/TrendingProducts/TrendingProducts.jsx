import "./TrendingProducts.style.css";
import ProductComponent from "../ProductComponent/ProductComponent";
import TrendingProductsList from "../TrendingProducts/TrendingProductsList";
import Bounce from "react-reveal/Bounce";

function TrendingProducts() {
  return (
    <>
      <div className="trendDescription">
        <h1>Trending Products</h1>
        <h3>"Great products sell themselves"</h3>
      </div>

      <TrendingProductsList />
    </>
  );
}

export default TrendingProducts;
