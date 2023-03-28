import ProductComponent from "./components/ProductComponent/ProductComponent";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import Wishlist from "./Pages/WishlistPage/Wishlist";
import FirstPage from "./Pages/FirstPage/FirstPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
