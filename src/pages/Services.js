import React from "react";

function Services() {
  const services = [
    { name: "RPT", image: "https://via.placeholder.com/300" },
    { name: "Mould Design", image: "https://via.placeholder.com/300" },
    { name: "Soft Moulds", image: "https://via.placeholder.com/300" },
    { name: "Injection Moulds", image: "https://via.placeholder.com/300" },
    {
      name: "Plastic part production",
      image: "https://via.placeholder.com/300",
    },
    { name: "Secondary Operation", image: "https://via.placeholder.com/300" },
    { name: "Assembly", image: "https://via.placeholder.com/300" },
    { name: "mould maintenance", image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="py-32 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-tblue mb-8">
        Our Services
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-4 text-xl font-medium text-gray-700">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
