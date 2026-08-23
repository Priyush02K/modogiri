import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./components/Portfolio";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ShopPage from "./Pages/ShopPage";
import Workshops from "./Pages/Workshops";
import Consultation from "./Pages/Consultation";
import Hospitality from "./Pages/Hospitality";


// Scroll to top whenever route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <BrowserRouter>

      {/* Automatically scroll to top on every page change */}
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Homepage />} />

        {/* Main Pages */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />

        {/* Services */}
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/hospitality" element={<Hospitality />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;