import React from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { documentId, getDocs, query, where } from "firebase/firestore";

import { addDoc, collection, writeBatch } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormCheckOut from "../FormCheckOut";

const CheckOut = () => {
  const { cart, total, removeAllProduct } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [compra, setCompra] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [dataInputs, setDataInputs] = useState([{}]);

  const navigate = useNavigate();

  const createOrder = async (name, phone, email) => {
    setLoading(true);

    try {
      const order = {
        buyer: {
          name: name,
          phone: phone,
          email: email,
        },
        productsBuyed: cart,
        total,
      };

      const batch = writeBatch(db);

      const ids = cart.map((prod) => prod.id);
      console.log(ids);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const productsAddedToCartFromFirestore = await getDocs(productsRef);
      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();

        const stockDb = dataDoc.stock;

        const productInCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productInCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.concat({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, order);

        const { id } = orderAdded;
        setOrderId(id);
        removeAllProduct();

        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setCompra(true);
    }
  };

  if (loading)
    return (
      <h2 className="text-center text-red-600 text-2xl mt-5">
        Generando orden de compra...
      </h2>
    );

  return (
    <div>
      {!compra && (
        <div>
          <h1 className="flex justify-center mt-5 text-4xl text-red-600">
            Finalizar compra
          </h1>
          <div className="flex justify-center mt-5">
            <FormCheckOut createOrder={createOrder} />
          </div>
          <p className="mt-5 font-bold text-center">
            El total de su compra es ${total}{" "}
          </p>
        </div>
      )}
      {compra && (
        <div>
          <h1 className="flex justify-center mt-5 text-4xl text-red-600">
            Compra finalizada
          </h1>
          <span className="flex mt-5 justify-center font-bold text-3xl">
            Id orden de compra {orderId}
          </span>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
