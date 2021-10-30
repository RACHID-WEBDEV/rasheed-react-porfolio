import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
     render() {
          return (
               <div>
                    <div>
                         {/* inner banner start */}
                         <section
                              id="banner-section"
                              className="inner-banner blog cart"
                         >
                              <div className="banner-content d-flex align-items-center">
                                   <div className="container">
                                        <div className="row d-flex justify-content-start">
                                             <div className="col-lg-12">
                                                  <div className="text-area">
                                                       <h1>My Articles</h1>
                                                       <div className="breadcrumb-area">
                                                            <nav aria-label="breadcrumb">
                                                                 <ol className="breadcrumb d-flex">
                                                                      <li className="breadcrumb-item">
                                                                           <Link to="/">
                                                                                Home
                                                                           </Link>
                                                                      </li>
                                                                      <li className="breadcrumb-item">
                                                                           <Link to="/">
                                                                                Pages
                                                                           </Link>
                                                                      </li>
                                                                      <li
                                                                           className="breadcrumb-item active"
                                                                           aria-current="page"
                                                                      >
                                                                           Blog
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
                         {/* blog content start */}
                         <section id="blog-content" className="pb-120">
                              <div className="container">
                                   <div className="top-area">
                                        <div className="row d-flex justify-content-center">
                                             <div className="col-lg-12">
                                                  <div className="nav-top-area wow fadeInUp">
                                                       <ul
                                                            className="nav nav-tabs d-flex justify-content-between"
                                                            id="myTab"
                                                            role="tablist"
                                                       >
                                                            <li className="nav-item">
                                                                 <a
                                                                      className="nav-link posts active"
                                                                      id="all_posts-tab"
                                                                      data-toggle="tab"
                                                                      href="#all_posts"
                                                                      role="tab"
                                                                      aria-controls="all_posts"
                                                                      aria-selected="true"
                                                                 >
                                                                      <img
                                                                           src="images/all-post.png"
                                                                           alt="icon"
                                                                      />
                                                                      All Posts
                                                                 </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                 <a
                                                                      className="nav-link design"
                                                                      id="design-tab"
                                                                      data-toggle="tab"
                                                                      href="#design"
                                                                      role="tab"
                                                                      aria-controls="design"
                                                                      aria-selected="false"
                                                                 >
                                                                      <img
                                                                           src="images/design-icon-2.png"
                                                                           alt="icon"
                                                                      />
                                                                      Design
                                                                 </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                 <a
                                                                      className="nav-link marketing"
                                                                      id="marketing-tab"
                                                                      data-toggle="tab"
                                                                      href="#marketing"
                                                                      role="tab"
                                                                      aria-controls="marketing"
                                                                      aria-selected="false"
                                                                 >
                                                                      <img
                                                                           src="images/marketing.png"
                                                                           alt="icon"
                                                                      />
                                                                      Marketing
                                                                 </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                 <a
                                                                      className="nav-link development"
                                                                      id="development-tab"
                                                                      data-toggle="tab"
                                                                      href="#development"
                                                                      role="tab"
                                                                      aria-controls="development"
                                                                      aria-selected="false"
                                                                 >
                                                                      <img
                                                                           src="images/development-icon-2.png"
                                                                           alt="icon"
                                                                      />
                                                                      Development
                                                                 </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                 <a
                                                                      className="nav-link tutorial"
                                                                      id="tutorial-tab"
                                                                      data-toggle="tab"
                                                                      href="#tutorial"
                                                                      role="tab"
                                                                      aria-controls="tutorial"
                                                                      aria-selected="false"
                                                                 >
                                                                      <img
                                                                           src="images/tutorial-icon.png"
                                                                           alt="icon"
                                                                      />
                                                                      Tutorial
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-lg-8">
                                             <div
                                                  className="tab-content"
                                                  id="myTabContent"
                                             >
                                                  <div
                                                       className="tab-pane fade show active"
                                                       id="all_posts"
                                                       role="tabpanel"
                                                       aria-labelledby="all_posts-tab"
                                                  >
                                                       <div className="row d-flex justify-content-center">
                                                            <div className="col-lg-12 col-sm-9">
                                                                 <div className="single-item flex-item mb-30">
                                                                      <div className="image-area">
                                                                           <span>
                                                                                New
                                                                           </span>
                                                                           <img
                                                                                src="images/blog-img1.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/design-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Design
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     do
                                                                                     you
                                                                                     use
                                                                                     time
                                                                                     tracking
                                                                                     for
                                                                                     projects?
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img2.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/marketing-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Marketing
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     do
                                                                                     you
                                                                                     use
                                                                                     time
                                                                                     tracking
                                                                                     for
                                                                                     projects?
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img3.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/tutorials-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Tutorials
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     do
                                                                                     you
                                                                                     use
                                                                                     time
                                                                                     tracking
                                                                                     for
                                                                                     projects?
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img4.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/design-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Design
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     Limitless
                                                                                     Myths
                                                                                     About
                                                                                     Web
                                                                                     Design
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img5.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/development-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Development
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     Challenges
                                                                                     Faced
                                                                                     By
                                                                                     Android
                                                                                     App
                                                                                     Dev.
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img6.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/design-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Design
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     Principles
                                                                                     of
                                                                                     Effective
                                                                                     Web
                                                                                     Design
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img7.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/development-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Development
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     To
                                                                                     Hire
                                                                                     Mobile
                                                                                     Apps
                                                                                     Developers
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div
                                                       className="tab-pane fade"
                                                       id="design"
                                                       role="tabpanel"
                                                       aria-labelledby="design-tab"
                                                  >
                                                       <div className="row d-flex justify-content-center">
                                                            <div className="col-lg-12 col-sm-9">
                                                                 <div className="single-item flex-item mb-30">
                                                                      <div className="image-area">
                                                                           <span>
                                                                                New
                                                                           </span>
                                                                           <img
                                                                                src="images/blog-img1.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/design-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Design
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     do
                                                                                     you
                                                                                     use
                                                                                     time
                                                                                     tracking
                                                                                     for
                                                                                     projects?
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img4.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/design-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Design
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     Limitless
                                                                                     Myths
                                                                                     About
                                                                                     Web
                                                                                     Design
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img6.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/design-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Design
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     Principles
                                                                                     of
                                                                                     Effective
                                                                                     Web
                                                                                     Design
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div
                                                       className="tab-pane fade"
                                                       id="marketing"
                                                       role="tabpanel"
                                                       aria-labelledby="marketing-tab"
                                                  >
                                                       <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img2.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/marketing-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Marketing
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     do
                                                                                     you
                                                                                     use
                                                                                     time
                                                                                     tracking
                                                                                     for
                                                                                     projects?
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div
                                                       className="tab-pane fade"
                                                       id="development"
                                                       role="tabpanel"
                                                       aria-labelledby="development-tab"
                                                  >
                                                       <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img5.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/development-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Development
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     Challenges
                                                                                     Faced
                                                                                     By
                                                                                     Android
                                                                                     App
                                                                                     Dev.
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img7.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/development-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Development
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     To
                                                                                     Hire
                                                                                     Mobile
                                                                                     Apps
                                                                                     Developers
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div
                                                       className="tab-pane fade"
                                                       id="tutorial"
                                                       role="tabpanel"
                                                       aria-labelledby="tutorial-tab"
                                                  >
                                                       <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                 <div className="single-item mb-30">
                                                                      <div className="image-area">
                                                                           <img
                                                                                src="images/blog-img3.png"
                                                                                className="blog-item"
                                                                                alt="blog posts images"
                                                                           />
                                                                           <div className="icon">
                                                                                <img
                                                                                     src="images/tutorials-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="text-item">
                                                                           <div className="date-area">
                                                                                <img
                                                                                     src="images/date-icon.png"
                                                                                     alt="blog posts images"
                                                                                />
                                                                                <span className="date">
                                                                                     Sep
                                                                                     15,
                                                                                     2020
                                                                                </span>
                                                                                <span>
                                                                                     In
                                                                                     Tutorials
                                                                                </span>
                                                                           </div>
                                                                           <Link to="/blog">
                                                                                <h3>
                                                                                     How
                                                                                     do
                                                                                     you
                                                                                     use
                                                                                     time
                                                                                     tracking
                                                                                     for
                                                                                     projects?
                                                                                </h3>
                                                                           </Link>
                                                                           <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                elit.
                                                                                ligula
                                                                                in
                                                                                blandit
                                                                                sagittis,
                                                                                arcu
                                                                                ligula
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-lg-12 d-flex justify-content-center">
                                                       <nav aria-label="Page navigation example">
                                                            <ul className="pagination">
                                                                 <li className="page-item">
                                                                      <a
                                                                           className="page-link"
                                                                           href="#!"
                                                                      >
                                                                           <img
                                                                                src="images/arrow-left.png"
                                                                                alt="left"
                                                                           />
                                                                      </a>
                                                                 </li>
                                                                 <li className="page-item">
                                                                      <a
                                                                           className="page-link"
                                                                           href="#!"
                                                                      >
                                                                           01
                                                                      </a>
                                                                 </li>
                                                                 <li className="page-item">
                                                                      <a
                                                                           className="page-link active"
                                                                           href="#!"
                                                                      >
                                                                           02
                                                                      </a>
                                                                 </li>
                                                                 <li className="page-item">
                                                                      <a
                                                                           className="page-link"
                                                                           href="#!"
                                                                      >
                                                                           03
                                                                      </a>
                                                                 </li>
                                                                 <li className="page-item">
                                                                      <a
                                                                           className="page-link"
                                                                           href="#!"
                                                                      >
                                                                           04
                                                                      </a>
                                                                 </li>
                                                                 <li className="page-item">
                                                                      <a
                                                                           className="page-link"
                                                                           href="#!"
                                                                      >
                                                                           <img
                                                                                src="images/arrow-right.png"
                                                                                alt="right"
                                                                           />
                                                                      </a>
                                                                 </li>
                                                            </ul>
                                                       </nav>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4">
                                             <div className="right-area">
                                                  <form action="#">
                                                       <h3>Subscribe</h3>
                                                       <div className="subscribe d-flex justify-content-between">
                                                            <input
                                                                 type="email"
                                                                 placeholder="Enter Your Email"
                                                                 autoComplete="off"
                                                            />
                                                            <button className="subscribe-btn">
                                                                 <img
                                                                      src="images/send-icon.png"
                                                                      alt="icon"
                                                                 />
                                                            </button>
                                                       </div>
                                                  </form>
                                             </div>
                                             <div className="featured-post">
                                                  <h3>Featured Posts</h3>
                                                  <div className="single-item d-flex align-items-center">
                                                       <div className="left-item">
                                                            <img
                                                                 src="images/featured-img1.png"
                                                                 alt="blog posts images"
                                                            />
                                                       </div>
                                                       <div className="right-item">
                                                            <a href="#!">
                                                                 <h5>Design</h5>
                                                            </a>
                                                            <p>
                                                                 Discover your
                                                                 path to success
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className="single-item d-flex align-items-center">
                                                       <div className="left-item">
                                                            <img
                                                                 src="images/featured-img2.png"
                                                                 alt="blog posts images"
                                                            />
                                                       </div>
                                                       <div className="right-item">
                                                            <a href="#!">
                                                                 <h5>
                                                                      Marketing
                                                                 </h5>
                                                            </a>
                                                            <p>
                                                                 Website
                                                                 Usability &amp;
                                                                 Accessibility
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className="single-item d-flex align-items-center">
                                                       <div className="left-item">
                                                            <img
                                                                 src="images/featured-img3.png"
                                                                 alt="blog posts images"
                                                            />
                                                       </div>
                                                       <div className="right-item">
                                                            <a href="#!">
                                                                 <h5>
                                                                      Tutorial
                                                                 </h5>
                                                            </a>
                                                            <p>
                                                                 Know yourself
                                                                 your inner
                                                                 power
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="social-area">
                                                  <h3>Follow Us</h3>
                                                  <div className="social d-flex">
                                                       <a href="#!">
                                                            <i className="fab fa-facebook-f" />
                                                       </a>
                                                       <a href="#!">
                                                            <i className="fab fa-twitter" />
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="active"
                                                       >
                                                            <i className="fab fa-instagram" />
                                                       </a>
                                                       <a href="#!">
                                                            <i className="fab fa-pinterest-p" />
                                                       </a>
                                                       <a href="#!">
                                                            <i className="fab fa-linkedin-in" />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="tags-area">
                                                  <h3>Tags</h3>
                                                  <div className="tags">
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            App
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            Development
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            Mac OS
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            Mobile
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item active"
                                                       >
                                                            Web Design
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            UI/UX
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            Visual Design
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            Interaction Design
                                                       </a>
                                                       <a
                                                            href="#!"
                                                            className="tag-item"
                                                       >
                                                            UX Research
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="view-product">
                                                  <img
                                                       src="images/view-product-bg.png"
                                                       alt="blog posts images"
                                                  />
                                                  <div className="text-area">
                                                       <img
                                                            src="images/view-product-icon.png"
                                                            alt="blog posts images"
                                                       />
                                                       <h1>
                                                            Explore My Portfolio
                                                       </h1>
                                                       <Link
                                                            className="cmn-btn"
                                                            to="/porfolio"
                                                       >
                                                            View Portfolio
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* content end */}
                    </div>
               </div>
          );
     }
}
