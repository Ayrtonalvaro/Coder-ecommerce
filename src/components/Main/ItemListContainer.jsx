import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import Item from "./Item";
import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    asyncFunction(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading)
    return <h1 className="text-center text-8xl text-red-600">Cargando...</h1>;
  return (
    <div className="p-5 bg-slate-100 h-screen">
      <h1 className="text-center text-8xl text-red-600">{title}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
