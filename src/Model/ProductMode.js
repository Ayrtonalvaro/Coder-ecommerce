export const modelProductFromFirestore = (doc) => {
  const data = doc.data();

  const productModel = {
    id: doc.id,
    category: data.category,
    description: data.description,
    img: data.img,
    name: data.name,
    price: data.price,
    stock: data.stock,
  };

  return productModel
};
