import { useState, useEffect } from "react";
import Butter from "buttercms";
import { Cartas } from "./components/Cartas";

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(["clothes"], {
        order: "name",
      });
      const { data } = await res.data;
      const allProducts = data.clothes;
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Clothes Store</h1>
      <button className="snipcart-checkout"> View Cart </button>

      <Cartas products={products} />
    </div>
  );
};
