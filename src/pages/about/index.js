import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
//import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
//import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger';
import App from '../../App.js'


class About extends Component {

 
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Vinay Kumar</title>
               
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <App
            
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />

            
           </Row>
          <Row className="About-footer">
           
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default About;