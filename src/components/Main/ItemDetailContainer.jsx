import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  {
    useEffect(() => {
      setLoading(true);

      const docRef = doc(db, "products", productId);

      getDoc(docRef)
        .then((res) => {
          const data = res.data();
          const product = { id: res.id, ...data };

          setProduct(product);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [productId]);
  }

  if (loading)
    return (
      <h1 className="flex justify-center text-red-600 text-2xl">Cargando...</h1>
    );

  return (
    <div className="flex flex-col justify-center items-center   bg-slate-100 h-screen">
      <div className="border rounded-md flex gap-10 bg-white  border-slate-400">
        <ItemDetail product={product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
