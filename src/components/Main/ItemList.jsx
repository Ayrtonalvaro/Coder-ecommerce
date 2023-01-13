import React from "react";
import { NavLink } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="mt-10 grid grid-cols-3">
      {products.map((product) => {
        return (
          <div className=" p-2" key={product.id}>
            <Item product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
