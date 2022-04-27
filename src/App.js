import { useState, useEffect } from "react";
import { Cartas } from "./components/Cartas";
import { Banner } from "./components/Banner";
import { db } from "./firebase/firestore";
// import Butter from "buttercms";

// const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

export const App = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await butter.content.retrieve(["clothes"], {
  //       order: "name",
  //     });
  //     const { data } = await res.data;
  //     const allProducts = data.clothes;
  //     setProducts(allProducts);
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    db.collection("clothes").onSnapshot((snapshot) =>
      setProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
  }, []);
  let ropa = [];
  products.length > 0 ? (ropa = products) : (ropa = []);

  return (
    <>
      <Banner />
      <h2 className="pt-5 pb-3 ps-5 mb-0">
        Our products
        <hr />
      </h2>
      <div className="container">
        <Cartas products={ropa} />
      </div>
    </>
  );
};
