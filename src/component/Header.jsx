import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-around container mx-auto border h-[100vh]">
      <div>
      <Link to="/">Home</Link>
      <p>Menu</p>
      </div>
      <div>
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </header>
  );
};

export default Header;
