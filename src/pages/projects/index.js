
import React from 'react';
import '../projects/style.css';
import {
    Container,
    Row,} from 'react-bootstrap';
import Hamburger from '../../components/hamburger';
import Animate from 'react-smooth';
//import Particles from 'react-particles-js';
  import App from '../../App.js'
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

import PCD from '../../components/projects';



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

class Project extends React.Component {


    render() {
        return (
            <Container className="About-header" fluid={true}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Projects | Vinay Kumar</title>
                </Helmet>
                <Animate to="1" from="0" attributeName="opacity">
      <App className="particle" />
    </Animate>
                
                    <Animate steps={steps}>
                        <h1 className='pro'>Projects</h1>
                        
                    <Row className="center">
                   
                    <PCD />
                        
                    </Row>
                    
                    
                 <Hamburger/>

            
           
                </Animate>
            </Container>
        );
    }
}

export default Project;