import React, { Component } from "react";
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
        <header className="header_area mr-3">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <Link className="navbar-brand logo_h" to="index.html">
                <img src="img/logo.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                      My Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item search">CALL: +(254) 717 956 609 </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;
