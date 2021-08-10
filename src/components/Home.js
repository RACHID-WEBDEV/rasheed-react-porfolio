import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
     render() {
          return (
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
                                                            src="images/icon-1.png"
                                                            alt="Home page images"
                                                       />
                                                       <h5>Front-End</h5>
                                                  </div>
                                                  <div className="item two wow fadeInDown">
                                                       <img
                                                            src="images/icon-2.png"
                                                            alt="Home page images"
                                                       />
                                                       <h5>Back End</h5>
                                                  </div>
                                                  <div className="item three wow fadeInDown">
                                                       <img
                                                            src="images/icon-3.png"
                                                            alt="Home page images"
                                                       />
                                                       <h5>Hi there!</h5>
                                                  </div>
                                                  <div className="item four wow fadeInDown">
                                                       <img
                                                            src="images/icon-4.png"
                                                            alt="Home page images"
                                                       />
                                                       <h5>Work with me</h5>
                                                  </div>
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-6">
                                                            <div className="right-area text-center">
                                                                 <img
                                                                      src="images/banner-circle1.png"
                                                                      className="right-img"
                                                                      alt="banner-circle"
                                                                 />
                                                                 <div className="download-area">
                                                                      <a
                                                                           target="_blank"
                                                                           href="https://drive.google.com/file/d/1RgNb-YWlzUf7qP6F-Jkf_-fVweq0saZb/view?usp=sharing"
                                                                           className="download"
                                                                      >
                                                                           Download
                                                                           CV
                                                                           <img
                                                                                src="images/download-Icon.png"
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
                                                       src="images/specilizing-icon1.png"
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
                                                       src="images/specilizing-icon2.png"
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
                                                       src="images/specilizing-icon4.png"
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
                                                       src="images/specilizing-icon3.png"
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
                                   <div className="single-item">
                                        <div className="row d-flex justify-content-between">
                                             <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                  <div className="text-area">
                                                       <h5>Product Design</h5>
                                                       <a href="/">
                                                            <h2>
                                                                 Mobile App
                                                                 Redesign
                                                            </h2>
                                                       </a>
                                                       <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                            Viverra sed iaculis
                                                            ornare duis.
                                                       </p>
                                                       <a
                                                            href="/"
                                                            className="cmn-btn-second"
                                                       >
                                                            View Case Study
                                                            <span className="btn-icon" />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                  <div className="right-area">
                                                       <img
                                                            src="images/latest-project1.png"
                                                            alt="Home page images"
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
                                                            alt="Home page images"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                  <div className="text-area">
                                                       <h5 className="mid">
                                                            UI/UX Design
                                                       </h5>
                                                       <a href="/">
                                                            <h2>
                                                                 Mobile App
                                                                 Design
                                                            </h2>
                                                       </a>
                                                       <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                            Viverra sed iaculis
                                                            ornare duis.
                                                       </p>
                                                       <a
                                                            href="/"
                                                            className="cmn-btn-second"
                                                       >
                                                            View Case Study
                                                            <span className="btn-icon" />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="single-item">
                                        <div className="row d-flex justify-content-between">
                                             <div className="col-lg-5 col-md-5 d-flex align-items-center">
                                                  <div className="text-area">
                                                       <h5 className="last">
                                                            Web Design
                                                       </h5>
                                                       <a href="/">
                                                            <h2>
                                                                 Website Design
                                                            </h2>
                                                       </a>
                                                       <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                            Viverra sed iaculis
                                                            ornare duis.
                                                       </p>
                                                       <a
                                                            href="/"
                                                            className="cmn-btn-second"
                                                       >
                                                            View Case Study
                                                            <span className="btn-icon" />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-lg-7 col-md-7 d-flex align-items-center">
                                                  <div className="right-area">
                                                       <img
                                                            src="images/latest-project3.png"
                                                            alt="Home page images"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
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
                                                            href="#"
                                                            className="single-icon dribbble"
                                                       >
                                                            <img
                                                                 src="images/social-Icon7.png"
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
                                                            className="single-icon behance"
                                                       >
                                                            <img
                                                                 src="images/social-Icon3.png"
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
                              <img
                                   src="images/now-your-turn-right1.png"
                                   alt="Home page images"
                              />
                         </div>
                         <div className="bottom-area">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                             <div className="single-item">
                                                  <span className="counter">
                                                       18
                                                  </span>
                                                  <h5>Happy Clients</h5>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                             <div className="single-item second">
                                                  <span className="counter">
                                                       3
                                                  </span>
                                                  <h5>Years Experience</h5>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                             <div className="single-item third">
                                                  <span className="counter">
                                                       10
                                                  </span>
                                                  <span>k</span>
                                                  <h5>Hours Worked</h5>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                             <div className="single-item fourth">
                                                  <span className="counter">
                                                       3
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
                    <section id="testimonials">
                         <div className="overlay pt-120 pb-120">
                              <div className="container wow fadeInUp">
                                   <div className="row justify-content-center">
                                        <div className="col-lg-6">
                                             <div className="section-header text-center">
                                                  <h4 className="sub-title">
                                                       What people say
                                                  </h4>
                                                  <h3 className="title">
                                                       Trusted by brands all
                                                       over the world
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
                                   <div className="testimonials-carousel">
                                        <div className="col">
                                             <div className="row d-flex justify-content-between">
                                                  <div className="col-lg-5">
                                                       <div className="left-area">
                                                            <img
                                                                 src="images/testimonials-user.png"
                                                                 alt="Home page images"
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6 d-flex align-items-center">
                                                       <div className="text-area">
                                                            <h3>
                                                                 Robert Wood has
                                                                 helped our
                                                                 business
                                                                 deliver
                                                                 incredible
                                                                 results,
                                                                 leading success
                                                                 for our UI
                                                                 &amp; UX
                                                            </h3>
                                                            <p>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit. Sed
                                                                 semper, sapien
                                                                 sit amet
                                                                 scelerisque
                                                                 laoreet, eros
                                                                 justo congue
                                                                 neque, in
                                                                 maximus tellus
                                                                 velit vitae
                                                                 lacus.
                                                            </p>
                                                            <h4>
                                                                 Byron Burns{" "}
                                                                 <span>
                                                                      CEO @APPLE
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
                                                                 alt="Home page images"
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6 d-flex align-items-center">
                                                       <div className="text-area">
                                                            <h3>
                                                                 Robert Wood has
                                                                 helped our
                                                                 business
                                                                 deliver
                                                                 incredible
                                                                 results,
                                                                 leading success
                                                                 for our UI
                                                                 &amp; UX
                                                            </h3>
                                                            <p>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit. Sed
                                                                 semper, sapien
                                                                 sit amet
                                                                 scelerisque
                                                                 laoreet, eros
                                                                 justo congue
                                                                 neque, in
                                                                 maximus tellus
                                                                 velit vitae
                                                                 lacus.
                                                            </p>
                                                            <h4>
                                                                 Byron Burns{" "}
                                                                 <span>
                                                                      CEO @APPLE
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
                                                                 alt="Home page images"
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6 d-flex align-items-center">
                                                       <div className="text-area">
                                                            <h3>
                                                                 Robert Wood has
                                                                 helped our
                                                                 business
                                                                 deliver
                                                                 incredible
                                                                 results,
                                                                 leading success
                                                                 for our UI
                                                                 &amp; UX
                                                            </h3>
                                                            <p>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit. Sed
                                                                 semper, sapien
                                                                 sit amet
                                                                 scelerisque
                                                                 laoreet, eros
                                                                 justo congue
                                                                 neque, in
                                                                 maximus tellus
                                                                 velit vitae
                                                                 lacus.
                                                            </p>
                                                            <h4>
                                                                 Byron Burns{" "}
                                                                 <span>
                                                                      CEO @APPLE
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
                                                                 alt="Home page images"
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6 d-flex align-items-center">
                                                       <div className="text-area">
                                                            <h3>
                                                                 Robert Wood has
                                                                 helped our
                                                                 business
                                                                 deliver
                                                                 incredible
                                                                 results,
                                                                 leading success
                                                                 for our UI
                                                                 &amp; UX
                                                            </h3>
                                                            <p>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit. Sed
                                                                 semper, sapien
                                                                 sit amet
                                                                 scelerisque
                                                                 laoreet, eros
                                                                 justo congue
                                                                 neque, in
                                                                 maximus tellus
                                                                 velit vitae
                                                                 lacus.
                                                            </p>
                                                            <h4>
                                                                 Byron Burns{" "}
                                                                 <span>
                                                                      CEO @APPLE
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
                    {/* Worked With start */}
                    <section id="worked-with">
                         <div className="container">
                              <div className="main-content wow fadeInUp">
                                   <h2>I Worked With</h2>
                                   <div className="worked-carousel">
                                        <div className="single-item">
                                             <img
                                                  src="images/brand-1.png"
                                                  alt="Home page images"
                                             />
                                        </div>
                                        <div className="single-item">
                                             <img
                                                  src="images/brand-2.png"
                                                  alt="Home page images"
                                             />
                                        </div>
                                        <div className="single-item">
                                             <img
                                                  src="images/brand-3.png"
                                                  alt="Home page images"
                                             />
                                        </div>
                                        <div className="single-item">
                                             <img
                                                  src="images/brand-4.png"
                                                  alt="Home page images"
                                             />
                                        </div>
                                        <div className="single-item">
                                             <img
                                                  src="images/brand-2.png"
                                                  alt="Home page images"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Worked With end */}
                    {/* faq start */}
                    <section id="faq-section">
                         <div className="overlay pt-120 pb-120">
                              <div className="container">
                                   <div className="row justify-content-center text-center">
                                        <div className="col-lg-9">
                                             <div className="section-header">
                                                  <h4 className="sub-title">
                                                       A few things
                                                  </h4>
                                                  <h3 className="title">
                                                       Clients Normally Ask Me:
                                                  </h3>
                                                  <p>
                                                       If you haven’t found an
                                                       answer to your question,
                                                       contact us
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="row d-flex justify-content-center">
                                        <div className="col-lg-8 wow fadeInUp">
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
                                                                      What is
                                                                      your work
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
                                                                 Lorem Ipsum is
                                                                 simply dummy
                                                                 text of the
                                                                 printing and
                                                                 typesetting
                                                                 industry. Lorem
                                                                 Ipsum has been
                                                                 the industry's
                                                                 standard dummy
                                                                 text ever since
                                                                 the 1500s, when
                                                                 an unknown
                                                                 printer took a
                                                                 galley of type
                                                                 and scrambled
                                                                 it to make a
                                                                 type specimen
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
                                                                      What is
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
                                                                 Lorem Ipsum is
                                                                 simply dummy
                                                                 text of the
                                                                 printing and
                                                                 typesetting
                                                                 industry. Lorem
                                                                 Ipsum has been
                                                                 the industry's
                                                                 standard dummy
                                                                 text ever since
                                                                 the 1500s, when
                                                                 an unknown
                                                                 printer took a
                                                                 galley of type
                                                                 and scrambled
                                                                 it to make a
                                                                 type specimen
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
                                                                      How often
                                                                      can we
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
                                                                 Lorem Ipsum is
                                                                 simply dummy
                                                                 text of the
                                                                 printing and
                                                                 typesetting
                                                                 industry. Lorem
                                                                 Ipsum has been
                                                                 the industry's
                                                                 standard dummy
                                                                 text ever since
                                                                 the 1500s, when
                                                                 an unknown
                                                                 printer took a
                                                                 galley of type
                                                                 and scrambled
                                                                 it to make a
                                                                 type specimen
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
                                                                      What is
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
                                                                 Lorem Ipsum is
                                                                 simply dummy
                                                                 text of the
                                                                 printing and
                                                                 typesetting
                                                                 industry. Lorem
                                                                 Ipsum has been
                                                                 the industry's
                                                                 standard dummy
                                                                 text ever since
                                                                 the 1500s, when
                                                                 an unknown
                                                                 printer took a
                                                                 galley of type
                                                                 and scrambled
                                                                 it to make a
                                                                 type specimen
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
          );
     }
}
