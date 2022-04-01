import { useState, useEffect } from "react";
import Butter from "buttercms";
import { Cartas } from "./components/Cartas";
import { Banner } from "./components/Banner";

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
    <>
      <Banner />
      <h2 className="pt-5 pb-3 ps-5 mb-0">
        Our products
        <hr />
      </h2>
      <div className="container">
        <Cartas products={products} />
      </div>
    </>
  );
};
