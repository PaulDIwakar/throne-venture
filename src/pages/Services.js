import React from "react";

function Services() {
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
  return (
    <div className="">
      <div className="py-32 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-tblue">
            Services
          </h2>
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
    </div>
  );
}

export default Services;
