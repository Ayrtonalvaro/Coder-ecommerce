import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/firebase/Firestore/product";
import ItemList from "./ItemList";
import { useAsync } from "../../Hooks/useAsync";

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();

  const getProductsByCategory = () => getProducts(categoryId);

  const {
    data: products,
    error,
    loading,
  } = useAsync(getProductsByCategory, [categoryId]);

  if (error) {
    return (
      <h1 className="text-center text-8xl text-red-600">
        Error en la carga de productos
      </h1>
    );
  }
  if (loading && !products)
    return <h1 className="text-center text-8xl text-red-600">Cargando...</h1>;
  if (products)
    return (
      <div className="p-5 bg-slate-100 h-screen">
        {categoryId && (
          <h1 className="text-center text-8xl text-red-600 uppercase">{categoryId}</h1>
        )}
        {!categoryId && (
          <h1 className="text-center text-8xl text-red-600">{title}</h1>
        )}

        <ItemList products={products} />
      </div>
    );
};

export default ItemListContainer;
