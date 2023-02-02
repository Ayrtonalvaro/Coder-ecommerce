import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const CartList = () => {
  const { removeProduct, removeAllProduct } = useContext(AppContext);

  const { cart } = useContext(AppContext);

  if (cart.length === 0)
    return (
      <h1 className="text-2xl text-red-600">No hay productos en el carrito</h1>
    );

  return (
    <div className="mt-20">
      <h1 className="text-5xl text-center">Sus productos</h1>
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            className="flex items-center mt-5 gap-10 border rounded-xl p-5 border-red-900"
          >
            <img className="w-20" src={product.img} />
            <div>
              <h1 className="font-bold">
                Nombre del producto:{" "}
                <span className="text-red-700">{product.name}</span>
              </h1>
              <h2 className="font-bold">
                Cantidad:{" "}
                <span className="text-yellow-600">{product.quantity}</span>
              </h2>
              <button
                onClick={() => removeProduct(product.id)}
                className="bg-red-400 rounded-md p-1 mt-1"
              >
                Elimianar
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between">
        <button
          onClick={() => removeAllProduct()}
          className="bg-red-400 rounded-md mt-5 p-2"
        >
          Eliminar carrito
        </button>
        <Link to="/checkout">
          <button className="bg-green-400 rounded-md mt-5 p-2">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartList;
