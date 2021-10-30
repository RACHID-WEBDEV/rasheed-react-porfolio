import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import PageNotFound from "./pages/PageNotFound";
// import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const ContactMe = React.lazy(() => import("./pages/ContactMe"));

function App() {
     return (
          <div>
               <Navbar />
               <Suspense
                    fallback={<div className="preloader" id="preloader"></div>}
               >
                    <Switch>
                         <Route exact path="/">
                              <Index />
                         </Route>
                         <Route path="/about">
                              <About />
                         </Route>
                         <Route path="/portfolio">
                              <Portfolio />
                         </Route>
                         <Route path="/blog">
                              <Blog />
                         </Route>
                         <Route Path="/contact-me">
                              <ContactMe />
                         </Route>
                         <Route path={"/page-not-found"}>
                              <PageNotFound />
                         </Route>
                         <Route path="*">
                              {/* <Redirect exact to="/page-not-found" /> */}
                              <PageNotFound />
                         </Route>
                         {/* <Route Path="/contact">
                              <Contact />
                         </Route> */}
                    </Switch>
               </Suspense>
               <Footer />
          </div>
     );
}

export default App;
