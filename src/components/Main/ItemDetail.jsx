import ItemCount from "./ItemCount";
import { CartContext } from "../../App";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  const { addProductCart, isInCart } = useContext(CartContext);

  const notify = (quantity) => {
    if (quantity === 1) {
      toast.success(`${product.name} agregado al carrito`);
    } else {
      toast.success(`Se agregaron ${quantity} ${product.name} al carrito`,{position: toast.POSITION.TOP_CENTER});
    }
  };

  const onAdd = (quantity) => {
    notify(quantity);
    addProductCart({ ...product, quantity });
  };

  return (
    <>
      <div className="flex justify-center items-center text-center w-[600px] h-[500px]  ">
        <img className="w-40" src={product.img} />
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <span className="font-bold text-red-600">
            3 y 6 cuotas sin interés
          </span>
          <p className="font-medium text-red-600">Hasta 18 cuotas fijas</p>
          <p>{product.description}</p>
          {isInCart(product.id) && (
            <>
              <p className="text-red-600 font-bold">
                {product.name} agregado al carrrito
              </p>
              <Link to="/cart">
                <button className="bg-green-400 rounded-md mt-5 p-2">
                  Ir al carrito
                </button>
              </Link>
            </>
          )}
          {!isInCart(product.id) && (
            <ItemCount stock={product.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ItemDetail;
