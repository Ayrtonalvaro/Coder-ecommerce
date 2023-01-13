import React from "react";
import CardWidget from "../Cardwidget/CardWidget";
import LoginButton from "../LoginButton/LoginButton";
import logoShop from "../../../assets/logoshop.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <nav className="flex justify-between items-center text-slate-50 px-40">
        <div className="">
          <img src={logoShop} className="w-32" />
        </div>
        <div className="flex gap-20 items-center ">
          <ul className="flex gap-5">
            <li>
              <p onClick={() => navigate("/")} className="hover:text-red-600 cursor-pointer">
                Home
              </p>
            </li>
            <li>
              <NavLink
                to="/category/celular"
                className={({ isActive }) =>
                  isActive ? " text-red-600" : "text-white hover:text-red-600"
                }
              >
                Celulares
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/tablet"
                className={({ isActive }) =>
                  isActive ? " text-red-600" : "text-white hover:text-red-600"
                }
              >
                Tablets
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-red-600"
                    : "text-white hover:text-red-600"
                }
              >
                Notebooks
              </NavLink>
            </li>
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
