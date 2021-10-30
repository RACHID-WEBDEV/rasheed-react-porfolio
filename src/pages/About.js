import React from "react";
import { Link } from "react-router-dom";

import AboutHeroImg from "./../images/story-user.png";
import AboutHeroImg1 from "./../images/story-object.png";
import AboutHeroImg2 from "./../images/story-right.png";
import linkIn from "./../images/social-Icon7.png";
import Instagram from "./../images/social-Icon2.png";
import behance from "./../images/social-Icon3.png";
import SkillIcon1 from "./../images/skills-icon1.png";
import SkillIcon2 from "./../images/skills-icon2.png";
import SkillIcon3 from "./../images/skills-icon3.png";
import SkillIcon4 from "./../images/skills-icon4.png";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

function About() {
     return (
          <div>
               <div>
                    {/* inner banner start */}
                    <section
                         id="banner-section"
                         className="inner-banner about cart"
                    >
                         <div className="banner-content d-flex align-items-center">
                              <div className="container">
                                   <div className="row d-flex justify-content-start">
                                        <div className="col-lg-12">
                                             <div className="text-area">
                                                  <h1>About</h1>
                                                  <div className="breadcrumb-area">
                                                       <nav aria-label="breadcrumb">
                                                            <ol className="breadcrumb d-flex">
                                                                 <li className="breadcrumb-item">
                                                                      <Link to="/">
                                                                           Home
                                                                      </Link>
                                                                 </li>
                                                                 <li
                                                                      className="breadcrumb-item active"
                                                                      aria-current="page"
                                                                 >
                                                                      About
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
                    {/* banner-section end */}
                    {/* My Story start */}
                    <section id="my-story-section">
                         <div className="overlay pt-120">
                              <div className="container">
                                   <div className="row d-flex justify-content-between wow fadeInUp">
                                        <div className="col-lg-5 col-md-6">
                                             <div className="left-area">
                                                  <h3 className="title">
                                                       My Story
                                                  </h3>
                                                  <p>
                                                       Hello, I am Adeyemo
                                                       Rasheed, a{" "}
                                                       <strong>
                                                            Software Developer
                                                       </strong>{" "}
                                                       with Experience in
                                                       Building Multiple Secure
                                                       Web Applications. over
                                                       the years I have achieved
                                                       numerous training courses
                                                       and a coding bootcamps
                                                       combine with my
                                                       creativity and personal
                                                       attitudes to the
                                                       Information Technologies.
                                                  </p>
                                                  <p>
                                                       I have great desire to
                                                       learn more Always
                                                       passionate about the
                                                       world of computer science
                                                       and the algorithmic
                                                       vision of the world.
                                                  </p>
                                                  <h1>
                                                       Simple But Significant
                                                  </h1>
                                                  <p>
                                                       I combine technical and
                                                       creative expertise with
                                                       experience to bring you
                                                       simply outstanding
                                                       website development
                                                       services.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                             <div className="right-area">
                                                  <img
                                                       src={AboutHeroImg1}
                                                       alt="object"
                                                       className="object"
                                                  />
                                                  <div className="main-img">
                                                       <div className="img-area">
                                                            <img
                                                                 src={
                                                                      AboutHeroImg2
                                                                 }
                                                                 alt="blog post images"
                                                            />
                                                       </div>
                                                  </div>
                                                  <img
                                                       src={AboutHeroImg}
                                                       alt="profile"
                                                       className="user"
                                                  />
                                             </div>
                                             <div className="social-area">
                                                  <div className="social d-flex">
                                                       <a
                                                            href="#!"
                                                            className="single-icon behance"
                                                       >
                                                            <img
                                                                 src={behance}
                                                                 alt="social"
                                                            />
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="single-icon instagram"
                                                       >
                                                            <img
                                                                 src={Instagram}
                                                                 alt="social"
                                                            />
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="single-icon dribbble"
                                                       >
                                                            <img
                                                                 src={linkIn}
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
                    {/* My Story end */}
                    {/* My Professional Skills start */}
                    <section id="professional-skills">
                         <div className="overlay pt-120">
                              <div className="container wow fadeInUp">
                                   <div className="row">
                                        <div className="col-lg-8 col-md-8 header-item">
                                             <div className="section-header">
                                                  <h4 className="title">
                                                       My Professional Skills
                                                  </h4>
                                                  <p>
                                                       Lorem ipsum dolor sit
                                                       amet, consectetur
                                                       adipiscing elit. Turpis
                                                       scelerisque purus eu quis
                                                       lacus, nibh pharetra.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="skills-item">
                                        <div className="row professional-carousel">
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area">
                                                            <img
                                                                 src={
                                                                      SkillIcon1
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>
                                                            Lead &amp; Strategy
                                                       </h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area second">
                                                            <img
                                                                 src={
                                                                      SkillIcon2
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>Innovative</h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area third">
                                                            <img
                                                                 src={
                                                                      SkillIcon3
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>Team Work</h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area fourth">
                                                            <img
                                                                 src={
                                                                      SkillIcon4
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>Goal oriented</h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area">
                                                            <img
                                                                 src={
                                                                      SkillIcon1
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>
                                                            Lead &amp; Strategy
                                                       </h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area second">
                                                            <img
                                                                 src={
                                                                      SkillIcon2
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>Innovative</h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area third">
                                                            <img
                                                                 src={
                                                                      SkillIcon3
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>Team Work</h3>
                                                  </div>
                                             </div>
                                             <div className="col">
                                                  <div className="single-item">
                                                       <div className="icon-area fourth">
                                                            <img
                                                                 src={
                                                                      SkillIcon4
                                                                 }
                                                                 alt="icon"
                                                            />
                                                       </div>
                                                       <h3>Goal oriented</h3>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* My Professional Skills end */}
                    {/* My Past Experience start */}
                    <section id="past-experience">
                         <div className="overlay pt-120 pb-120">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-lg-7">
                                             <div className="section-header">
                                                  <h4 className="title">
                                                       My Past Experience
                                                  </h4>
                                                  <p>
                                                       A Product Designer and
                                                       Visual Developer. I
                                                       specialize in UI/UX
                                                       Design, Responsive Web
                                                       Design, and Visual
                                                       Development.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-lg-5">
                                             <div className="scroll-line">
                                                  <div className="row">
                                                       <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                                            <div className="left-point" />
                                                       </div>
                                                       <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInLeft">
                                                            <div className="single-item">
                                                                 <h3>
                                                                      2020 -
                                                                      Ongoing
                                                                 </h3>
                                                                 <p>
                                                                      Product
                                                                      Designer
                                                                      <a href="#!">
                                                                           Uber
                                                                      </a>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                                            <div className="left-point" />
                                                       </div>
                                                       <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInRight">
                                                            <div className="single-item">
                                                                 <h3>
                                                                      2018 -
                                                                      2019
                                                                 </h3>
                                                                 <p>
                                                                      Product
                                                                      Designer
                                                                      At{" "}
                                                                      <a href="#!">
                                                                           Apple
                                                                      </a>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                                            <div className="left-point" />
                                                       </div>
                                                       <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInLeft">
                                                            <div className="single-item">
                                                                 <h3>
                                                                      2016 -
                                                                      2018
                                                                 </h3>
                                                                 <p>
                                                                      Lead
                                                                      Designer
                                                                      At
                                                                      <a href="!">
                                                                           Facebook
                                                                      </a>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                                            <div className="left-point" />
                                                       </div>
                                                       <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInRight">
                                                            <div className="single-item">
                                                                 <h3>
                                                                      2012 -
                                                                      2016
                                                                 </h3>
                                                                 <p>
                                                                      Bachelor
                                                                      Of Design
                                                                      At
                                                                      <a href="#!">
                                                                           Design
                                                                           University
                                                                      </a>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* My Past Experience end */}
                    {/* Now Your Turn start */}
                    <section id="now-your-turn" className="about">
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
                         <Counter />
                    </section>
                    {/* Now Your Turn end */}
                    {/* Testimonials start */}

                    <div style={{ marginTop: "120px" }}>
                         <Testimonials />
                    </div>

                    {/* Testimonials end */}
                    {/* faq start */}
                    <Faq />
                    {/* faq end */}
               </div>
          </div>
     );
}

export default About;
