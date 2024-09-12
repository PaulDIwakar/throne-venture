import React, { useState } from "react";
import logo from "./assets/logo-1.png";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Ensure you have installed @heroicons/react

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigationClick = () => {
    toggleMenu(); // Close the menu when a link is clicked
  };

  return (
    <div className="fixed flex flex-row h-20 shadow-lg justify-between w-full z-50 top-0 bg-white">
      <div className="flex cursor-pointer ml-4">
        <img className="w-30 h-16 mt-2" src={logo} alt="Throne Logo" />
        <div className="hidden md:flex flex-col text-3xl font-bold ml-5 py-1 text-tblue font-itc">
          THRONE VENTURE
          <span className="text-tgreen">TECH LLP</span>
        </div>
      </div>
      <div className="flex items-center mr-5">
        {/* Hamburger Icon */}
        <div className="tablet:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="w-8 h-8 text-tblue" />
            ) : (
              <MenuIcon className="w-8 h-8 text-tblue" />
            )}
          </button>
        </div>
        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } tablet:flex tablet:space-x-7 cursor-pointer py-2 text-tblue mt-4 tablet:mt-0 absolute tablet:relative bg-white w-full tablet:w-auto top-20 left-0 tablet:top-auto tablet:left-auto shadow-md tablet:shadow-none`}
        >
          <Link
            to="/"
            onClick={handleNavigationClick}
            className="block tablet:inline-block hover:text-tgreen text-md ml-5 mt-1 text-center"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={handleNavigationClick}
            className="block tablet:inline-block hover:text-tgreen text-md ml-5 mt-1 text-center"
          >
            Services
          </Link>
          <Link
            to="/facility"
            onClick={handleNavigationClick}
            className="block tablet:inline-block hover:text-tgreen text-md ml-5 mt-1 text-center"
          >
            Facilities
          </Link>
          <Link
            to={"/certifications"}
            onClick={handleNavigationClick}
            className="block tablet:inline-block hover:text-tgreen text-md ml-5 mt-1 text-center"
          >
            Certifications
          </Link>
          <Link
            to="/gallery"
            onClick={handleNavigationClick}
            className="block tablet:inline-block hover:text-tgreen text-md ml-5 mt-1 text-center"
          >
            Gallery
          </Link>
          <Link
            to="/contactus"
            onClick={handleNavigationClick}
            className="block tablet:inline-block hover:text-tgreen text-md ml-5 mt-1 text-center"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
