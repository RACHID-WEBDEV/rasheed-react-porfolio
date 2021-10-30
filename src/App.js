import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Index from "./pages/Index";
// import About from "./pages/About";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = React.lazy(() => import("./pages/About"));

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
                         <Route Path="/contact">
                              <Contact />
                         </Route>
                         <Route path="/portfolio">
                              <Portfolio />
                         </Route>
                         <Route path="/blog">
                              <Blog />
                         </Route>
                         <Route path={`/page-not-found`}>
                              <PageNotFound />
                         </Route>
                         <Route path="*">
                              <Redirect to="/page-not-found" />
                              {/* <PageNotFound /> */}
                         </Route>
                    </Switch>
               </Suspense>
               <Footer />
          </div>
     );
}

export default App;
