import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./../images/banner-circle1.png";
import pdfImg from "./../images/download-Icon.png";
import heroImage1 from "./../images/icon-1.png";
import heroImage2 from "./../images/icon-2.png";
import heroImage3 from "./../images/icon-3.png";
import heroImage4 from "./../images/icon-4.png";
import specilizingIcon1 from "./../images/specilizing-icon1.png";
import specilizingIcon2 from "./../images/specilizing-icon2.png";
import specilizingIcon3 from "./../images/specilizing-icon3.png";
import specilizingIcon4 from "./../images/specilizing-icon4.png";
import linkIn from "./../images/social-Icon7.png";
import Instagram from "./../images/social-Icon2.png";
import behance from "./../images/social-Icon3.png";
import MyImage from "./../images/now-your-turn-right1.png";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import WorkedWith from "../components/WorkedWith";
import Faq from "../components/Faq";
import LatestProject from "../components/LatestProject";

export default function Index() {
     return (
          <div>
               <div>
                    {/* banner-section start */}
                    <section id="banner-section">
                         <div className="banner-content d-flex align-items-center pb-120">
                              <div className="container">
                                   <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                             <div className="main-content">
                                                  <div className="item one wow fadeInDown">
                                                       <img
                                                            src={heroImage1}
                                                            alt="Home page images"
                                                       />
                                                       <h5>Front-End</h5>
                                                  </div>
                                                  <div className="item two wow fadeInDown">
                                                       <img
                                                            src={heroImage2}
                                                            alt="Homepage images"
                                                       />
                                                       <h5>Back End</h5>
                                                  </div>
                                                  <div className="item three wow fadeInDown">
                                                       <img
                                                            src={heroImage3}
                                                            alt="Home page images"
                                                       />
                                                       <h5>Hi there!</h5>
                                                  </div>
                                                  <div className="item four wow fadeInDown">
                                                       <img
                                                            src={heroImage4}
                                                            alt="Home page images"
                                                       />
                                                       <h5>Work with me</h5>
                                                  </div>
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-6">
                                                            <div className="right-area text-center">
                                                                 <img
                                                                      src={
                                                                           heroImage
                                                                      }
                                                                      className="right-img"
                                                                      alt="banner-circle"
                                                                 />
                                                                 <div className="download-area">
                                                                      <a
                                                                           target="_blank"
                                                                           href="https://drive.google.com/file/d/1RgNb-YWlzUf7qP6F-Jkf_-fVweq0saZb/view?usp=sharing"
                                                                           className="download"
                                                                           rel="noopener noreferrer"
                                                                      >
                                                                           Download
                                                                           CV
                                                                           <img
                                                                                src={
                                                                                     pdfImg
                                                                                }
                                                                                alt="Home page images"
                                                                           />
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="row justify-content-center">
                                        <div className="col-lg-7 d-flex align-items-center">
                                             <div className="text-area text-center">
                                                  <h5>HI THERE, I'M RASHEED</h5>

                                                  <h2>
                                                       A <span>FullStack</span>{" "}
                                                       Web Developer
                                                  </h2>
                                                  <div className="btn-area d-flex align-items-center justify-content-center">
                                                       <a
                                                            href="contact.html"
                                                            className="cmn-btn"
                                                       >
                                                            Contact Me
                                                       </a>

                                                       <Link
                                                            className="cmn-btn-second"
                                                            to="/portfolio"
                                                       >
                                                            View Project
                                                            <span className="btn-icon" />
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* banner-section end */}
                    {/* Specilizing In start */}
                    <section id="specilizing-section">
                         <div className="overlay pt-120 pb-120">
                              <div className="container wow fadeInUp">
                                   <div className="row justify-content-center text-center">
                                        <div className="col-lg-6">
                                             <div className="section-header">
                                                  <h4 className="sub-title">
                                                       What I Do
                                                  </h4>
                                                  <h3 className="title">
                                                       Specilizing In
                                                  </h3>
                                                  <p>
                                                       Sed tempus sapien in nisi
                                                       auctor lacinia. Donec
                                                       metus felis, ultricies
                                                       nec pharetra volutpat
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                             <div className="single-item">
                                                  <img
                                                       src={specilizingIcon1}
                                                       alt="Home page images"
                                                  />
                                                  <a href="/">
                                                       <h2>Design and UI/UX</h2>
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                             <div className="single-item">
                                                  <img
                                                       src={specilizingIcon2}
                                                       alt="Home page images"
                                                  />
                                                  <a href="/">
                                                       <h2>
                                                            Web design &amp;
                                                            development
                                                       </h2>
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                             <div className="single-item">
                                                  <img
                                                       src={specilizingIcon4}
                                                       alt="Home page images"
                                                  />
                                                  <a href="/">
                                                       <h2>Custom Solutions</h2>
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                             <div className="single-item">
                                                  <img
                                                       src={specilizingIcon3}
                                                       alt="Home page images"
                                                  />
                                                  <a href="/">
                                                       <h2>
                                                            Software Development
                                                       </h2>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Specilizing In end */}
                    {/* Latest Project start */}
                    <section id="latest-project">
                         <div className="overlay pt-120 pb-120">
                              <div className="container wow fadeInUp">
                                   <div className="row justify-content-center text-center">
                                        <div className="col-lg-6">
                                             <div className="section-header">
                                                  <h4 className="sub-title">
                                                       Portfolios
                                                  </h4>
                                                  <h3 className="title">
                                                       Latest Projects
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
                                   <LatestProject />
                                   <div className="row d-flex justify-content-center">
                                        <div className="col-lg-6 text-center">
                                             <div className="bottom-area">
                                                  <h2>
                                                       like what you see?{" "}
                                                       <span>follow me</span>{" "}
                                                       and discover more great
                                                       designs
                                                  </h2>
                                                  <div className="social d-flex justify-content-center">
                                                       <a
                                                            target="_blank"
                                                            href="http"
                                                            className="single-icon dribbble"
                                                            rel="noopener noreferrer"
                                                       >
                                                            <img
                                                                 src={linkIn}
                                                                 alt="social"
                                                            />
                                                       </a>
                                                       <a
                                                            href="http"
                                                            className="single-icon instagram"
                                                       >
                                                            <img
                                                                 src={Instagram}
                                                                 alt="social"
                                                            />
                                                       </a>
                                                       <a
                                                            href="http"
                                                            className="single-icon behance"
                                                       >
                                                            <img
                                                                 src={behance}
                                                                 alt="social"
                                                            />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Latest Project end */}
                    {/* Now Your Turn start */}
                    <section id="now-your-turn">
                         <div className="overlay pt-120 pb-120">
                              <div className="container wow fadeInUp">
                                   <div className="row">
                                        <div className="col-lg-7">
                                             <div className="section-header">
                                                  <h4 className="sub-title-alt">
                                                       Now Your Turn
                                                  </h4>
                                                  <h3 className="title">
                                                       Interested in Working
                                                       with Me?
                                                  </h3>
                                                  <p>
                                                       Do you need help with any
                                                       web design or development
                                                       project? Let me give you
                                                       a hand. Get in touch with
                                                       me and i will get back to
                                                       you within 1-2 business
                                                       days.
                                                  </p>

                                                  <Link
                                                       className="cmn-btn"
                                                       to="/contact"
                                                  >
                                                       Contact me
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="right-area">
                              <img src={MyImage} alt="Home page images" />
                         </div>
                         <Counter />
                    </section>
                    {/* Now Your Turn end */}
                    {/* Testimonials start */}
                    <Testimonials />
                    {/* Testimonials end */}
                    {/* Worked With start */}
                    <WorkedWith />
                    {/* Worked With end */}
                    {/* faq start */}
                    <Faq />
                    {/* faq end */}
               </div>
          </div>
     );
}
