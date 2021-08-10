import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Portfolio extends Component {
     render() {
          return (
               <div>
                    <div>
                         {/* inner banner start */}
                         <section
                              id="banner-section"
                              className="inner-banner portfolio"
                         >
                              <div className="banner-content d-flex align-items-center">
                                   <div className="container">
                                        <div className="row d-flex justify-content-end">
                                             <div className="col-lg-6">
                                                  <div className="text-area">
                                                       <h1>Case Studies</h1>
                                                  </div>
                                             </div>
                                             <div className="col-lg-6">
                                                  <div className="text-area">
                                                       <div className="social-area d-flex align-items-center justify-content-center justify-content-lg-end">
                                                            <h3>
                                                                 Follow Me on
                                                            </h3>
                                                            <div className="social d-flex">
                                                                 <a
                                                                      href="#"
                                                                      className="single-icon behance"
                                                                 >
                                                                      <img
                                                                           src="images/social-Icon3.png"
                                                                           alt="social"
                                                                      />
                                                                 </a>
                                                                 <a
                                                                      href="#"
                                                                      className="single-icon instagram"
                                                                 >
                                                                      <img
                                                                           src="images/social-Icon2.png"
                                                                           alt="social"
                                                                      />
                                                                 </a>
                                                                 <a
                                                                      href="#"
                                                                      className="single-icon dribbble"
                                                                 >
                                                                      <img
                                                                           src="images/social-Icon1.png"
                                                                           alt="social"
                                                                      />
                                                                 </a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* banner-section end */}
                         {/* banner bottom start */}
                         <section id="banner-bottom" className="portfolio">
                              <div className="container">
                                   <div className="row d-flex align-items-center justify-content-between">
                                        <div className="col-lg-5 col-md-6 text-center">
                                             <div className="left-icon">
                                                  <Link
                                                       className="d-flex align-items-center"
                                                       exact
                                                       to="/"
                                                  >
                                                       <span>
                                                            <img
                                                                 src="images/back-icon.png"
                                                                 alt="icon"
                                                            />
                                                       </span>
                                                       Back to homepage
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6">
                                             <form action="#">
                                                  <div className="subscribe d-flex justify-content-between">
                                                       <input
                                                            type="email"
                                                            placeholder="Enter email address"
                                                            autoComplete="off"
                                                       />
                                                       <button className="subscribe-btn">
                                                            Subscribe
                                                       </button>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* banner bottom end */}
                         {/* Latest Project start */}
                         <section id="latest-project" className="portfolio">
                              <div className="overlay pt-120 pb-120">
                                   <div className="container wow fadeInUp">
                                        <div className="row justify-content-center text-center">
                                             <div className="col-lg-7">
                                                  <div className="section-header">
                                                       <h4 className="sub-title">
                                                            Portfolios
                                                       </h4>
                                                       <h3 className="title">
                                                            All Creative Works
                                                       </h3>
                                                       <p>
                                                            User-friendly web
                                                            pages are our thing.
                                                            I’ve also helped
                                                            some awesome
                                                            businesses with
                                                            branding and custom
                                                            solutions.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="row">
                                             <div className="col-lg-12">
                                                  <ul
                                                       className="nav nav-tabs"
                                                       id="myTab"
                                                       role="tablist"
                                                  >
                                                       <li className="nav-item">
                                                            <a
                                                                 className="nav-link all active"
                                                                 id="all-tab"
                                                                 data-toggle="tab"
                                                                 href="#all"
                                                                 role="tab"
                                                                 aria-controls="all"
                                                                 aria-selected="true"
                                                            >
                                                                 All
                                                            </a>
                                                       </li>
                                                       <li className="nav-item">
                                                            <a
                                                                 className="nav-link design"
                                                                 id="web-design-tab"
                                                                 data-toggle="tab"
                                                                 href="#web-design"
                                                                 role="tab"
                                                                 aria-controls="web-design"
                                                                 aria-selected="false"
                                                            >
                                                                 Web Design
                                                            </a>
                                                       </li>
                                                       <li className="nav-item">
                                                            <a
                                                                 className="nav-link ui-ux"
                                                                 id="ui-ux-tab"
                                                                 data-toggle="tab"
                                                                 href="#ui-ux"
                                                                 role="tab"
                                                                 aria-controls="ui-ux"
                                                                 aria-selected="false"
                                                            >
                                                                 UI/UX Design
                                                            </a>
                                                       </li>
                                                       <li className="nav-item">
                                                            <a
                                                                 className="nav-link product"
                                                                 id="product-tab"
                                                                 data-toggle="tab"
                                                                 href="#product"
                                                                 role="tab"
                                                                 aria-controls="product"
                                                                 aria-selected="false"
                                                            >
                                                                 Product Design
                                                            </a>
                                                       </li>
                                                  </ul>
                                                  <div
                                                       className="tab-content"
                                                       id="myTabContent"
                                                  >
                                                       <div
                                                            className="tab-pane fade show active"
                                                            id="all"
                                                            role="tabpanel"
                                                            aria-labelledby="all-tab"
                                                       >
                                                            <div className="single-item">
                                                                 <div className="row d-flex justify-content-between">
                                                                      <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                                           <div className="text-area">
                                                                                <h5>
                                                                                     Product
                                                                                     Design
                                                                                </h5>

                                                                                <Link to="/portfolio">
                                                                                     <h2>
                                                                                          Mobile
                                                                                          App
                                                                                          Redesign
                                                                                     </h2>
                                                                                </Link>
                                                                                <p>
                                                                                     Lorem
                                                                                     ipsum
                                                                                     dolor
                                                                                     sit
                                                                                     amet,
                                                                                     consectetur
                                                                                     adipiscing
                                                                                     elit.
                                                                                     Viverra
                                                                                     sed
                                                                                     iaculis
                                                                                     ornare
                                                                                     duis.
                                                                                </p>

                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     View
                                                                                     Case
                                                                                     Study
                                                                                     <span className="btn-icon" />
                                                                                </Link>
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                                           <div className="right-area">
                                                                                <img
                                                                                     src="images/latest-project1.png"
                                                                                     alt="portfolio page images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="single-item">
                                                                 <div className="row d-flex justify-content-between">
                                                                      <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                                           <div className="right-area mid">
                                                                                <img
                                                                                     src="images/latest-project2.png"
                                                                                     alt="portfolio page images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                                           <div className="text-area">
                                                                                <h5 className="mid">
                                                                                     UI/UX
                                                                                     Design
                                                                                </h5>

                                                                                <Link to="/portfolio">
                                                                                     <h2>
                                                                                          Mobile
                                                                                          App
                                                                                          Redesign
                                                                                     </h2>
                                                                                </Link>
                                                                                <p>
                                                                                     Lorem
                                                                                     ipsum
                                                                                     dolor
                                                                                     sit
                                                                                     amet,
                                                                                     consectetur
                                                                                     adipiscing
                                                                                     elit.
                                                                                     Viverra
                                                                                     sed
                                                                                     iaculis
                                                                                     ornare
                                                                                     duis.
                                                                                </p>

                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     {" "}
                                                                                     View
                                                                                     Case
                                                                                     Study
                                                                                     <span className="btn-icon" />
                                                                                </Link>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="single-item">
                                                                 <div className="row d-flex justify-content-between">
                                                                      <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                                           <div className="text-area">
                                                                                <h5 className="last">
                                                                                     Web
                                                                                     Design
                                                                                </h5>

                                                                                <Link to="/portfolio">
                                                                                     <h2>
                                                                                          Website
                                                                                          Design
                                                                                     </h2>
                                                                                </Link>
                                                                                <p>
                                                                                     Lorem
                                                                                     ipsum
                                                                                     dolor
                                                                                     sit
                                                                                     amet,
                                                                                     consectetur
                                                                                     adipiscing
                                                                                     elit.
                                                                                     Viverra
                                                                                     sed
                                                                                     iaculis
                                                                                     ornare
                                                                                     duis.
                                                                                </p>
                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     {" "}
                                                                                     View
                                                                                     Case
                                                                                     Study
                                                                                     <span className="btn-icon" />
                                                                                </Link>
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                                           <div className="right-area">
                                                                                <img
                                                                                     src="images/latest-project3.png"
                                                                                     alt="portfolio page images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="tab-pane fade"
                                                            id="web-design"
                                                            role="tabpanel"
                                                            aria-labelledby="web-design-tab"
                                                       >
                                                            <div className="single-item">
                                                                 <div className="row d-flex justify-content-between">
                                                                      <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                                           <div className="text-area">
                                                                                <h5 className="last">
                                                                                     Web
                                                                                     Design
                                                                                </h5>

                                                                                <Link to="/portfolio">
                                                                                     <h2>
                                                                                          Website
                                                                                          Design
                                                                                     </h2>
                                                                                </Link>
                                                                                <p>
                                                                                     Lorem
                                                                                     ipsum
                                                                                     dolor
                                                                                     sit
                                                                                     amet,
                                                                                     consectetur
                                                                                     adipiscing
                                                                                     elit.
                                                                                     Viverra
                                                                                     sed
                                                                                     iaculis
                                                                                     ornare
                                                                                     duis.
                                                                                </p>

                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     View
                                                                                     Case
                                                                                     Study
                                                                                     <span className="btn-icon" />
                                                                                </Link>
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                                           <div className="right-area">
                                                                                <img
                                                                                     src="images/latest-project3.png"
                                                                                     alt="portfolio page images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="tab-pane fade"
                                                            id="ui-ux"
                                                            role="tabpanel"
                                                            aria-labelledby="ui-ux-tab"
                                                       >
                                                            <div className="single-item">
                                                                 <div className="row d-flex justify-content-between">
                                                                      <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                                           <div className="right-area mid">
                                                                                <img
                                                                                     src="images/latest-project2.png"
                                                                                     alt="portfolio page images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                                           <div className="text-area">
                                                                                <h5 className="mid">
                                                                                     UI/UX
                                                                                     Design
                                                                                </h5>
                                                                                <Link to="/portfolio">
                                                                                     <h2>
                                                                                          Mobile
                                                                                          App
                                                                                          Designn
                                                                                     </h2>
                                                                                </Link>
                                                                                <p>
                                                                                     Lorem
                                                                                     ipsum
                                                                                     dolor
                                                                                     sit
                                                                                     amet,
                                                                                     consectetur
                                                                                     adipiscing
                                                                                     elit.
                                                                                     Viverra
                                                                                     sed
                                                                                     iaculis
                                                                                     ornare
                                                                                     duis.
                                                                                </p>
                                                                                Mobile
                                                                                App
                                                                                Design
                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     View
                                                                                     Case
                                                                                     Study
                                                                                     <span className="btn-icon" />
                                                                                </Link>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="tab-pane fade"
                                                            id="product"
                                                            role="tabpanel"
                                                            aria-labelledby="product-tab"
                                                       >
                                                            <div className="single-item">
                                                                 <div className="row d-flex justify-content-between">
                                                                      <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                                           <div className="text-area">
                                                                                <h5>
                                                                                     Product
                                                                                     Design
                                                                                </h5>

                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     <h2>
                                                                                          Mobile
                                                                                          App
                                                                                          Redesign
                                                                                     </h2>
                                                                                </Link>
                                                                                <p>
                                                                                     Lorem
                                                                                     ipsum
                                                                                     dolor
                                                                                     sit
                                                                                     amet,
                                                                                     consectetur
                                                                                     adipiscing
                                                                                     elit.
                                                                                     Viverra
                                                                                     sed
                                                                                     iaculis
                                                                                     ornare
                                                                                     duis.
                                                                                </p>
                                                                                <Link
                                                                                     className="cmn-btn-second"
                                                                                     to="/portfolio"
                                                                                >
                                                                                     View
                                                                                     Case
                                                                                     Study
                                                                                     <span className="btn-icon" />
                                                                                </Link>
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                                           <div className="right-area">
                                                                                <img
                                                                                     src="images/latest-project1.png"
                                                                                     alt="portfolio page images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* Latest Project end */}
                         {/* Now Your Turn start */}
                         <section
                              id="now-your-turn"
                              className="about portfolio"
                         >
                              <div className="overlay pt-120 pb-120">
                                   <div className="container">
                                        <div className="row">
                                             <div className="col-lg-12 d-flex justify-content-center">
                                                  <div className="top-area d-flex justify-content-center align-items-center text-center">
                                                       <h1>
                                                            Got a project? Let’s
                                                            Talk!
                                                       </h1>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="bottom-area wow fadeInUp">
                                   <div className="container">
                                        <div className="row">
                                             <div className="col-lg-3 col-md-6 col-sm-6">
                                                  <div className="single-item">
                                                       <span className="counter">
                                                            58
                                                       </span>
                                                       <h5>Happy Clients</h5>
                                                  </div>
                                             </div>
                                             <div className="col-lg-3 col-md-6 col-sm-6">
                                                  <div className="single-item second">
                                                       <span className="counter">
                                                            16
                                                       </span>
                                                       <h5>Years Experience</h5>
                                                  </div>
                                             </div>
                                             <div className="col-lg-3 col-md-6 col-sm-6">
                                                  <div className="single-item third">
                                                       <span className="counter">
                                                            30
                                                       </span>
                                                       <span>k</span>
                                                       <h5>Hours Worked</h5>
                                                  </div>
                                             </div>
                                             <div className="col-lg-3 col-md-6 col-sm-6">
                                                  <div className="single-item fourth">
                                                       <span className="counter">
                                                            5
                                                       </span>
                                                       <h5>Awards Won</h5>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* Now Your Turn end */}
                         {/* Testimonials start */}
                         <section id="testimonials" className="portfolio">
                              <div className="overlay pt-120 pb-120">
                                   <div className="container pt-120 wow fadeInUp">
                                        <div className="row justify-content-center">
                                             <div className="col-lg-6">
                                                  <div className="section-header text-center">
                                                       <h4 className="sub-title">
                                                            What people say
                                                       </h4>
                                                       <h3 className="title">
                                                            Trusted by brands
                                                            all over the world
                                                       </h3>
                                                       <p>
                                                            User-friendly web
                                                            pages are our thing.
                                                            I’ve also helped
                                                            some awesome
                                                            businesses with
                                                            branding and custom
                                                            solutions.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="testimonials-carousel">
                                             <div className="col">
                                                  <div className="row d-flex justify-content-between">
                                                       <div className="col-lg-5">
                                                            <div className="left-area">
                                                                 <img
                                                                      src="images/testimonials-user.png"
                                                                      alt="portfolio page images"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="col-lg-6 d-flex align-items-center">
                                                            <div className="text-area">
                                                                 <h3>
                                                                      Robert
                                                                      Wood has
                                                                      helped our
                                                                      business
                                                                      deliver
                                                                      incredible
                                                                      results,
                                                                      leading
                                                                      success
                                                                      for our UI
                                                                      &amp; UX
                                                                 </h3>
                                                                 <p>
                                                                      Lorem
                                                                      ipsum
                                                                      dolor sit
                                                                      amet,
                                                                      consectetur
                                                                      adipiscing
                                                                      elit. Sed
                                                                      semper,
                                                                      sapien sit
                                                                      amet
                                                                      scelerisque
                                                                      laoreet,
                                                                      eros justo
                                                                      congue
                                                                      neque, in
                                                                      maximus
                                                                      tellus
                                                                      velit
                                                                      vitae
                                                                      lacus.
                                                                 </p>
                                                                 <h4>
                                                                      Byron
                                                                      Burns{" "}
                                                                      <span>
                                                                           CEO
                                                                           @APPLE
                                                                      </span>
                                                                 </h4>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="row d-flex justify-content-between">
                                                       <div className="col-lg-5">
                                                            <div className="left-area">
                                                                 <img
                                                                      src="images/testimonials-user-2.png"
                                                                      alt="portfolio page images"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="col-lg-6 d-flex align-items-center">
                                                            <div className="text-area">
                                                                 <h3>
                                                                      Robert
                                                                      Wood has
                                                                      helped our
                                                                      business
                                                                      deliver
                                                                      incredible
                                                                      results,
                                                                      leading
                                                                      success
                                                                      for our UI
                                                                      &amp; UX
                                                                 </h3>
                                                                 <p>
                                                                      Lorem
                                                                      ipsum
                                                                      dolor sit
                                                                      amet,
                                                                      consectetur
                                                                      adipiscing
                                                                      elit. Sed
                                                                      semper,
                                                                      sapien sit
                                                                      amet
                                                                      scelerisque
                                                                      laoreet,
                                                                      eros justo
                                                                      congue
                                                                      neque, in
                                                                      maximus
                                                                      tellus
                                                                      velit
                                                                      vitae
                                                                      lacus.
                                                                 </p>
                                                                 <h4>
                                                                      Byron
                                                                      Burns{" "}
                                                                      <span>
                                                                           CEO
                                                                           @APPLE
                                                                      </span>
                                                                 </h4>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="row d-flex justify-content-between">
                                                       <div className="col-lg-5">
                                                            <div className="left-area">
                                                                 <img
                                                                      src="images/testimonials-user-3.png"
                                                                      alt="portfolio page images"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="col-lg-6 d-flex align-items-center">
                                                            <div className="text-area">
                                                                 <h3>
                                                                      Robert
                                                                      Wood has
                                                                      helped our
                                                                      business
                                                                      deliver
                                                                      incredible
                                                                      results,
                                                                      leading
                                                                      success
                                                                      for our UI
                                                                      &amp; UX
                                                                 </h3>
                                                                 <p>
                                                                      Lorem
                                                                      ipsum
                                                                      dolor sit
                                                                      amet,
                                                                      consectetur
                                                                      adipiscing
                                                                      elit. Sed
                                                                      semper,
                                                                      sapien sit
                                                                      amet
                                                                      scelerisque
                                                                      laoreet,
                                                                      eros justo
                                                                      congue
                                                                      neque, in
                                                                      maximus
                                                                      tellus
                                                                      velit
                                                                      vitae
                                                                      lacus.
                                                                 </p>
                                                                 <h4>
                                                                      Byron
                                                                      Burns{" "}
                                                                      <span>
                                                                           CEO
                                                                           @APPLE
                                                                      </span>
                                                                 </h4>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="row d-flex justify-content-between">
                                                       <div className="col-lg-5">
                                                            <div className="left-area">
                                                                 <img
                                                                      src="images/testimonials-user.png"
                                                                      alt="portfolio page images"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="col-lg-6 d-flex align-items-center">
                                                            <div className="text-area">
                                                                 <h3>
                                                                      Robert
                                                                      Wood has
                                                                      helped our
                                                                      business
                                                                      deliver
                                                                      incredible
                                                                      results,
                                                                      leading
                                                                      success
                                                                      for our UI
                                                                      &amp; UX
                                                                 </h3>
                                                                 <p>
                                                                      Lorem
                                                                      ipsum
                                                                      dolor sit
                                                                      amet,
                                                                      consectetur
                                                                      adipiscing
                                                                      elit. Sed
                                                                      semper,
                                                                      sapien sit
                                                                      amet
                                                                      scelerisque
                                                                      laoreet,
                                                                      eros justo
                                                                      congue
                                                                      neque, in
                                                                      maximus
                                                                      tellus
                                                                      velit
                                                                      vitae
                                                                      lacus.
                                                                 </p>
                                                                 <h4>
                                                                      Byron
                                                                      Burns{" "}
                                                                      <span>
                                                                           CEO
                                                                           @APPLE
                                                                      </span>
                                                                 </h4>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* Testimonials end */}
                         {/* faq start */}
                         <section id="faq-section">
                              <div className="overlay pt-120 pb-120">
                                   <div className="container wow fadeInUp">
                                        <div className="row justify-content-center text-center">
                                             <div className="col-lg-9">
                                                  <div className="section-header">
                                                       <h4 className="sub-title">
                                                            A few things
                                                       </h4>
                                                       <h3 className="title">
                                                            Clients Normally Ask
                                                            Me:
                                                       </h3>
                                                       <p>
                                                            If you haven’t found
                                                            an answer to your
                                                            question, contact us
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="row d-flex justify-content-center">
                                             <div className="col-lg-8">
                                                  <div id="accordion-one">
                                                       <div className="card">
                                                            <div
                                                                 className="card-header"
                                                                 id="headingOne"
                                                            >
                                                                 <h5 className="mb-0">
                                                                      <button
                                                                           className="btn btn-link"
                                                                           data-toggle="collapse"
                                                                           data-target="#collapseOne"
                                                                           aria-expanded="true"
                                                                           aria-controls="collapseOne"
                                                                      >
                                                                           What
                                                                           is
                                                                           your
                                                                           work
                                                                           dicipline?
                                                                      </button>
                                                                 </h5>
                                                            </div>
                                                            <div
                                                                 id="collapseOne"
                                                                 className="collapse show"
                                                                 aria-labelledby="headingOne"
                                                                 data-parent="#accordion-one"
                                                            >
                                                                 <div className="card-body">
                                                                      Lorem
                                                                      Ipsum is
                                                                      simply
                                                                      dummy text
                                                                      of the
                                                                      printing
                                                                      and
                                                                      typesetting
                                                                      industry.
                                                                      Lorem
                                                                      Ipsum has
                                                                      been the
                                                                      industry's
                                                                      standard
                                                                      dummy text
                                                                      ever since
                                                                      the 1500s,
                                                                      when an
                                                                      unknown
                                                                      printer
                                                                      took a
                                                                      galley of
                                                                      type and
                                                                      scrambled
                                                                      it to make
                                                                      a type
                                                                      specimen
                                                                      book.
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="card">
                                                            <div
                                                                 className="card-header"
                                                                 id="headingTwo"
                                                            >
                                                                 <h5 className="mb-0">
                                                                      <button
                                                                           className="btn btn-link collapsed"
                                                                           data-toggle="collapse"
                                                                           data-target="#collapseTwo"
                                                                           aria-expanded="false"
                                                                           aria-controls="collapseTwo"
                                                                      >
                                                                           What
                                                                           is
                                                                           your
                                                                           location
                                                                           &amp;
                                                                           timezone?
                                                                      </button>
                                                                 </h5>
                                                            </div>
                                                            <div
                                                                 id="collapseTwo"
                                                                 className="collapse"
                                                                 aria-labelledby="headingTwo"
                                                                 data-parent="#accordion-one"
                                                            >
                                                                 <div className="card-body">
                                                                      Lorem
                                                                      Ipsum is
                                                                      simply
                                                                      dummy text
                                                                      of the
                                                                      printing
                                                                      and
                                                                      typesetting
                                                                      industry.
                                                                      Lorem
                                                                      Ipsum has
                                                                      been the
                                                                      industry's
                                                                      standard
                                                                      dummy text
                                                                      ever since
                                                                      the 1500s,
                                                                      when an
                                                                      unknown
                                                                      printer
                                                                      took a
                                                                      galley of
                                                                      type and
                                                                      scrambled
                                                                      it to make
                                                                      a type
                                                                      specimen
                                                                      book.
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="card">
                                                            <div
                                                                 className="card-header"
                                                                 id="headingThree"
                                                            >
                                                                 <h5 className="mb-0">
                                                                      <button
                                                                           className="btn btn-link collapsed"
                                                                           data-toggle="collapse"
                                                                           data-target="#collapseThree"
                                                                           aria-expanded="false"
                                                                           aria-controls="collapseThree"
                                                                      >
                                                                           How
                                                                           often
                                                                           can
                                                                           we
                                                                           communicate?
                                                                      </button>
                                                                 </h5>
                                                            </div>
                                                            <div
                                                                 id="collapseThree"
                                                                 className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#accordion-one"
                                                            >
                                                                 <div className="card-body">
                                                                      Lorem
                                                                      Ipsum is
                                                                      simply
                                                                      dummy text
                                                                      of the
                                                                      printing
                                                                      and
                                                                      typesetting
                                                                      industry.
                                                                      Lorem
                                                                      Ipsum has
                                                                      been the
                                                                      industry's
                                                                      standard
                                                                      dummy text
                                                                      ever since
                                                                      the 1500s,
                                                                      when an
                                                                      unknown
                                                                      printer
                                                                      took a
                                                                      galley of
                                                                      type and
                                                                      scrambled
                                                                      it to make
                                                                      a type
                                                                      specimen
                                                                      book.
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="card">
                                                            <div
                                                                 className="card-header"
                                                                 id="headingFour"
                                                            >
                                                                 <h5 className="mb-0">
                                                                      <button
                                                                           className="btn btn-link collapsed"
                                                                           data-toggle="collapse"
                                                                           data-target="#collapseFour"
                                                                           aria-expanded="false"
                                                                           aria-controls="collapseFour"
                                                                      >
                                                                           What
                                                                           is
                                                                           your
                                                                           hourly
                                                                           rate?
                                                                      </button>
                                                                 </h5>
                                                            </div>
                                                            <div
                                                                 id="collapseFour"
                                                                 className="collapse"
                                                                 aria-labelledby="headingFour"
                                                                 data-parent="#accordion-one"
                                                            >
                                                                 <div className="card-body">
                                                                      Lorem
                                                                      Ipsum is
                                                                      simply
                                                                      dummy text
                                                                      of the
                                                                      printing
                                                                      and
                                                                      typesetting
                                                                      industry.
                                                                      Lorem
                                                                      Ipsum has
                                                                      been the
                                                                      industry's
                                                                      standard
                                                                      dummy text
                                                                      ever since
                                                                      the 1500s,
                                                                      when an
                                                                      unknown
                                                                      printer
                                                                      took a
                                                                      galley of
                                                                      type and
                                                                      scrambled
                                                                      it to make
                                                                      a type
                                                                      specimen
                                                                      book.
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* faq end */}
                    </div>
               </div>
          );
     }
}
