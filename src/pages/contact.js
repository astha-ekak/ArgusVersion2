import React, { useEffect, useState } from 'react';
import './navbar.css'; 
import './contact.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form';

import emailjs from 'emailjs-com'; 
import Footer from './Footer';

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const isSmallScreen = window.innerWidth <= 767.98;
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    companyName: '',
    purpose: '',
    help: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      type: formData.type,
      companyName: formData.companyName || 'N/A', 
      purpose: formData.purpose,
      help: formData.help
    };

    emailjs.send('service_8347pai', 'template_e9l841p', templateParams, 'I2kdCeufXQnIz39__')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        alert('Your form has been submitted!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('There was an issue with submitting the form. Please try again.');
      });
  };

 
  return (
    <>
<Navbar fixed="top" variant="dark" expand="lg" className="navbar">
  <Container>
    <Navbar.Brand href="#home" className="brand_text">
      <img src="Argus_Logo__Argus_Revamp_Website_-removebg-preview.png" alt="Argus Logo" className="brand_logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
      <span className="navbar-toggler-icon"></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav" className="collapse-horizontal">
      <Nav className="me-auto">
        <Nav.Link href="/home" className="nav_text">Home</Nav.Link>
        <NavDropdown title="Technology" id="basic-nav-dropdown" className="nav_text multi-column-dropdown">
          <div className="dropdown-column">
            <h6 className="dropdown-header">Traceability</h6>
            <NavDropdown.Item href="/supplychain">Supply Chain Optimization</NavDropdown.Item>
            <NavDropdown.Item href="/predictive">Predictive Maintenance</NavDropdown.Item>
          </div>
          <div className="dropdown-column">
            <h6 className="dropdown-header">Safety</h6>
            <NavDropdown.Item href="/security">Security & Surveillance</NavDropdown.Item>
          </div>
          <div className="dropdown-column">
            <h6 className="dropdown-header">Productivity</h6>
            <NavDropdown.Item href="/smart">Smart Inventory Management</NavDropdown.Item>
            <NavDropdown.Item href="/enhanced">Enhanced Customer Experience</NavDropdown.Item>
          </div>
        </NavDropdown>
        <NavDropdown title="Industry" id="basic-nav-dropdown" className="nav_text">
          <NavDropdown.Item href="/manufacturing" style={{ color: 'white' }}>Manufacturing</NavDropdown.Item>
          <NavDropdown.Item href="/warehouse" style={{ color: 'white' }}>Warehouse</NavDropdown.Item>
          <NavDropdown.Item href="/construction" style={{ color: 'white' }}>Construction</NavDropdown.Item>
          <NavDropdown.Item href="/retail" style={{ color: 'white' }}>Retail</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="https://forms.gle/P7B2NMVwGstAeVea8" target='_blank' className="nav_text">Demo</Nav.Link>
      </Nav>
      <Button href="/contact" target='_blank' className="ms-auto custom-button" variant="light">Contact</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>




      <div className="contact-get-started-section">
      <h1>Get in Touch</h1>
      <h4>
      Where innovation powers automation for a smarter tomorrow. Ready to begin
      </h4>
      {/* <div className="contact-image-container">
        <img src="Color (437 x 536 px) (324 x 223 px)_20241012_123323_0000.png" alt="Aerial view of the landscape" />
      </div> */}
    </div>






      <div className="container2211" >
        <div className="row2211">
          <div className="col_contact col-12">
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
  <Form.Label>Name<span className="text-danger"> *</span></Form.Label>
  <Form.Control 
    type="text" 
    name="name" 
    value={formData.name} 
    onChange={handleChange} 
    placeholder="Enter your name" 
    required 
  />
</Form.Group>

<Form.Group controlId="formEmail" className='mt-4'>
  <Form.Label>Email<span className="text-danger"> *</span></Form.Label>
  <Form.Control 
    type="email" 
    name="email" 
    value={formData.email} 
    onChange={handleChange} 
    placeholder="Enter your email" 
    required 
  />
</Form.Group>

<Form.Group controlId="formType" className='mt-4'>
  <Form.Label>User Type<span className="text-danger"> *</span></Form.Label>
  <Form.Control 
    as="select" 
    name="type" 
    value={formData.type} 
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="individual">Individual</option>
    <option value="company">Company</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="formPurpose" className='mt-4'>
  <Form.Label>Purpose<span className="text-danger"> *</span></Form.Label>
  <Form.Control 
    type="text" 
    name="purpose" 
    value={formData.purpose} 
    onChange={handleChange} 
    placeholder="Enter the purpose" 
    required 
  />
</Form.Group>


              <Form.Group controlId="formCompanyName" className='mt-4'>
                <Form.Label>Company Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="companyName" 
                  value={formData.companyName} 
                  onChange={handleChange} 
                  placeholder="Enter your company name" 
                />
              </Form.Group>

              
              <Form.Group controlId="formHelp" className='mt-4'>
                <Form.Label>How Can We Help You?</Form.Label>
                <Form.Control 
                  as="textarea" 
                  name="help" 
                  value={formData.help} 
                  onChange={handleChange} 
                  rows={3} 
                  placeholder="Describe how we can help you" 
                  required 
                />
              </Form.Group>

              <Button  type="submit" className="button_contact mt-5">
                Submit
              </Button>
            </Form>

            {submitted && <p className="text-success mt-3">Your form has been submitted successfully!</p>}
          </div>
        </div>
      </div>
      <div className="background-image-container">
  <img src="Screenshot 2024-11-12 112713.png" alt="Responsive Background" />
</div>

      <Footer />
    </>
  );
};

export default Contact;
