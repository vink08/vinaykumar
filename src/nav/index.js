import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../pages/home";
import About from "../pages/about";
//import Project from "../components/projects";
// import Projects from "../pages/projects";

import Contact from "../pages/contact";
// import Loading from "../pages/loading";
 import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router>
     <Switch>
       
       <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        
        
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
       
      </Switch>
    </Router>
  );
}