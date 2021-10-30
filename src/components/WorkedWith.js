import React from "react";
import brandLogo1 from "./../images/brand-1.png";
import brandLogo2 from "./../images/brand-2.png";
import brandLogo3 from "./../images/brand-3.png";
import brandLogo4 from "./../images/brand-4.png";

function WorkedWith() {
     return (
          <div>
               <section id="worked-with">
                    <div className="container">
                         <div className="main-content wow fadeInUp">
                              <h2>I Worked With</h2>
                              <div className="worked-carousel">
                                   <div className="single-item">
                                        <img
                                             src={brandLogo1}
                                             alt="Home page images"
                                        />
                                   </div>
                                   <div className="single-item">
                                        <img
                                             src={brandLogo2}
                                             alt="Home page images"
                                        />
                                   </div>
                                   <div className="single-item">
                                        <img
                                             src={brandLogo3}
                                             alt="Home page images"
                                        />
                                   </div>
                                   <div className="single-item">
                                        <img
                                             src={brandLogo4}
                                             alt="Home page images"
                                        />
                                   </div>
                                   <div className="single-item">
                                        <img
                                             src={brandLogo2}
                                             alt="Home page images"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default WorkedWith;
