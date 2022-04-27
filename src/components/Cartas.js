import React from "react";

export const Cartas = ({ products }) => {
  const handleModal = (e) => {
    e.preventDefault();
    const father = e.target.parentNode.parentNode;
    console.log(e.target);
    console.log(father);
    const modal = father.querySelector("#exampleModal");
    modal.classList.add("show");
    modal.style.display = "block";
    modal.setAttribute("role", "dialog");
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    const modal = e.target.offsetParent.offsetParent.offsetParent;
    modal.classList.remove("show");
    modal.style.display = "";
    modal.setAttribute("role", "");
  };

  return (
    <div className="row gap-5 m-4">
      {products.map((product) => (
        <div
          className=" col-12 col-sm-12 col-md-5 col-lg-4 carta"
          key={product.id}
        >
          <div className="card-body cartachica pb-3">
            <img
              onClick={handleModal}
              src={product.data.photo}
              alt={product.data.name}
              className="img-fluid d-block mx-auto mb-3"
            ></img>

            <h5 className="text-center">
              {" "}
              <a onClick={handleModal} href="#" className="text-dark ">
                {product.data.name}
              </a>
            </h5>
            <p className="small text-muted font-italic d-none">
              {product.data.description}
            </p>
            <ul className="list-inline small">
              <li>
                <div className="precio mt-3">
                  <h4 className="text-dark">{`$${product.data.price}`}</h4>
                  <button
                    className="snipcart-add-item btn btn-dark"
                    data-item-id={product.id}
                    data-item-image={product.data.photo}
                    data-item-name={product.data.name}
                    data-item-url="/"
                    data-item-description={product.data.description}
                    data-item-price={product.data.price}
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
                            src={product.data.photo}
                            alt="..."
                          />
                        </div>
                        <div className="col-md-6">
                          <h1 className="display-5 fw-bolder">
                            {product.data.name}
                          </h1>
                          <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">
                              $
                              {product.data.price !== undefined
                                ? (product.data.price * 0.3 +
                                    product.data.price) *
                                  1
                                : null}
                            </span>
                            <span className="ms-2">{`$${product.data.price}`}</span>
                          </div>
                          <p className="lead">{product.data.description}</p>
                          <div>
                            <button
                              onClick={handleCloseModal}
                              className="snipcart-add-item btn btn-dark"
                              data-item-id={product.id}
                              data-item-image={product.data.photo}
                              data-item-name={product.data.name}
                              data-item-url="/"
                              data-item-description={product.data.description}
                              data-item-price={product.data.price}
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
            {/* hasta aca arriba es el modal */}
          </div>
        </div>
      ))}
    </div>
  );
};
