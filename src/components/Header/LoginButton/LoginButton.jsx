import React from "react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
      <NavLink to="/login">
        <button className="shadow-md border border-slate-400 rounded-md w-40 h-10 hover:border-slate-50 hover:bg-red-800 hover:duration-200">
          Iniciar sesión
        </button>
      </NavLink>
    </>
  );
};

export default LoginButton;
