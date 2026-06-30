import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CostGuide from "./pages/CostGuide";
import Stellmann from "./pages/Stellmann";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Kitchen from "./Services/Kitchen";
import Industry from "./Services/Industry";
import Warehouse from "./Services/Warehouse";
import Workshop from "./Services/Workshop";
import Garage from "./Services/Garage";
import Cementitious from "./Services/Cementitious";
import Metallic from "./Services/Metallic";
import Solidcolor from "./Services/Solidcolor";
import Premiumflake from "./Services/Premiumflake";
import SEFsuperclear from "./Services/SEFsuperclear";
import Overtiles from "./Services/Overtiles";
import HeavyDuty from "./Services/HeavyDuty";
import Driveways from "./Services/Driveways";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cost-guide" element={<CostGuide />} />
        <Route path="/stellmann" element={<Stellmann />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/epoxy-kitchens" element={<Kitchen />} />
        <Route
          path="/services/industrial-epoxy-flooring"
          element={<Industry />}
        />
        <Route
          path="/services/warehouse-epoxy-flooring"
          element={<Warehouse />}
        />
        <Route
          path="/services/workshop-epoxy-flooring"
          element={<Workshop />}
        />
        <Route path="/services/garage-epoxy-flooring" element={<Garage />} />
        <Route
          path="/services/polyurethane-floor-coating"
          element={<Cementitious />}
        />
        <Route
          path="/services/metallic-epoxy-flooring"
          element={<Metallic />}
        />
        <Route path="/services/solid-colour-epoxy" element={<Solidcolor />} />
        <Route
          path="/services/flake-epoxy-flooring"
          element={<Premiumflake />}
        />
        <Route path="/services/sef-superclear" element={<SEFsuperclear />} />
        <Route path="/services/epoxy-over-tiles" element={<Overtiles />} />
        <Route path="/services/line-marking" element={<HeavyDuty />} />
        <Route
          path="/services/driveway-epoxy-flooring"
          element={<Driveways />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
