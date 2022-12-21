import React from "react";
import CardWidget from "../Cardwidget/CardWidget";
import LoginButton from "../LoginButton/LoginButton"
import logoShop from "../../../assets/logoshop.png"

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-between items-center text-slate-50 px-40">
        <div className="">
          <img src={logoShop} className="w-32" />
        </div>
        <div className="flex gap-20 items-center ">
          <ul className="flex gap-5">
            <li>Celulares</li>
            <li>Tablets</li>
            <li>Notebooks</li>
          </ul>
          <div className="flex gap-2">
            <CardWidget />
            <LoginButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
