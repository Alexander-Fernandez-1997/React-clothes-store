import React from "react";

export const Cartas = ({ products }) => {
  return (
    <div className="row gap-3 mt-4">
      {products.map((product) => (
        <div class="card rounded col-4 carta" key={product.id}>
          <div class="card-body p-3">
            <img
              src={product.image}
              alt={product.name}
              class="img-fluid d-block mx-auto mb-3"
            />
            <h5 className="text-center">
              {" "}
              <a href="#" class="text-dark">
                {product.name}
              </a>
            </h5>
            <p class="small text-muted font-italic d-none">
              {product.description}
            </p>
            <ul class="list-inline small">
              <li>
                <div className="precio mt-3">
                  <h4 className="text-dark">{`$${product.price}`}</h4>
                  <button
                    className="snipcart-add-item btn btn-dark"
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
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
