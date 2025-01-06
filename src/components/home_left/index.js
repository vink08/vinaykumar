import React from 'react';
import '../home_left/style.css';



import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-router-dom";

  function HomeLeft() {
  return (

    
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! <span class="wave">👋</span>
         </h1>
         <h2 className="second_line">
           Hi! I'm <strong className='name' >Vinay Kumar</strong>
         </h2>
         <h3>
          
         <ReactTypingEffect 
           text="Developer | Programmer" 
           className="typical"
           speed="100"
           eraseDelay="50000"
           />
         </h3>
            <br />

            
            
            
            <Button   className="home-left-aboutmme-btn">
              <Link to="/about" className="home-left-aboutme">About</Link>
              </Button> &nbsp;
            
           <Button  className="home-left-aboutmme-btn">
             <Link to="/projects"  style={{ textDecoration: 'none' }} className="home-left-aboutme">
               Projects
             </Link>
           </Button> &nbsp;
           <Button  className="home-left-aboutmme-btn">
             <Link to="/contact"  className="home-left-aboutme">
               Contact
             </Link>

           </Button> &nbsp;
           <br/>
            <br/>
            <br/>
           <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/vink08" className="social">
              
           <i class='fab fa-github fa-stack-10x'></i>&nbsp;
           </a>&nbsp;
           <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/in/vinaykumar0802/"  className="social">
              
            <i class='fab fa-linkedin fa-stack-10x'></i>&nbsp;
              </a>&nbsp;

            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/invites/contact/?i=hu4dgtctykc3&utm_content=my6ire8" className="social">
              
            <i class='fab fa-instagram fa-stack-10x'></i>&nbsp;
           </a>&nbsp;
           <a style={{ textDecoration: 'none', color: 'white' }} href="https://mobile.twitter.com/iiitb_kumar" className="social">
              
           <i class="fa-brands fa-twitter"></i>
           </a>&nbsp;
           
        
           
            
         </Col>
     </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    
            
     
   </Container>
   

  );
}

export default HomeLeft;