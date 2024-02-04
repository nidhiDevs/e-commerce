import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./pages/herosection/HeroSection";
import ShopCategory from "./pages/shop/ShopCategory";
import menbanner from "./assets/jocket.jpg";
import womenbanner from "./assets/women1.jpg";
import kidbanner from "./assets/jocketm2.jpg";
import ContextProvider from "./context/ContextProvider";
import Footer from "./components/footer/Footer";
// import { ContextProvider } from "./context/ContextProvider";
function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route
              path="/men"
              element={<ShopCategory banner={womenbanner} category={"women"} />}
            />
            <Route
              path="/women"
              element={<ShopCategory banner={menbanner} category={"men"} />}
            />
            <Route
              path="/kid"
              element={<ShopCategory banner={kidbanner} category={"kid"} />}
            />
          </Routes>
          <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
