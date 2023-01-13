import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";

import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
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
        </Routes>
        {/*FOOTER*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
