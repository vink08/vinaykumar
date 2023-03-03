import React from 'react';
import '../home_left/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-router-dom";

  function Home_Left() {
  return (

    
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! <span class="wave">👋</span>
         </h1>
         <h2 className="second_line">
           Hi! I'm <strong>Vinay Kumar</strong>
         </h2>
         <h3>
          
         <ReactTypingEffect 
           text="Web Developer........" 
           className="typical"
           speed="500"
           eraseDelay="500"
           />
         </h3>
            <br />

            <br />
            
            
            <Button   className="home-left-aboutmme-btn">
              <Link to="/about" className="home-left-aboutme">About Me</Link>
              </Button> &nbsp;
            
           <Button  className="home-left-aboutmme-btn">
             <Link to="/projects"  style={{ textDecoration: 'none' }} className="home-left-aboutme">
               Projects
             </Link>
           </Button> &nbsp;
           <Button  className="home-left-aboutmme-btn">
             <Link to="/contact"  className="home-left-aboutme">
               Contact Me
             </Link>

           </Button> &nbsp;
           <br/>
            <br/>
            <br/>
           <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/vink08" target="_blank" className="home-left-aboutme">
              
           <i class='fab fa-github fa-stack-10x'></i>&nbsp;
           </a>&nbsp;
           <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/vink08" target="_blank" className="home-left-aboutme">
              
            <i class='fab fa-linkedin fa-stack-10x'></i>&nbsp;
              </a>&nbsp;

            <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/vink08" target="_blank" className="home-left-aboutme">
              
            <i class='fab fa-instagram fa-stack-10x'></i>&nbsp;
           </a>&nbsp;
           <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/vink08" target="_blank" className="home-left-aboutme">
              
           <i class="fa-brands fa-twitter"></i>
           </a>&nbsp;
           
        
           
            
         </Col>
     </Row>
   </Container>

  );
}

export default Home_Left;