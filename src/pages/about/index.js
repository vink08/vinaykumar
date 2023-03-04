import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row,Col} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import Hamburger from '../../components/hamburger';
import App from '../../App.js'
import '../contact/style.css';
import vinay from'../about/vinay.jpeg';
import Footer from '../../components/footer';
const steps = [
  {
    style: {
      opacity: 0,
    },
    duration: 400,
  },
  {
    style: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
    duration: 1000,
  },
  
];

class Aboutt extends Component {

 
 
  render() {
    return (
     <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>About | Vinay Kumar </title>
                
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
      <App className="particle" />
    </Animate>
    
          <Container className="Contact-header" fluid={true}>
          
            <Row className="Hamburger-menu">
            <Hamburger />
            </Row>
            
            <Animate steps={steps}>
            <h1 className='pro'>About</h1>
            <Row className="Contact-main">
                <Col xl={40} className="center">
                <h1><img src= {vinay} alt="hello" className='vinay'  /></h1>
                    <p className="about-text">Hi, I'm Vinay Kumar Undergraduate Second year Student of Indian Institute of Information Technology Bhopal. Currently pursuing B-Tech Degree in Information Technology. I'm very passionate to learn new things and ideas. Also I listening  new ideas from other people to enhance my knowledge.I have good
                    commands in Full Stack Development and Django Development. You can contact me at   <br/><i class="fa fa-envelope" aria-hidden="true"></i> mg.vink08@gmail.com
                    <br/>
                    <i class="fa-brands fa-twitter"></i>vink08</p>
                </Col>
            </Row>
             
          </Animate>
          </Container>
          <div className="footer-container">
        <Footer />
      </div>

          </div>  
    );
  }
}

export default Aboutt;