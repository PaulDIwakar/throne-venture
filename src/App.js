import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Services from "./pages/Services";
import Footer from "./Footer";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Router>
      {/* Set up the page structure */}
      <div className="flex flex-col min-h-screen">
        {/* Fixed Header */}
        <Header />
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
