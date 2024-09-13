import React from "react";
import crane from "../assets/facilities/crane.PNG";
import surface_table_and_digital_height_gauge from "../assets/facilities/surface-table-and-digital-height-gauge.PNG";
import moisture_analyser from "../assets/facilities/moisture-analyser.PNG";
import push_pull_gauge from "../assets/facilities/push-pull-gauge.PNG";
import vernier_caliper from "../assets/facilities/vernier-caliper.PNG";
import pin_gauge from "../assets/facilities/pin-gauges.PNG";
import mfi_tester from "../assets/facilities/mfi-tester.jpg";
import injection_moulding_machine from "../assets/facilities/injection-moulding.jpg";
import micrometer from "../assets/facilities/micro-meter.PNG";

const Facility = () => {
  // Sample facilities with names and image URLs
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

  return (
    <div className="py-32 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-tblue mb-8">
        Our Facilities
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-4 text-xl font-medium text-gray-700">
                {facility.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
