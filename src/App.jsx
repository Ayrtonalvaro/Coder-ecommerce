import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer title = "Bienvenidos"/>
    </div>
  );
}

export default App;
