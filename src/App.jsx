import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Port from "./Pages/Port";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ShopPage from "./Pages/ShopPage";
import Workshops from "./Pages/Workshops";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Port/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/workshops" element={<Workshops/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;