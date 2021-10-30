import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "./../images/email-icon.png";
import phoneIcon from "./../images/phone-icon.png";
import linkIn from "./../images/social-Icon7.png";
import Instagram from "./../images/social-Icon2.png";
import behance from "./../images/social-Icon3.png";
import dribbble from "./../images/social-Icon6.png";
import userIcon from "./../images/user-icon.png";
import emailIcon2 from "./../images/email-icon2.png";
import WorkedWith from "../components/WorkedWith";
import Faq from "../components/Faq";

function Contact() {
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
                                                                           to="/"
                                                                      >
                                                                           Home
                                                                      </Link>
                                                                 </li>
                                                                 <li
                                                                      className="breadcrumb-item active"
                                                                      aria-current="page"
                                                                 >
                                                                      Contact Me
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
                                                                 I’d love to
                                                                 meet up with
                                                                 you to discuss
                                                                 your venture,
                                                                 and potential
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
                                                                      src={
                                                                           emailIcon
                                                                      }
                                                                      alt="contact page images"
                                                                 />
                                                                 <span
                                                                      className="__cf_email__"
                                                                      data-cfemail="7d15181111123d0f121f180f0919180e141a13531e1210"
                                                                 >
                                                                      [email&nbsp;protected]
                                                                 </span>
                                                            </a>
                                                            <a href="tel:09070014685">
                                                                 <img
                                                                      src={
                                                                           phoneIcon
                                                                      }
                                                                      alt="contact page images"
                                                                 />
                                                                 +234-9070014685
                                                            </a>
                                                       </div>
                                                       <div className="social-area">
                                                            <h4>
                                                                 Follow Me on
                                                            </h4>
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
                                                                                dribbble
                                                                           }
                                                                           alt="social"
                                                                      />
                                                                 </a>
                                                                 <a
                                                                      href="#!"
                                                                      className="single-icon linkedin"
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
                                                                                     src={
                                                                                          userIcon
                                                                                     }
                                                                                     alt="contact page images"
                                                                                />
                                                                           </div>
                                                                           <div className="input-area">
                                                                                <input
                                                                                     type="text"
                                                                                     placeholder="Email Address"
                                                                                />
                                                                                <img
                                                                                     src={
                                                                                          emailIcon2
                                                                                     }
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
                    <WorkedWith />
                    {/* Worked With end */}
                    {/* faq start */}
                    <Faq />
                    {/* faq end */}
               </div>
          </div>
     );
}

export default Contact;
