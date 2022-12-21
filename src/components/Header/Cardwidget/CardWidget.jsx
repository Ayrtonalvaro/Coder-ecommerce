import React from "react";

const CardWidget = () => {
  return (
    <>
      <button className="shadow-md border border-slate-400 rounded-md w-20 h-10 hover:border-slate-50 hover:bg-red-800 hover:duration-200">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>0</span>
      </button>
    </>
  );
};

export default CardWidget;
