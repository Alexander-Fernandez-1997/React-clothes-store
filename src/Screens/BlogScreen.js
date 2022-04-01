import React from "react";

export const BlogScreen = () => {
  return (
    <>
      <div className=" bannerblog ">
        <h1 className="text-light ms-5">Let s talk about style</h1>
      </div>
      <h1 className="pt-5 pb-3 ps-5 mb-0  ">
        Amazing Store blog <hr />
      </h1>
      <div className="container">
        <div className="row mt-5">
          <div className="blog col-sm-12 col-md-8 col-lg-6">
            <div className="blogtext">
              <h3>Let’s Talk About Dress Codes and Clothes</h3>
              <p>
                What “dressing down” reveals about changes in how we live and
                work in a technology-driven society
              </p>
            </div>
            <div className="blogimage blog1"></div>
            <div class="d-grid">
              <button
                type="button"
                class="btn btn-secondary blogbutton"
                data-bs-toggle="modal"
                data-bs-target="#blog1"
              >
                Read more
              </button>
            </div>
          </div>

          {/* blog1 finalizado */}

          <div className="blog col-sm-12 col-md-8 col-lg-6">
            <div className="blogtext">
              <h3>6 Things You Should Know About Clothes</h3>
              <p>
                For those of you wondering why you should care about what’s in
                your closet, here are the big six:
              </p>
            </div>
            <div className="blogimage blog2"></div>
            <div class="d-grid">
              <button
                type="button"
                class="btn btn-secondary blogbutton"
                data-bs-toggle="modal"
                data-bs-target="#blog2"
              >
                Read more
              </button>
            </div>
          </div>

          {/* blog2 finalizado */}

          {/* modal 2 */}

          <div
            class="modal fade"
            id="blog2"
            tabindex="-1"
            aria-labelledby="blog2Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="blog1Label">
                    6 Things You Should Know About Your Clothes
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  1.) There are chemicals on your clothes. And they’re often
                  carcinogenic. (Carcinogenic = cancer-causing). While the slow
                  food movement is starting to catch on and consumers are
                  becoming increasingly more conscious of what they eat, we
                  don’t yet think of clothing in the same way. <br />
                  2.) There are 27 to 30 million slaves in the world today. Yes,
                  slaves. <br />
                  3.) Big retailers are a big problem. <br />
                  4.) Our old clothes (and disposable behavior) are ruining
                  Africa’s economy. <br />
                  5.) It takes decades for your clothing to decompose in a
                  landfill. <br />
                  6.) It’s not helpless. Consumers have the purchasing power. We
                  all have the ability to change the industry by choosing which
                  companies deserve our dollars. It comes down to educating
                  yourself and adjusting your lifestyle in a way that doesn’t
                  require excessive consumption of disposable clothing.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal 1 --> */}
          <div
            class="modal fade"
            id="blog1"
            tabindex="-1"
            aria-labelledby="blog1Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="blog1Label">
                    Let’s Talk About Dress Codes and Clothes
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  “The digital transformation is clearly visible in this room.”
                  <br />
                  This was the opening statement of one of the speakers at a
                  digital transformation event I attended recently. For effect,
                  he paused as the audience looked around struggling to find who
                  or what he was referring to. <br /> “Nobody is wearing a
                  suit.” <br /> The response was interesting; awkward laughter
                  as the audience couldn’t tell whether he was joking or not.
                  But, lately, I hear more and more such comments about the
                  clothes we wear for work. <br />
                  At an earlier event in Singapore, one of the speakers took a
                  different view when asked about his decision to “dress down”
                  and not wear a suit: <br /> “This is just who I am.” <br />{" "}
                  Again, this is a widespread view: <br /> “The clothes I choose
                  to wear are an expression of my unique personality. This is
                  me.” <br /> Back at my digital transformation event, I stopped
                  listening to the presentation and began to think about the
                  meaning of clothes in a technology-driven world. <br /> What —
                  if anything — do changes in the workplace “dress codes” reveal
                  about today’s world?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
