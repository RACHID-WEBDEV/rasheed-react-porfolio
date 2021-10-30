import React from "react";
import { Link } from "react-router-dom";
import linkIn from "./../images/social-Icon7.png";
import Instagram from "./../images/social-Icon2.png";
import behance from "./../images/social-Icon3.png";
import Back from "./../images/back-icon.png";
import latestProject1 from "./../images/latest-project1.png";
import latestProject2 from "./../images/latest-project2.png";
import latestProject3 from "./../images/latest-project3.png";
import LatestProject from "../components/LatestProject";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

function Portfolio() {
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
                                                       <h3>Follow Me on</h3>
                                                       <div className="social d-flex">
                                                            <a
                                                                 href="#!"
                                                                 className="single-icon behance"
                                                            >
                                                                 <img
                                                                      src={
                                                                           behance
                                                                      }
                                                                      alt="social"
                                                                 />
                                                            </a>
                                                            <a
                                                                 href="#!"
                                                                 className="single-icon instagram"
                                                            >
                                                                 <img
                                                                      src={
                                                                           Instagram
                                                                      }
                                                                      alt="social"
                                                                 />
                                                            </a>
                                                            <a
                                                                 href="#!"
                                                                 className="single-icon dribbble"
                                                            >
                                                                 <img
                                                                      src={
                                                                           linkIn
                                                                      }
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
                                                  to="/"
                                             >
                                                  <span>
                                                       <img
                                                            src={Back}
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
                                                       User-friendly web pages
                                                       are our thing. I’ve also
                                                       helped some awesome
                                                       businesses with branding
                                                       and custom solutions.
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
                                                       <LatestProject />
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
                                                                                src={
                                                                                     latestProject3
                                                                                }
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
                                                                                src={
                                                                                     latestProject2
                                                                                }
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
                                                                                src={
                                                                                     latestProject1
                                                                                }
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
                    <section id="now-your-turn" className="about portfolio">
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
                              <Counter />
                         </div>
                    </section>
                    {/* Now Your Turn end */}
                    {/* Testimonials start */}
                    <section style={{ marginTop: "120px" }}>
                         <Testimonials />
                    </section>
                    {/* Testimonials end */}
                    {/* faq start */}
                    <Faq />
                    {/* faq end */}
               </div>
          </div>
     );
}

export default Portfolio;
