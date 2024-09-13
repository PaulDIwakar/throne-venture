import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://throneventure.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("There was an error sending the message!", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="bg-gray-100 py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Send us a message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Get in Touch
              </h3>

              <div>
                <h4 className="text-lg font-medium text-gray-600">Address:</h4>
                <p className="text-gray-600">
                  Throne Venture Tech LLP,
                  <br />
                  Plot 1B, 1st Cross Street,
                  <br />
                  SIDCO Industrial Estate,
                  <br />
                  Thirumudivakam,
                  <br />
                  Chennai - 600 132,
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-600">Phone:</h4>
                <p className="text-gray-600">+91 9940189105</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-600">Email:</h4>
                <p className="text-gray-600">gopi@throneventure.com</p>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8">
                <iframe
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=80.09368204569155, 12.970786607997281&amp;q=THRONE%20VENTURE%20TECH%20LLP%2C%20Thirumudivakam%2C%20Tamil%20Nadu&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps location of Throne Venture Tech LLP"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
