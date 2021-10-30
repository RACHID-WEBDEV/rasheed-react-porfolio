import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../images/logo.png";

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
                                                  to="/"
                                             >
                                                  <img
                                                       src={logo}
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
                                                            <NavLink
                                                                 activeClassName={`active`}
                                                                 to="/"
                                                            >
                                                                 Home
                                                            </NavLink>
                                                       </li>
                                                       <li>
                                                            <NavLink
                                                                 to="/about"
                                                                 activeClassName={`active`}
                                                            >
                                                                 About Us
                                                            </NavLink>
                                                       </li>
                                                       <li>
                                                            <NavLink
                                                                 to="/portfolio"
                                                                 activeClassName={`active`}
                                                            >
                                                                 Portfolio
                                                            </NavLink>
                                                       </li>
                                                       <li>
                                                            <NavLink
                                                                 to="/blog"
                                                                 activeClassName={`active`}
                                                            >
                                                                 Blog
                                                            </NavLink>
                                                       </li>
                                                       <li>
                                                            <NavLink
                                                                 to="/contact"
                                                                 activeClassName={`active`}
                                                            >
                                                                 Contact
                                                            </NavLink>
                                                       </li>
                                                       <li>
                                                            <NavLink
                                                                 to="/page-not-found"
                                                                 activeClassName={`active`}
                                                            >
                                                                 Not
                                                            </NavLink>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </nav>
                                        <div className="right-area header-action d-flex align-items-center">
                                             <a
                                                  target="_blank"
                                                  href="https://wa.me/+2347064245842"
                                                  className="cmn-btn"
                                                  rel="noopener noreferrer"
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
