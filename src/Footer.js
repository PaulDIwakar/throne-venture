import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col bg-tblue text-white py-12">
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Throne Venture Tech LLP</p>
          <p>Plot 1B, 1st Cross Street,</p>
          <p>SIDCO Industrial Estate,</p>
          <p>Thirumudivakam,</p>
          <p>Chennai - 600 132</p>
          <p>Email: gopi@throneventure.com</p>
          <p>Phone: +91 9940189105</p>
          {/* <p>+91 9940189105</p> */}
        </div>

        {/* Google Map Integration */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <iframe
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=80.09368204569155, 12.970786607997281&amp;q=THRONE%20VENTURE%20TECH%20LLP%2C%20Thirumudivakam%2C%20Tamil%20Nadu&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
            className="border-0"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Throne Venture. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
