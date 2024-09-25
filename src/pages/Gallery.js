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

const Gallery = () => {
  // Sample images for the gallery
  const images = [
    crane,
    surface_table_and_digital_height_gauge,
    moisture_analyser,
    push_pull_gauge,
    vernier_caliper,
    pin_gauge,
    mfi_tester,
    injection_moulding_machine,
    micrometer,
  ];

  return (
    <div className="py-32 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-tblue mb-8">
        Gallery
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transform transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
