import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
     render() {
          return (
               <div>
                    {/* header-section start */}
                    <header id="header-section">
                         <div className="overlay">
                              <div className="container">
                                   <div className="row d-flex header-area">
                                        <div className="logo-section flex-grow-1 d-flex align-items-center">
                                             <Link
                                                  className="site-logo site-title"
                                                  exact
                                                  to="/"
                                             >
                                                  <img
                                                       src="images/logo.png"
                                                       alt="site-logo"
                                                  />
                                             </Link>
                                        </div>
                                        <button
                                             className="navbar-toggler ml-auto collapsed"
                                             type="button"
                                             data-toggle="collapse"
                                             data-target="#navbarSupportedContent"
                                             aria-controls="navbarSupportedContent"
                                             aria-expanded="false"
                                             aria-label="Toggle navigation"
                                        >
                                             <i className="fas fa-bars" />
                                        </button>
                                        <nav className="navbar navbar-expand-lg p-0">
                                             <div
                                                  className="navbar-collapse collapse"
                                                  id="navbarSupportedContent"
                                             >
                                                  <ul className="navbar-nav main-menu ml-auto">
                                                       <li>
                                                            {/* <a
                                                                 href="index.html"
                                                                 className="active"
                                                            >
                                                                 Home
                                                            </a> */}
                                                            <Link
                                                                 className="active"
                                                                 exact
                                                                 to="/"
                                                            >
                                                                 Home
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/about">
                                                                 About Us
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/portfolio">
                                                                 Portfolio
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/blog">
                                                                 Blog
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/contact">
                                                                 Contact
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </nav>
                                        <div className="right-area header-action d-flex align-items-center">
                                             <a
                                                  target="_blank"
                                                  href="https://wa.me/+2347064245842"
                                                  className="cmn-btn"
                                             >
                                                  Contact Me
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </header>
                    {/* header-section end */}
               </div>
          );
     }
}
