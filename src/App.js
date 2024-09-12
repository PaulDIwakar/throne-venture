import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Services from "./pages/Services";
import Footer from "./Footer";
import Gallery from "./pages/Gallery";
import Facility from "./pages/Facility";
import ContactUs from "./pages/ContactUs";
import CertificatePage from "./pages/CertificatePage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />
      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/certifications" element={<CertificatePage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
