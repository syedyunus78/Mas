import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css"
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Transportation from "./Components/Transportation";
import Contactuspage from "./Components/Contactuspage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <About />
            <Transportation />
          </>
        } />
        <Route path="/contact" element={<Contactuspage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
