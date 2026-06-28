import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CostGuide from "./pages/CostGuide";
import Stellmann from "./pages/Stellmann";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cost-guide" element={<CostGuide/>} />
         <Route path="/stellmann" element={<Stellmann/>} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/blog" element={<Blog/>} />
         <Route path="/reviews" element={<Reviews/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;