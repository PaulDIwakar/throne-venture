import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import cover from "./assets/cover3.png";
import certificate1 from "./assets/certificate/TVT ISO Certificate 20221107.jpg";
import certificate2 from "./assets/certificate/Throne Venture Tech Lip.jpg";
import certificate3 from "./assets/certificate/TVT ZED GOLD Certificate 20230530.jpg";
import crane from "./assets/facilities/crane.PNG";
import surface_table_and_digital_height_gauge from "./assets/facilities/surface-table-and-digital-height-gauge.PNG";
import moisture_analyser from "./assets/facilities/moisture-analyser.PNG";
import push_pull_gauge from "./assets/facilities/push-pull-gauge.PNG";
import vernier_caliper from "./assets/facilities/vernier-caliper.PNG";
import pin_gauge from "./assets/facilities/pin-gauges.PNG";
import mfi_tester from "./assets/facilities/mfi-tester.jpg";
import injection_moulding_machine from "./assets/facilities/injection-moulding.jpg";
import micrometer from "./assets/facilities/micro-meter.PNG";
import product1 from "./assets/products/p1.jpeg";
import product2 from "./assets/products/p2.jpeg";
import product3 from "./assets/products/p3.jpeg";
import product4 from "./assets/products/p4.jpeg";
import product5 from "./assets/products/p5.jpeg";
import product6 from "./assets/products/p6.jpeg";
import product7 from "./assets/products/p7.jpeg";
import product8 from "./assets/products/p8.jpeg";
import rpt from "./assets/services/rpt.jpg";
import mould from "./assets/services/md2.jpg";
import softmoulds from "./assets/services/sfmld.jpg";
import injection_moulds from "./assets/services/injec.jpg";
import plastic_injection_mould from "./assets/services/plastic-injection-molding-1.jpg";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Milestones data
  const milestones = [
    { year: "2018", description: "Founded Throne Venture" },
    { year: "2019", description: "ISO 9001:2015 certification" },
    { year: "2020", description: "Skoch award" },
    { year: "2024", description: "PETC membership" },
  ];

  // Facilities data
  const facilities = [
    {
      name: "Injection Moulding Machine",
      image: injection_moulding_machine,
    },
    { name: "Crane", image: crane },
    {
      name: "surface table and digital height gauge",
      image: surface_table_and_digital_height_gauge,
    },
    { name: "MFI Tester", image: mfi_tester },
    {
      name: "Micrometer",
      image: micrometer,
    },
    { name: "Push/Pull gauge", image: push_pull_gauge },
    {
      name: "Digital Vernier caliper",
      image: vernier_caliper,
    },
    { name: "Pin gauges", image: pin_gauge },
    { name: "Moisture Analyser", image: moisture_analyser },
  ];

  // Products data
  // const products = [
  //   { name: "Product", description: "Innovative solution to problem A." },
  //   { name: "Product", description: "Revolutionary approach to issue B." },
  //   { name: "Product", description: "Leading product in category C." },
  // ];

  const products = [
    {
      name: "",
      image: product1,
    },
    {
      name: "",
      image: product2,
    },
    {
      name: "",
      image: product3,
    },
    {
      name: "",
      image: product4,
    },
    {
      name: "",
      image: product5,
    },
    {
      name: "",
      image: product6,
    },
    {
      name: "",
      image: product7,
    },
    {
      name: "",
      image: product8,
    },
    // { name: "Crane", image: crane },
    // {
    //   name: "surface table and digital height gauge",
    //   image: surface_table_and_digital_height_gauge,
    // },
    // { name: "MFI Tester", image: mfi_tester },
    // {
    //   name: "Micrometer",
    //   image: micrometer,
    // },
    // { name: "Push/Pull gauge", image: push_pull_gauge },
    // {
    //   name: "Digital Vernier caliper",
    //   image: vernier_caliper,
    // },
    // { name: "Pin gauges", image: pin_gauge },
    // { name: "Moisture Analyser", image: moisture_analyser },
  ];

  // Services data
  const services = [
    { name: "RPT", image: rpt },
    { name: "Mould Design", image: mould },
    { name: "Soft Moulds", image: softmoulds },
    { name: "Injection Moulds", image: injection_moulds },
    {
      name: "Plastic Injection Mould",
      image: plastic_injection_mould,
    },
    { name: "Secondary Operation", image: "https://via.placeholder.com/300" },
    { name: "Assembly", image: "https://via.placeholder.com/300" },
    { name: "mould maintenance", image: "https://via.placeholder.com/300" },
  ];

  const learnMoreRef = useRef(null);
  const certificationsRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Offset for any fixed header
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Cover Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">
            Welcome to Throne Venture Tech LLP
          </h1>
          <p className="mt-4 text-xl">
            One stop solution for all your plastic needs
          </p>
          <button
            onClick={() => scrollToSection(learnMoreRef)}
            className="mt-6 px-8 py-3 bg-tgreen text-white rounded-full hover:bg-lime-500"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Milestones Section */}
      <div ref={learnMoreRef} className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Milestones</h2>
          <div className="mt-12 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl font-bold text-tgreen">
                  {milestone.year}
                </div>
                <div className="mt-2 text-center">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="relative">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Facilities
          </h2>

          <div className="scroll-container flex space-x-8 overflow-hidden">
            <div className="flex space-x-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-100 rounded-lg shadow-lg w-80 cursor-pointer"
                  onClick={() => navigate("/facility")} // Navigate to /services
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700 whitespace-normal break-words overflow-hidden">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 mt-4 whitespace-normal break-words overflow-hidden">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate the content for seamless scrolling */}
              {facilities.map((facility, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 bg-gray-100 rounded-lg shadow-lg w-80 cursor-pointer"
                  onClick={() => navigate("/facility")} // Navigate to /services
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700 whitespace-normal break-words overflow-hidden">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 mt-4 whitespace-normal break-words overflow-hidden">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="relative">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Products
          </h2>

          <div className="scroll-container flex space-x-8 overflow-hidden">
            <div className="flex space-x-8">
              {products.map((facility, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-100 rounded-lg shadow-lg w-80 cursor-pointer"
                  // onClick={() => navigate("/facility")} // Navigate to /services
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-fill rounded-lg"
                  />
                </div>
              ))}
              {/* Duplicate the content for seamless scrolling */}
              {products.map((facility, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 bg-gray-100 rounded-lg shadow-lg w-80 cursor-pointer"
                  // onClick={() => navigate("/facility")} // Navigate to /services
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="relative">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>

          <div className="scroll-container flex space-x-8 overflow-hidden">
            <div className="flex space-x-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-100 rounded-lg shadow-lg w-80 cursor-pointer"
                  onClick={() => navigate("/services")} // Navigate to /services
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700 whitespace-normal break-words overflow-hidden">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mt-4 whitespace-normal break-words overflow-hidden">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate the content for seamless scrolling */}
              {services.map((service, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 bg-gray-100 rounded-lg shadow-lg w-80 cursor-pointer"
                  onClick={() => navigate("/services")} // Navigate to /services
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700 whitespace-normal break-words overflow-hidden">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mt-4 whitespace-normal break-words overflow-hidden">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div ref={certificationsRef} className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Certifications</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img
                src={certificate1}
                alt="Certificate 1"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4">
              <img
                src={certificate2}
                alt="Certificate 2"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4">
              <img
                src={certificate3}
                alt="Certificate 3"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
