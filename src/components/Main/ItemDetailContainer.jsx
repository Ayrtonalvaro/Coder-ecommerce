import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [filterProducts, setFilterPorducts] = useState([]);
  const [loading, setLoading] = useState(false);

  {
    useEffect(() => {
      setLoading(true);
      console.log(productId);
      getProduct(productId)
        .then((data) => {
          setProduct(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
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
    <div className="flex flex-col justify-center items-center  bg-slate-100 h-screen">
      <div className="border rounded-md flex gap-10 border-slate-400">
        <ItemDetail product={product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
