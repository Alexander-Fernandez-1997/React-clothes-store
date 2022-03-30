import { useState, useEffect } from "react";
import Butter from "buttercms";

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(["cookies"], {
        order: "name",
      });
      const { data } = await res.data;
      const allProducts = data.cookies;
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Cookie Jar</h1>
      <button className="snipcart-checkout"> View Cart </button>

      {products.map((product) => (
        <div>
          <img src={product.image} alt={`${product.name}`} />
          {product.name}
          {product.price}
          {product.description}

          <button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-image={product.image}
            data-item-name={product.name}
            data-item-url="/"
            data-item-description={product.description}
            data-item-price={product.price}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
};
