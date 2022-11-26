import gsap from "gsap";

export const staggerReveal = (node1, node2) => {
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

  export const fadeInUpInfo = (node) => {
    gsap.from(node, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.inOut",
    });
  };
  export const fadeInUpImgMenu = (node) => {
    gsap.from(node, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.inOut",
    });
  };
  export const staggerText = (node1, node2, node3) => {
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
  export const handleImg = (city,cityBackground) => {
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
  export const handleImgReturn = (cityBackground) => {
    gsap.to(cityBackground, {
      duration: 0.3,
      opacity: 0,
    });
  };
  // Hover on the link
  export const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  // Hover off the link
  export const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };