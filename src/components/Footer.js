import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";

export default class Footer extends Component {
     render() {
          return (
               <div>
                    <a href="#" className="scrollToTop">
                         <i className="fas fa-angle-double-up" />
                    </a>
                    {/* footer-section start */}
                    <footer id="footer-section">
                         <div className="overlay pt-120">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-lg-12 d-flex justify-content-center">
                                             <div className="section-header pb-120 text-center">
                                                  <h4 className="sub-title-alt">
                                                       Contact Me
                                                  </h4>
                                                  <h3 className="title">
                                                       Think I can help? Lets
                                                       Talk!
                                                  </h3>
                                                  <a
                                                       href="https://wa.me/+2347064245842"
                                                       className="cmn-btn"
                                                  >
                                                       Let's Work Together
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bottom-area">
                                        <div className="row d-flex justify-content-between">
                                             <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-cen">
                                                  <a href="index.html">
                                                       <img
                                                            src={logo}
                                                            alt="logo"
                                                       />
                                                  </a>
                                             </div>
                                             <div className="col-lg-8 col-md-8 col-sm-8 d-flex align-items-center justify-content-end justify-cen">
                                                  <ul className="d-flex">
                                                       <li>
                                                            <Link to="/about">
                                                                 About Us
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/portfolio">
                                                                 Work
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
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="footer-bottom">
                              <div className="container">
                                   <div className="main-content">
                                        <div className="row d-flex justify-content-center">
                                             <div className="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start justify-cen">
                                                  <div className="left-area">
                                                       <p>
                                                            Copyright © 2021.
                                                            Made with passion by{" "}
                                                            <a href="https://roatek.com.ng">
                                                                 Roatek
                                                                 Technologies
                                                            </a>
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen">
                                                  <div className="right-area">
                                                       <p>All right reserved</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </footer>
                    {/* footer-section end */}
               </div>
          );
     }
}
