import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="container mx-auto px-20">
      <div className="flex justify-between pt-10">
        <Link className="text-xl font-bold" to="/">
          SAFIUL.
        </Link>
        <Link to='menu'>Menu</Link>
      </div>
      
    </header>
  );
};

export default Header;
