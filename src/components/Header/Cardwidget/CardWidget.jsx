import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

const CardWidget = () => {

  const {cart} = useContext(AppContext)
  console.log(cart)
  return (
    <>
      <button className="shadow-md border border-slate-400 rounded-md w-20 h-10 hover:border-slate-50 hover:bg-red-800 hover:duration-200">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>{cart.map(cart => cart.quantity)}</span>
      </button>
    </>
  );
};

export default CardWidget;
