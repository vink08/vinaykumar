import React from 'react';
import '../home/style.css';
import Home_Left from '../../components/home_left';

//import HomeRight from '../../components/home_right';
//import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
//import Particles from 'react-particles-js';
  import App from '../../App.js'
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import rect from 'rect';



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
  

function Home() {
  //Analytics()
  return (
    <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Vinay Kumar</title>
                  <meta name="description" content="Vinay Kumar | Web Developer" />
         </Helmet>
    <Animate to="1" from="0" attributeName="opacity">
      <App className="particle" />
    </Animate>
    <Container className="App-header" fluid={true}>
      <Animate steps={steps}>
        <Row className="App-main">
          <Col xl={40} className="center">
            <Home_Left />
          </Col>
        </Row>
      </Animate>
    </Container>
  </div>
    );
}

export default Home;
