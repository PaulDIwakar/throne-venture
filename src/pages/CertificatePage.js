// src/components/CertificatePage.js
import React from "react";
import certificate1 from "../assets/certificate/TVT ISO Certificate 20221107.jpg";
import certificate2 from "../assets/certificate/Throne Venture Tech Lip.jpg";
import certificate3 from "../assets/certificate/TVT ZED GOLD Certificate 20230530.jpg";

const CertificatePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-32">
      <h1 className="text-4xl font-bold mb-8">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={certificate1}
            alt="Certificate 1"
            className="w-full h-auto"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={certificate2}
            alt="Certificate 2"
            className="w-full h-auto"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={certificate3}
            alt="Certificate 3"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
