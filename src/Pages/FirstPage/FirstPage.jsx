import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PrincipalSection from "../../components/PrincipalSection/PrincipalSection";
import CategoriesList from "../../components/ProductsCategories/CategoriesList";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

function FirstPage() {
  return (
    <div>
      <PrincipalSection />
      <CategoriesList />
      <TrendingProducts />
    </div>
  );
}

export default FirstPage;
