import Carousel from "./components/views/Carousel/Carousel";
import { Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/views/NoMatch/NoMatch";
import Footer from "./components/views/Footer/Footer";
import ProductCard from "./components/features/ProductCard/ProductCard";
import Cart from "./components/features/Cart/Cart";
import "./styles/appWrapper/appWrapper.scss";

const App = () => {

  return (
    <div className="appWrapper">
      <Carousel />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<ProductCard/>} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
