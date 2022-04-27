import { useState, useEffect } from "react";
import { Cartas } from "./components/Cartas";
import { Banner } from "./components/Banner";
import { db } from "./firebase/firestore";


export const App = () => {
  const [products, setProducts] = useState([]);

 
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
