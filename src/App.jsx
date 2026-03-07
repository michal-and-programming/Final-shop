import Carousel from "./components/views/Carousel/Carousel";
import { Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/views/NoMatch/NoMatch";
import Footer from "./components/views/Footer/Footer";
import "./styles/appWrapper/appWrapper.scss";
import ProductCard from "./components/features/productCard/productCard";

const App = () => {

  return (
    <div className="appWrapper">
      <Carousel />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={< ProductCard/>} />
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
