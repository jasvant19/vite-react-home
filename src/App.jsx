import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./Header/Navigation";
import Footer from "./Footer/Footer";


// Pages

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <Footer/>
    </Router>        
  );
}

export default App;
