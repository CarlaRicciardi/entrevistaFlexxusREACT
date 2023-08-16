import "./App.css";
import Search from "./Components/Search";
import ProductsList from "./Components/ProductsList";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <Search products={products} setProducts={setProducts} />
      <ProductsList products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
