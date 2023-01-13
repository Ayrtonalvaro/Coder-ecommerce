import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <NavLink to={`/detail/${product.id}`}>
      <div className="border rounded-md bg-white  h-54 hover:shadow-xl">
        <div className="flex flex-col items-center">
          <img className=" h-80 " src={product.img} />

          <div>
            <h3 className="flex justify-center font-bold text-2xl">
              ${product.price}
            </h3>
            <span className="font-bold text-red-600">
              3 y 6 cuotas sin interés
            </span>
            <p className="font-medium text-red-600">Hasta 18 cuotas fijas</p>
            <p className="flex justify-center text-xl">{product.name}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
