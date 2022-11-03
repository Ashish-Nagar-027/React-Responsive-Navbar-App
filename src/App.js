// import react router dom
import { Routes, Route } from "react-router-dom";
// css
import "./App.css";
// components
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home";
import Pricing from "./components/pages/pricing";
import Testimonials from "./components/pages/Testimonial";
import Demo from "./components/pages/Demo";
import Keyfeatures from "./components/pages/Keyfeatures";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Keyfeatures />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
