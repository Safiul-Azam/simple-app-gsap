import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./MenuLayer.css";
import dallas from "./images/dallas.webp";
import austin from "./images/austin.webp";
import newyork from "./images/newyork.webp";
import sanfrancisco from "./images/sanfrancisco.webp";
import beijing from "./images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
];
const MenuLayer = ({ open }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  let imageMenu = useRef(null);
  useEffect(() => {
    if (open.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, { duration: 1, css: { display: "none" } });
    } else if (
      open.clicked === true ||
      (open.clicked === true && open.initial == null)
    ) {
      //open menu
      gsap.to(menu, { duration: 1, css: { display: "block" } });
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUpInfo(info);
      fadeInUpImgMenu(imageMenu);
      staggerText(line1, line2, line3);
    }
  }, [open]);
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeInUpInfo = (node) => {
    gsap.from(node, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.inOut",
    });
  };
  const fadeInUpImgMenu = (node) => {
    gsap.from(node, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.inOut",
    });
  };
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  };
  const handleImg = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      transformOrigin: "right top",
    });
  };
  const handleImgReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.3,
      opacity: 0,
    });
  };
  // Hover on the link
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  // Hover off the link
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      ref={(el) => {
        menu = el;
      }}
      className="hidden fixed top-0 left-0 right-0 h-full w-full z-10 "
    >
      <div
        ref={(el) => {
          revealMenuBackground = el;
        }}
        className="fixed top-0 left-0 right-0 bottom-0 -z-0 w-full h-full bg-black"
      ></div>
      <div
        ref={(el) => {
          revealMenu = el;
        }}
        className="relative bg-red-600 h-full overflow-hidden"
      >
        <div
          ref={(el) => (cityBackground = el)}
          className="cityBg absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 bg-cover bg-no-repeat"
        ></div>
        <div className="relative top-[150px] container mx-auto px-20 ">
          <div className="flex justify-around items-center">
            <nav className="block w-full">
              <ul className="m-0 p-0">
                <li className="text-7xl h-[100px] font-bold cursor-pointer relative overflow-hidden">
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                    className="hover:text-black text-white absolute"
                    to="/opportunities"
                  >
                    Opportunities
                  </Link>
                </li>
                <li className="text-7xl h-[100px] font-bold cursor-pointer relative overflow-hidden">
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line2 = el)}
                    className="hover:text-black text-white absolute"
                    to="/solutions"
                  >
                    Solutions
                  </Link>
                </li>
                <li className="text-7xl h-[100px] font-bold cursor-pointer relative overflow-hidden">
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line3 = el)}
                    className="hover:text-black text-white absolute"
                    to="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              ref={(el) => {
                info = el;
              }}
              className="w-1/2 text-white"
            >
              <h3 className="text-xl font-bold">Our Promise</h3>
              <p>
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software.
              </p>
            </div>
          </div>
          <div
            ref={(el) => {
              imageMenu = el;
            }}
            className="mt-10 space-x-10 text-white"
          >
            Locations:
            {/* Returning the list of cities */}
            {cities.map((el) => (
              <span
                onMouseEnter={() => handleImg(el.image)}
                onMouseOut={handleImgReturn}
                className="ml-10 cursor-pointer hover:ease-in-out hover:bg-black hover:py-[6px] hover:px-[18px] duration-300"
                key={el.name}
              >
                {el.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLayer;
