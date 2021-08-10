import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
     render() {
          return (
               <div>
                    <div>
                         {/* inner banner start */}
                         <section
                              id="banner-section"
                              className="inner-banner cart contact"
                         >
                              <div className="banner-content d-flex align-items-center">
                                   <div className="container">
                                        <div className="row d-flex justify-content-start">
                                             <div className="col-lg-12">
                                                  <div className="text-area pb-120">
                                                       <h1>Contact Me</h1>
                                                       <div className="breadcrumb-area">
                                                            <nav aria-label="breadcrumb">
                                                                 <ol className="breadcrumb d-flex">
                                                                      <li className="breadcrumb-item">
                                                                           <Link
                                                                                className="active"
                                                                                exact
                                                                                to="/"
                                                                           >
                                                                                Home
                                                                           </Link>
                                                                      </li>
                                                                      <li
                                                                           className="breadcrumb-item active"
                                                                           aria-current="page"
                                                                      >
                                                                           Contact
                                                                           Me
                                                                      </li>
                                                                 </ol>
                                                            </nav>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* inner section end */}
                         {/* Contact me start */}
                         <section id="contact-me" className="pb-120">
                              <div className="container">
                                   <div className="contact-info-area wow fadeInUp">
                                        <div className="row pr-15 pl-15">
                                             <div className="col-lg-12 contact-bg">
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-6">
                                                            <div className="section-header text-center pt-120">
                                                                 <h4 className="sub-title">
                                                                      Say hello
                                                                 </h4>
                                                                 <h3 className="title">
                                                                      Let's Work
                                                                      Together
                                                                 </h3>
                                                                 <p>
                                                                      I’d love
                                                                      to meet up
                                                                      with you
                                                                      to discuss
                                                                      your
                                                                      venture,
                                                                      and
                                                                      potential
                                                                      collaborations.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-lg-4 offset-1">
                                                            <div className="contact-info">
                                                                 <a href="mailto:rasheedolamide2015@gmail.com">
                                                                      <img
                                                                           src="images/email-icon.png"
                                                                           alt="contact page images"
                                                                      />
                                                                      <span
                                                                           className="__cf_email__"
                                                                           data-cfemail="7d15181111123d0f121f180f0919180e141a13531e1210"
                                                                      >
                                                                           [email&nbsp;protected]
                                                                      </span>
                                                                 </a>
                                                                 <a href="tel:61042232211">
                                                                      <img
                                                                           src="images/phone-icon.png"
                                                                           alt="contact page images"
                                                                      />
                                                                      +234-9070014685
                                                                 </a>
                                                            </div>
                                                            <div className="social-area">
                                                                 <h4>
                                                                      Follow Me
                                                                      on
                                                                 </h4>
                                                                 <div className="social d-flex">
                                                                      <a
                                                                           href="#"
                                                                           className="single-icon behance"
                                                                      >
                                                                           <img
                                                                                src="images/social-Icon4.png"
                                                                                alt="social"
                                                                           />
                                                                      </a>
                                                                      <a
                                                                           href="#"
                                                                           className="single-icon instagram"
                                                                      >
                                                                           <img
                                                                                src="images/social-Icon5.png"
                                                                                alt="social"
                                                                           />
                                                                      </a>
                                                                      <a
                                                                           href="#"
                                                                           className="single-icon dribbble"
                                                                      >
                                                                           <img
                                                                                src="images/social-Icon6.png"
                                                                                alt="social"
                                                                           />
                                                                      </a>
                                                                      <a
                                                                           href="#"
                                                                           className="single-icon linkedin"
                                                                      >
                                                                           <img
                                                                                src="images/social-Icon7.png"
                                                                                alt="social"
                                                                           />
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="col-lg-7 pr-0">
                                                            <div className="row">
                                                                 <div className="col-lg-10">
                                                                      <div className="contact-area">
                                                                           <div className="contact-header text-center">
                                                                                <p>
                                                                                     Fill
                                                                                     in
                                                                                     the
                                                                                     form
                                                                                     or{" "}
                                                                                     <u>
                                                                                          Send
                                                                                          me
                                                                                          an
                                                                                          email
                                                                                     </u>
                                                                                </p>
                                                                           </div>
                                                                           <form
                                                                                action="#"
                                                                                className="form-area text-center"
                                                                           >
                                                                                <div className="input-area">
                                                                                     <input
                                                                                          type="text"
                                                                                          placeholder="Full Name"
                                                                                     />
                                                                                     <img
                                                                                          src="images/user-icon.png"
                                                                                          alt="contact page images"
                                                                                     />
                                                                                </div>
                                                                                <div className="input-area">
                                                                                     <input
                                                                                          type="text"
                                                                                          placeholder="Email Address"
                                                                                     />
                                                                                     <img
                                                                                          src="images/email-icon2.png"
                                                                                          alt="contact page images"
                                                                                     />
                                                                                </div>
                                                                                <div className="input-area select">
                                                                                     <select>
                                                                                          <option>
                                                                                               Project
                                                                                               Type
                                                                                          </option>
                                                                                          <option
                                                                                               value={
                                                                                                    1
                                                                                               }
                                                                                          >
                                                                                               Mobile
                                                                                               App
                                                                                          </option>
                                                                                          <option
                                                                                               value={
                                                                                                    2
                                                                                               }
                                                                                          >
                                                                                               Branding
                                                                                          </option>
                                                                                          <option
                                                                                               value={
                                                                                                    3
                                                                                               }
                                                                                          >
                                                                                               Website
                                                                                          </option>
                                                                                     </select>
                                                                                </div>
                                                                                <div className="input-area select">
                                                                                     <select>
                                                                                          <option>
                                                                                               Choose
                                                                                               A
                                                                                               Budget
                                                                                          </option>
                                                                                          <option
                                                                                               value={
                                                                                                    1
                                                                                               }
                                                                                          >
                                                                                               $1,000
                                                                                               -
                                                                                               $3,000
                                                                                          </option>
                                                                                          <option
                                                                                               value={
                                                                                                    2
                                                                                               }
                                                                                          >
                                                                                               $3,000
                                                                                               -
                                                                                               $5,000
                                                                                          </option>
                                                                                          <option
                                                                                               value={
                                                                                                    3
                                                                                               }
                                                                                          >
                                                                                               $5,000+
                                                                                          </option>
                                                                                     </select>
                                                                                </div>
                                                                                <div className="textarea-area">
                                                                                     <textarea
                                                                                          cols={
                                                                                               30
                                                                                          }
                                                                                          rows={
                                                                                               6
                                                                                          }
                                                                                          placeholder="How Can I Help You?"
                                                                                          defaultValue={
                                                                                               ""
                                                                                          }
                                                                                     />
                                                                                </div>
                                                                                <button
                                                                                     type="submit"
                                                                                     className="cmn-btn"
                                                                                >
                                                                                     {" "}
                                                                                     Let's
                                                                                     Work
                                                                                     Together
                                                                                     send
                                                                                     Your
                                                                                     message
                                                                                </button>
                                                                                {/* <a
                                                                                     href="contact.html"
                                                                                   
                                                                                >
                                                                                    
                                                                                </a> */}
                                                                           </form>
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
                         {/* Contact me end */}
                         {/* Worked With start */}
                         <section id="worked-with">
                              <div className="container wow fadeInUp">
                                   <div className="main-content">
                                        <h2>I Worked With</h2>
                                        <div className="worked-carousel">
                                             <div className="single-item">
                                                  <img
                                                       src="images/brand-1.png"
                                                       alt="contact page images"
                                                  />
                                             </div>
                                             <div className="single-item">
                                                  <img
                                                       src="images/brand-2.png"
                                                       alt="contact page images"
                                                  />
                                             </div>
                                             <div className="single-item">
                                                  <img
                                                       src="images/brand-3.png"
                                                       alt="contact page images"
                                                  />
                                             </div>
                                             <div className="single-item">
                                                  <img
                                                       src="images/brand-4.png"
                                                       alt="contact page images"
                                                  />
                                             </div>
                                             <div className="single-item">
                                                  <img
                                                       src="images/brand-2.png"
                                                       alt="contact page images"
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
                                        <div className="row d-flex justify-content-center wow fadeInUp">
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
