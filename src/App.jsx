import Carousel from "./components/views/Carousel/Carousel";
import { Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/views/NoMatch/NoMatch";
import Footer from "./components/views/Footer/Footer";
import "./styles/appWrapper/appWrapper.scss";
import "./styles/mainContent/mainContent.scss"

const App = () => {

  return (
    <div className="appWrapper">
      <Carousel />
      <div className="mainContent">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
