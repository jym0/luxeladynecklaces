import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import bagIcon from "bootstrap-icons/icons/bag.svg";

const Navbar = () => {
  return (
    <section className="bg-info">
      <div className="container">
        <nav class="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand logo text-capitalize fs-4" href="#">
              luxe lady necklaces
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-light navs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Diamonds
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chain
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Layering
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bold
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="nav-link fw-light text-dark text-decoration-none d-flex align-items-center shop_nav"
              >
                Shop &nbsp;
                <img src={bagIcon} alt="Bag Icon" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;