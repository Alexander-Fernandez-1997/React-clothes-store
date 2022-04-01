import React from "react";

export const AboutScreen = () => {
  return (
    <>
      <div className=" bannerabout">
        {/* <h1 className=" bread mb-5 text-light">Amazing Store</h1> */}
      </div>
      {/* termina el banner */}
      <h1 className="pt-5 pb-3 ps-5 mb-0 text-light bg-dark letrah1 ">
        Amazing Store story
        <hr />
      </h1>
      {/* Story fachera */}
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-dark text-light pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center about2">
              <a
                href="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play"></span>
              </a>
            </div>
            <div className="col-md-7 py-md-5 wrap-about pb-md-5 ftco-animate">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">Leading the market since 1985</h2>
                </div>
              </div>
              <div className="pb-md-5 pb-4">
                <p>
                  Amazing Store is India’s first fast fashion brand with its
                  design office based in London. A part of Future Style Lab,
                  Amazing Store is for the fashion-loving and value-conscious
                  Indian Woman.
                </p>
                <p>
                  The brand captures the best of the latest international trends
                  created in London with a style language that is resolutely
                  feminine and classy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* segunda seccion de la historia */}
      <section className="ftco-section ftco-no-pb ftco-no-pt  text-light mt-0 aboutstory">
        <div className="container">
          <div className="row">
            <div className="col-md-7 py-md-5 wrap-about pb-md-5 ftco-animate">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">Objetives</h2>
                </div>
              </div>
              <div className="pb-md-5 pb-4">
                <p>
                  Amazing Store aims to stand out in the market by offering
                  global fashion at competitive prices. Its feminine
                  international designs, prints and styles originate in London
                  and with the help of a global network of robust vendors and
                  factories, Amazing Store is able to deliver fresh fashion from
                  the runway every week.
                </p>
                <p>
                  Since experimentation is crucial at Amazing Store, we believe
                  in evolving the content of our fashion look books regularly.
                  The motto of the brand is to deliver new collections every
                  week at affordable price points.
                </p>
              </div>
            </div>
            <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center about3">
              <a
                href="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Iconos en 3 partes */}
      <h2 className="pt-5 pb-3 ps-5 mb-0">
        We bring
        <hr />
      </h2>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
