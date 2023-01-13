import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const onAdd = (amountProduct) => {
    if (product.stock > 0) {
      console.log("Se agregaron" + " " + amountProduct + " " + "productos");
    }
  };
  return (
    <div className="flex justify-center items-center text-center w-[600px] h-[500px] bg-white shadow-xl">
      <img className="w-40" src={product.img} />
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <span className="font-bold text-red-600">3 y 6 cuotas sin interés</span>
        <p className="font-medium text-red-600">Hasta 18 cuotas fijas</p>
        <p>{product.description}</p>
        <ItemCount stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
