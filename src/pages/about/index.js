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
                  Hi there! 👋 I'm Vinay Kumar, a passionate and dedicated tech enthusiast currently pursuing a B.Tech in Information Technology at IIIT Bhopal. With a CGPA of 8.89, I have honed my technical expertise and problem-solving skills through academics and real-world projects.

I specialize in full-stack development, particularly with the **MERN stack**, and have a strong foundation in languages like <b>C++</b>, <b>JavaScript</b>, and <b>Python</b>. My experience includes working on projects like EasyShop, Social Media, and ConnectCare, showcasing my ability to build impactful applications from scratch.

Beyond academics, I thrive on challenges. Whether it’s achieving **1st place in the National Level Hackathon Google Solution Challenge Ideathon or securing 49th position in CodeRush by AlgoUniversity, I always strive to push boundaries and grow.

When I’m not coding, you'll find me exploring new technologies, collaborating on innovative ideas, or refining my leadership skills. My goal is to leverage technology to create meaningful solutions that make a difference. 🚀

Let’s connect and build something amazing together! 🌟

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
