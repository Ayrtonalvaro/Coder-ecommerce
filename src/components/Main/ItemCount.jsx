import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const addAmount = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const subAmount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <div className=" flex items-center justify-center gap-3">
        <button
          onClick={subAmount}
          className="text-xl w-5 h-8 bg-yellow-500 rounded-sm text-red-800 hover:bg-yellow-400 hover:text-red-400"
        >
          -
        </button>
        <span className="text-4xl">{count}</span>
        <button
          onClick={addAmount}
          className=" text-xl w-5 h-8 bg-yellow-500 rounded-sm text-red-800 hover:bg-yellow-400 hover:text-red-400 "
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className="ml-5 mt-5 flex items-center rounded-md h-8 bg-yellow-500 border border-red-300 hover:bg-yellow-300  hover:duration-200"
      >
        <p className="text-black hover:text-red-500">Añadir al carrito</p>
      </button>
    </div>
  );
};

export default ItemCount;
