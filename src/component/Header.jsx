import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuLayer from "./MenuLayer";

const Header = () => {
  const [open,setOpen] = useState({
    initial:false,
    clicked:null,
    menuName:'Menu'
  })
  const [disabled, setDisabled] = useState(false)
  const handleOpen =()=>{
    disabledMenu()
    if(open.initial === false){
      setOpen({
        initial:null,
        clicked:true,
        menuName:'Close'
      })
    }else if(open.clicked === true){
      setOpen({
        clicked:!open.clicked,
        menuName:"Menu"
      })
    }else if(open.clicked === false){
      setOpen({
        clicked:!open.clicked,
        menuName:"Close"
      })
    }
  }
  const disabledMenu = ()=>{
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200);
  }
  
  return (
    <header
      className="container mx-auto px-20 ">
      <div className="flex justify-between pt-10 ">
        <Link className="text-xl font-bold z-50" to="/">
          SAFIUL.
        </Link>
        <span disabled={disabled} onClick={handleOpen} className="z-50 cursor-pointer">Menu</span>
      </div>
      <MenuLayer open={open}/>
    </header>
  );
};

export default Header;
