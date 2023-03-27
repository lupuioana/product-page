import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Table } from "reactstrap";
import "./Wishlist.style.css";
import { useEffect } from "react";
import { useState } from "react";

function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const productsString = localStorage.getItem("products");
    if (productsString !== null) {
      const products = JSON.parse(productsString);
      setWishlistProducts(products);
    }
  }, []);

  const onDelete = (productId) => {
    const filteredProducts = wishlistProducts.filter(
      (product) => product.id !== productId
    );
    console.log(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    setWishlistProducts(filteredProducts);
  };

  return (
    <>
      <div className="wishlistStyle">
        <div className="picture">
          <img src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"></img>
          <h1>WISHLIST</h1>
        </div>
        <div className="wishlistTable">
          <Table
            bordered
            responsive
            hover
            size="sm"
            style={{
              width: "40vw",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
              marginBottom: "160px",
            }}
          >
            <thead>
              <tr>
                <th>Nr.</th>
                <th>Product Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlistProducts.map((product, index) => {
                return (
                  <tr key={"product_" + index}>
                    <td> {index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td
                      style={{ cursor: "pointer", backgroundColor: "gray" }}
                      onClick={() => {
                        onDelete(product.id);
                      }}
                    >
                      Delete!
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
