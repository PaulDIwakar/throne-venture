import React, { useRef } from "react";
import cover from "./assets/cover.jpg";

const Home = () => {
  // Milestones data
  const milestones = [
    { year: "2020", description: "Founded Throne Venture" },
    { year: "2021", description: "Launched our first product" },
    { year: "2022", description: "Expanded to new markets" },
    { year: "2023", description: "Reached 1 million users" },
  ];

  // Facilities data
  const facilities = [
    {
      name: "State-of-the-Art Infrastructure",
      description: "We offer top-notch facilities for innovation.",
    },
    {
      name: "Global Offices",
      description: "We have offices in key locations worldwide.",
    },
    {
      name: "Research and Development",
      description: "Our R&D centers lead the industry.",
    },
  ];

  // Products data
  const products = [
    { name: "Product 1", description: "Innovative solution to problem A." },
    { name: "Product 2", description: "Revolutionary approach to issue B." },
    { name: "Product 3", description: "Leading product in category C." },
  ];

  // Services data
  const services = [
    {
      name: "Consulting",
      description: "Expert advice to drive your business forward.",
    },
    {
      name: "Development",
      description: "Cutting-edge solutions tailored to your needs.",
    },
    {
      name: "Support",
      description: "Reliable and ongoing support for all our clients.",
    },
  ];

  const learnMoreRef = useRef(null);

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
          <h1 className="text-5xl font-bold">Welcome to Throne Venture</h1>
          <p className="mt-4 text-xl">
            One step solution for all your plastic needs
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
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Facilities</h2>
          <div className="mt-12 grid grid-cols-1 mx-10 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-tgreen">
                  {facility.name}
                </h3>
                <p className="mt-4 text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Products</h2>
          <div className="mt-12 grid grid-cols-1 mx-10 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-tgreen">
                  {product.name}
                </h3>
                <p className="mt-4 text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="mt-12 grid grid-cols-1 mx-10 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-tgreen">
                  {service.name}
                </h3>
                <p className="mt-4 text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
