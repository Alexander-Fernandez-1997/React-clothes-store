import React from "react";
import { FaInstagram, FaUserTie, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-item">
              <h4>Finance Business</h4>
              <p>
                Vivamus tellus mi. Nulla ne cursus elit,vulputate. Sed ne cursus
                augue hasellus lacinia sapien vitae.
              </p>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.instagram.com/alex.fernandez97/?hl=es"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://alexander-fernandez.netlify.app/"
                    target="_blank"
                  >
                    <FaUserTie />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alexander-fern%C3%A1ndez-9455aa174/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Alexander-Fernandez-1997"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4>Useful Links</h4>
              <ul className="menu-list">
                <li>
                  <Link to="/blog">Vivamus ut tellus mi</Link>
                </li>
                <li>
                  <Link to="/blog">Nulla nec cursus elit</Link>
                </li>
                <li>
                  <Link to="/blog">Vulputate sed nec</Link>
                </li>
                <li>
                  <Link to="/blog">Cursus augue hasellus</Link>
                </li>
                <li>
                  <Link to="/blog">Lacinia ac sapien</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4>Additional Pages</h4>
              <ul className="menu-list">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">How We Work</Link>
                </li>
                <li>
                  <Link to="/about">Quick Support</Link>
                </li>
                <li>
                  <Link to="/about">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item last-item">
              <h4>Contact Us</h4>
              <div className="contact-form">
                <form
                  id="contact footer-contact"
                  action="POST"
                  method="POST"
                  name="amazing-store"
                  netlify
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="amazing-store" />
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Copyright &copy; 2022 Amazing Store Co., Ltd. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
