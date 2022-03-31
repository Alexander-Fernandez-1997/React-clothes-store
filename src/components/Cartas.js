import React from "react";

export const Cartas = ({ products }) => {
  const handleModal = (e) => {
    e.preventDefault();
    const father = e.target.offsetParent;
    const modal = father.querySelector("#exampleModal");
    // const body = document.querySelector(body);
    // const myModal = new bootstrap.Modal(modal);
    console.log(modal);
    console.log(modal.classList);
    console.log(modal.dataset);
    // body.classList.add("modal-open");
    modal.classList.add("show");
    modal.style.display = "block";
    modal.setAttribute("role", "dialog");
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    const modal = e.target.offsetParent.offsetParent.offsetParent;
    console.log(modal);
    // const modal = father.querySelector("#exampleModal");
    modal.classList.remove("show");
    modal.style.display = "";
    modal.setAttribute("role", "");
  };

  return (
    <div className="row gap-5 m-4">
      {products.map((product) => (
        <div className="card rounded col-4 carta" key={product.id}>
          <div className="card-body p-3">
            <img
              onClick={handleModal}
              src={product.image}
              alt={product.name}
              className="img-fluid d-block mx-auto mb-3"
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
            ></img>

            <h5 className="text-center">
              {" "}
              <a
                onClick={handleModal}
                href="#"
                className="text-dark "
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModal"
              >
                {product.name}
              </a>
            </h5>
            <p className="small text-muted font-italic d-none">
              {product.description}
            </p>
            <ul className="list-inline small">
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
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl ">
                <div className="modal-content">
                  <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                      <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={product.image}
                            alt="..."
                          />
                        </div>
                        <div className="col-md-6">
                          <h1 className="display-5 fw-bolder">
                            {product.name}
                          </h1>
                          <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">
                              {`$${product.price * 0.3 + product.price}`}
                            </span>
                            <span>{`$${product.price}`}</span>
                          </div>
                          <p className="lead">{product.description}</p>
                          <div>
                            <button
                              onClick={handleCloseModal}
                              className="snipcart-add-item btn btn-dark"
                              data-item-id={product.id}
                              data-item-image={product.image}
                              data-item-name={product.name}
                              data-item-url="/"
                              data-item-description={product.description}
                              data-item-price={product.price}
                              data-bs-dismiss="modal"
                            >
                              Add to Cart
                            </button>
                            <button
                              className="ms-2 btn btn-dark"
                              onClick={handleCloseModal}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
