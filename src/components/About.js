import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
     render() {
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
                                                                           <Link
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
                                                                 Software
                                                                 Developer
                                                            </strong>{" "}
                                                            with Experience in
                                                            Building Multiple
                                                            Secure Web
                                                            Applications. over
                                                            the years I have
                                                            achieved numerous
                                                            training courses and
                                                            a coding bootcamps
                                                            combine with my
                                                            creativity and
                                                            personal attitudes
                                                            to the Information
                                                            Technologies.
                                                       </p>
                                                       <p>
                                                            I have great desire
                                                            to learn more Always
                                                            passionate about the
                                                            world of computer
                                                            science and the
                                                            algorithmic vision
                                                            of the world.
                                                       </p>
                                                       <h1>
                                                            Simple But
                                                            Significant
                                                       </h1>
                                                       <p>
                                                            I combine technical
                                                            and creative
                                                            expertise with
                                                            experience to bring
                                                            you simply
                                                            outstanding website
                                                            development
                                                            services.
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="col-lg-6 col-md-6">
                                                  <div className="right-area">
                                                       <img
                                                            src="images/story-object.png"
                                                            alt="object"
                                                            className="object"
                                                       />
                                                       <div className="main-img">
                                                            <div className="img-area">
                                                                 <img
                                                                      src="images/story-right.png"
                                                                      alt="blog post images"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <img
                                                            src="images/story-user.png"
                                                            alt="profile"
                                                            className="user"
                                                       />
                                                  </div>
                                                  <div className="social-area">
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
                                                            My Professional
                                                            Skills
                                                       </h4>
                                                       <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                            Turpis scelerisque
                                                            purus eu quis lacus,
                                                            nibh pharetra.
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
                                                                      src="images/skills-icon1.png"
                                                                      alt="icon"
                                                                 />
                                                            </div>
                                                            <h3>
                                                                 Lead &amp;
                                                                 Strategy
                                                            </h3>
                                                       </div>
                                                  </div>
                                                  <div className="col">
                                                       <div className="single-item">
                                                            <div className="icon-area second">
                                                                 <img
                                                                      src="images/skills-icon2.png"
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
                                                                      src="images/skills-icon3.png"
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
                                                                      src="images/skills-icon4.png"
                                                                      alt="icon"
                                                                 />
                                                            </div>
                                                            <h3>
                                                                 Goal oriented
                                                            </h3>
                                                       </div>
                                                  </div>
                                                  <div className="col">
                                                       <div className="single-item">
                                                            <div className="icon-area">
                                                                 <img
                                                                      src="images/skills-icon1.png"
                                                                      alt="icon"
                                                                 />
                                                            </div>
                                                            <h3>
                                                                 Lead &amp;
                                                                 Strategy
                                                            </h3>
                                                       </div>
                                                  </div>
                                                  <div className="col">
                                                       <div className="single-item">
                                                            <div className="icon-area second">
                                                                 <img
                                                                      src="images/skills-icon2.png"
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
                                                                      src="images/skills-icon3.png"
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
                                                                      src="images/skills-icon4.png"
                                                                      alt="icon"
                                                                 />
                                                            </div>
                                                            <h3>
                                                                 Goal oriented
                                                            </h3>
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
                                                            A Product Designer
                                                            and Visual
                                                            Developer. I
                                                            specialize in UI/UX
                                                            Design, Responsive
                                                            Web Design, and
                                                            Visual Development.
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
                                                                           2020
                                                                           -
                                                                           Ongoing
                                                                      </h3>
                                                                      <p>
                                                                           Product
                                                                           Designer{" "}
                                                                           <a href="#">
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
                                                                           2018
                                                                           -
                                                                           2019
                                                                      </h3>
                                                                      <p>
                                                                           Product
                                                                           Designer
                                                                           At{" "}
                                                                           <a href="#">
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
                                                                           2016
                                                                           -
                                                                           2018
                                                                      </h3>
                                                                      <p>
                                                                           Lead
                                                                           Designer
                                                                           At{" "}
                                                                           <a href="#">
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
                                                                           2012
                                                                           -
                                                                           2016
                                                                      </h3>
                                                                      <p>
                                                                           Bachelor
                                                                           Of
                                                                           Design
                                                                           At{" "}
                                                                           <a href="#">
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
                              <div className="bottom-area">
                                   <div className="container">
                                        <div className="row wow fadeInUp">
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
                         <section id="testimonials" className="about">
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
                                                                      alt="blog post images"
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
                                                                      alt="blog post images"
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
                                                                      alt="blog post images"
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
                                                                      alt="blog post images"
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
