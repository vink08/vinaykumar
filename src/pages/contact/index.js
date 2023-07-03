import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Animate from 'react-smooth';
import { Button, Form, FormGroup, Modal } from 'react-bootstrap';
import ClipLoader from 'react-spinners/BarLoader';
import Hamburger from '../../components/hamburger';
import {Helmet} from 'react-helmet';
import App from '../../App.js';
import emailjs from 'emailjs-com';
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





class Contact extends React.Component {
    constructor(props, context) {
		super(props, context);
    this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      loading: false,
		};
	}

	handleClose() {
    this.setState({ show: false });
    this.setState({ name: '' });
    this.resetForm();
	}

	handleShow() {
		this.setState({ show: true, loading: false });
	}

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    show: false,
  }
  
  handleSubmit(e) {
    e.preventDefault(); 
    this.setState({ loading: true });   
    
    const {email, subject, message } = this.state    
    
    let templateParams = {
      from_name: email,
      to_name: 'ivinaykumar02@gmail.com',
      subject: subject,
      message_html: message,
     }
     

     emailjs.send(
      '________________',
      'template_j8a0r2p',
       templateParams,
      '________________'
     )
     .then((result) => {
        this.handleShow();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });     
    }
    
    resetForm() {
    this.setState({
      email: '',
      subject: '',
      message: '',
      modal: false,
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }


 

  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Vinay Kumar </title>
                
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
      <App className="particle" />
    </Animate>
    <h1 className="Contact-title">Contact</h1> 
          <Container className="Contact-header" fluid={true}>
          
            
            
            <Animate steps={steps}>
            <h1 className="Contact-title">Contact</h1>  
            

            <Row className="Contact-main">
                <Col xl={40} className="center">
                     <br/>

                    <p className="Contact-text"><br/>Get In Touch<br/>Feel free to contact me for any work or suggestions You can Email me at   <br/><i class="fa fa-envelope" aria-hidden="true"></i> mg.vink08@gmail.com
                    <br/>
                    <i class="fa-brands fa-twitter"></i>vink08</p>
                </Col>
            
            <Col  xl={6}  className="Contact-right">
            <Form onSubmit={this.handleSubmit.bind(this)} className="Contact-form">
            <p className="contact-form-header">Contact Form</p>
             <FormGroup className="contact_input">
              <Form.Control type="email" value={this.state.email} className="contact_input_text" onChange={this.handleChange.bind(this, 'email')} placeholder="Email Address" required/>
             </FormGroup>
            <FormGroup controlId="formBasicName" className="contact_input">
              <Form.Control as="textarea" rows="1" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Your Name" className="contact_input_text" required />
            </FormGroup>
            <FormGroup controlId="formBasicSubject" className="contact_input">
             <Form.Control as="textarea" rows="1"  value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} placeholder="Subject" className="contact_input_text" required />
            </FormGroup>
            <FormGroup controlId="formBasicMessage" className="contact_input">
              <Form.Control as="textarea" rows="6" value={this.state.message} placeholder="Your text" onChange={this.handleChange.bind(this, 'message')} className="contact_input_text" required/>
            </FormGroup>
           <Button className="contact-email-text-btn"  type="submit">
              Submit
              <br/>
              <ClipLoader
                size={150} 
                color={"#ffffff"}
                
                loading={this.state.loading}
              />
            </Button>
            <br/>
            
            <Modal show={this.state.show} onHide={this.handleClose}>MESSAGE SENT
            <Modal.Body>Thank you for contacting me. I will get back to you as soon as possible.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>


        
        
          </Modal>



          </Form>

            </Col>
            </Row>
            <Hamburger />
            </Animate>

            
       
        </Container>
        
      

      </div>
    )
  }
} export default Contact
