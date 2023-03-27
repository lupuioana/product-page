import Watch from "./Watch.jpg";
import "./ProductComponent.style.css";
import Bounce from "react-reveal/Bounce";

function ProductComponent({ product }) {
  const addToWishlist = () => {
    const productsString = localStorage.getItem("products");

    if (productsString !== null) {
      const products = JSON.parse(productsString);

      const existNr = products.find((productElement) => {
        return productElement.id === product.id;
      });

      if (existNr === undefined) {
        products.push(product);
      }

      localStorage.setItem("products", JSON.stringify(products));
    } else {
      const newProducts = [];
      newProducts.push(product);
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  };

  return (
    <Bounce right>
      <div className="product">
        <div className="product_img">
          <img id="product_img" src={product.image} />
          <div className="product_info">
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <button
              onClick={() => {
                addToWishlist();
              }}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </Bounce>
  );
}

export default ProductComponent;
