import React from "react";
import latestProject1 from "./../images/latest-project1.png";
import latestProject2 from "./../images/latest-project2.png";
import latestProject3 from "./../images/latest-project3.png";

function LatestProject() {
     return (
          <div>
               <div className="single-item">
                    <div className="row d-flex justify-content-between">
                         <div className="col-lg-5 col-md-5 d-flex align-items-center">
                              <div className="text-area">
                                   <h5>Product Design</h5>
                                   <a href="/">
                                        <h2>Mobile App Redesign</h2>
                                   </a>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Viverra sed iaculis
                                        ornare duis.
                                   </p>
                                   <a href="/" className="cmn-btn-second">
                                        View Case Study
                                        <span className="btn-icon" />
                                   </a>
                              </div>
                         </div>

                         <div className="col-lg-7 col-md-7 d-flex align-items-center">
                              <div className="right-area">
                                   <img
                                        src={latestProject1}
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
                                        src={latestProject2}
                                        alt="Home page images"
                                   />
                              </div>
                         </div>
                         <div className="col-lg-5 col-md-5 d-flex align-items-center">
                              <div className="text-area">
                                   <h5 className="mid">UI/UX Design</h5>
                                   <a href="/">
                                        <h2>Mobile App Design</h2>
                                   </a>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Viverra sed iaculis
                                        ornare duis.
                                   </p>
                                   <a href="/" className="cmn-btn-second">
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
                                   <h5 className="last">Web Design</h5>
                                   <a href="/">
                                        <h2>Website Design</h2>
                                   </a>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Viverra sed iaculis
                                        ornare duis.
                                   </p>
                                   <a href="/" className="cmn-btn-second">
                                        View Case Study
                                        <span className="btn-icon" />
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-7 col-md-7 d-flex align-items-center">
                              <div className="right-area">
                                   <img
                                        src={latestProject3}
                                        alt="Home page images"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default LatestProject;
