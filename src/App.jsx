import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Port from "./Pages/Port";

import AboutPage from "./Pages/AboutPage";
import Portfolio from "./components/Portfolio";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ShopPage from "./Pages/ShopPage";
import Workshops from "./Pages/Workshops";
import Consultation from "./Pages/Consultation";
import Hospitality from "./Pages/Hospitality";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/workshops" element={<Workshops/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
        <Route path="/hospitality" element={<Hospitality/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;