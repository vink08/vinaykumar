import React, { Component } from 'react';
import '../about/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Animate from 'react-smooth';
import { Helmet } from 'react-helmet';
import Hamburger from '../../components/hamburger';
import App from '../../App.js';
import vinay from '../about/vinay.jpeg';
import Resume from '../about/Vinay_Resume_m.pdf'
import { Document, Page } from 'react-pdf';

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
    //const resumePath = '../about/Vinay_Resume_m.pdf';

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
          <Row>
            <Hamburger />
          </Row>

          <Animate steps={steps}>
            <p className="pro">About</p>
            <Row className="Contact-main">
              <Col xl={40} className="center">
                <img src={vinay} alt="hello" className="vinay" />
                <div className="about-text">
                  <h2>Hi, I'm Vinay Kumar</h2>
                  <p>
                    Undergraduate Pre Final year Student of Indian Institute
                    of Information Technology Bhopal. Currently pursuing
                    B-Tech Degree in Information Technology. I'm very
                    passionate about learning new things and ideas. I enjoy
                    listening to new ideas from other people to enhance my
                    knowledge. I have a strong command in Full Stack
                    Development.
                  </p>
                  <p>
                    Contact: <i className="fa fa-envelope" aria-hidden="true"></i> mg.vink08@gmail.com
                  </p>
                  <a href={Resume} download><button className="resume-button" onClick={this.handleDownload}>
                  Download Resume
                </button></a>
                </div>
              </Col>
            </Row>
          </Animate>
        </Container>
      </div>
    );
  }
}

export default Aboutt;
