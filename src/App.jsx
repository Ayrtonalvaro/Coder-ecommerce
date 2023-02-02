import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import CartContainer from "./components/Main/CartContainer";
import AppContext from "./context/AppContext";
import { useState } from "react";
import Login from "./components/Login/Login";
import CheckOut from "./components/Main/CheckOut";

export const CartContext = AppContext;

function App() {
  const [cart, setCart] = useState([]);

  const addProductCart = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prevCart) => {
        return [...prevCart, productToAdd];
      });
    } else {
      console.error("El producto ya esta agregado");
    }
    console.log(productToAdd.quantity);
  };
  
  const isInCart = (id) => cart.some((product) => id === product.id);

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const removeAllProduct = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });
    return total 
  };

  const total = getTotal();
  return (
    <CartContext.Provider
      value={{
        addProductCart,
        cart,
        removeProduct,
        removeAllProduct,
        isInCart,
        total
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Navbar cart={cart} />
          <Routes>
            <Route exact path="/login" element={<Login />} />

            <Route
              exact
              path="/"
              element={<ItemListContainer title={"Bienvenidos"} />}
            />
            <Route
              exact
              path="/category/:categoryId"
              element={<ItemListContainer title={"Bienvenidos"} />}
            />
            <Route
              exact
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route exact path="/checkout" element={<CheckOut />} />
          </Routes>
          {/*FOOTER*/}
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
