import React from "react";
import { Link } from "react-router-dom";
import dallas from "./images/dallas.webp";
import austin from "./images/austin.webp";
import newyork from "./images/newyork.webp";
import sanfrancisco from "./images/sanfrancisco.webp";
import beijing from "./images/beijing.webp";

const MenuLayer = () => {
  const cities = [
    { name: "Dallas", image: dallas },
    { name: "Austin", image: austin },
    { name: "New York", image: newyork },
    { name: "San Francisco", image: sanfrancisco },
    { name: "Beijing", image: beijing },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 h-full w-full z-10">
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-0 w-full h-full bg-black"></div>
      <div className="relative bg-red-600 overflow-hidden h-full">
        <div></div>
        <div className="flex justify-between items-center relative top-[200px]">
          <nav className="block">
            <ul className="m-0 p-0">
              <li className="text-6xl font-bold cursor-pointer ">
                <Link className="hover:text-black" to="/opportunities">
                  Opportunities
                </Link>
              </li>
              <li className="text-6xl font-bold cursor-pointer">
                <Link className=" text-white hover:text-black" to="/solutions">
                  Solutions
                </Link>
              </li>
              <li className="text-6xl font-bold cursor-pointer ">
                <Link className=" text-white hover:text-black" to="/contact-us">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="">
            <h3>Our Promise</h3>
            <p>
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
          </div>
          <div className="">
            Locations:
            {/* Returning the list of cities */}
            {cities.map((el) => (
              <span key={el.name}>{el.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLayer;
