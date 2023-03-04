import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "../pages/home";
import Aboutt from "../pages/about";
import Load from "../pages/loader";
import Contact from "../pages/contact";

 import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Load} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={Aboutt} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
       
      </Switch>
    </Router>
  );
}