import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
//import '../../components/contactform/style.css';
//import Footer from '../../components/footer';
import Animate from 'react-smooth';
import { Button, Form, FormGroup, Modal, Image } from 'react-bootstrap';
import ClipLoader from 'react-spinners/BarLoader';
import Hamburger from '../../components/hamburger';
//import ContactLeft from '../../components/contact_left';
//import EmailForm from '../../components/email_form'
//import contactform from '../../components/contactform';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import App from '../../App.js';
import emailjs from 'emailjs-com';

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
      'service_hngspri',
      'template_j8a0r2p',
       templateParams,
      'tOJPAnXNg1ixvLMlP'
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
          
          <Container className="Contact-header" fluid={true}>
          
            <Row className="Hamburger-menu">
            <Hamburger />
            </Row>
            <br/>
            <br/>
            <Animate steps={steps}>
            <Row className="Contact-main">
                <Col xl={40} className="center">

                    <p className="Contact-text"><h1>Get In Touch</h1>Feel free to contact me for any work or suggestions You can Email me at   <br/><i class="fa fa-envelope" aria-hidden="true"></i> mg.vink08@gmail.com</p>
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
              <ClipLoader
                size={150} 
                color={"#ffffff"}
                loading={this.state.loading}
              />
            </Button>
            
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                show={this.state.show} onHide={this.handleClose}
                centered
              >
              <Modal.Body className="contact_success_modal_body">
                <h5>Thank you <span><strong>{this.state.name}</strong>!!</span> 😇</h5>
                <h6>Your message was successfully recorded</h6>
                < br />
                <Button variant="outline-light" size="lg" onClick={this.handleClose} className="contact-email-text-btn">Close</Button>
              </Modal.Body>
           </Modal>
          </Form>

            </Col>
            </Row>
            </Animate>

            
       
        </Container>
      </div>
    )
  }
} export default Contact