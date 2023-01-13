const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_743195-MLA45719932493_042021-F.webp",
    stock: 25,
    description: "Description de Iphone 12",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 800,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_730981-MLA48800008115_012022-O.webp",
    stock: 10,
    description: "Description de Iphone 12",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_991281-MLA47871333051_102021-O.webp",
    stock: 5,
    description: "Description de Iphone 12",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    },1000);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[id-1])
    },1000)
  } )
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoryId));
    }, 1000);
  });
};

