import React from "react";
import PageNotFoundImg from "./../images/404 page.jpg";
import areaIcon from "./../images/tutorials-icon2.png";

function PageNotFound() {
     return (
          <div>
               <div>
                    {/* inner banner start */}
                    <section
                         id="banner-section"
                         className="inner-banner blog-single"
                    >
                         <div className="banner-content d-flex align-items-center">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-lg-9">
                                             <div className="text-area">
                                                  <h1 className="title">
                                                       Oops...🙈 Page Not Found
                                                  </h1>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="head-bottom">
                                        <div className="row">
                                             <div className="col-lg-6"></div>
                                             <div className="col-lg-6">
                                                  <div className="text-area"></div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* banner-section end */}
                    {/* banner bottom blog start */}
                    <section id="single-blog" className="blog-single">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12 wow fadeInUp">
                                        <div className="top-img">
                                             <img
                                                  src={PageNotFoundImg}
                                                  alt="social"
                                             />
                                             <div className="icon-area">
                                                  <img
                                                       src={areaIcon}
                                                       alt="socialimage"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* banner bottom blog end */}
               </div>
          </div>
     );
}

export default PageNotFound;
