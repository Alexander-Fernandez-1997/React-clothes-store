import { useState, useEffect } from "react";
import Butter from "buttercms";
import { Cartas } from "./components/Cartas";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

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
      <Navbar />
      <Banner />
      <div className="container">
        <Cartas products={products} />
      </div>
      <Footer />
    </>
  );
};
