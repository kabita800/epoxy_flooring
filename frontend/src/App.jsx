import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CostGuide from "./pages/CostGuide";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cost-guide" element={<CostGuide/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;