import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import {
     BrowserRouter as Router,
     HashRouter,
     Route,
     Switch,
} from "react-router-dom";
import Footer from "./components/Footer";
// import "./App.css";
// import Uservey from "./Uservey";

function App() {
     return (
          <div>
               <Router>
                    <Navbar />

                    <div>
                         <Switch>
                              <Route exact path="/" component={Home} />
                              <Route path="/about" component={About} />
                              <Route path="/portfolio" component={Portfolio} />
                              <Route path="/blog" component={Blog} />
                              <Route Path="/contact" component={Contact} />
                         </Switch>
                    </div>
                    <Footer />
               </Router>
               {/* <Uservey /> */}
          </div>
     );
}

export default App;
