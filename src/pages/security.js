
import './supplychain.css';
import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

const Security = () => {

   
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
  },

 []);


  return (
    <div>
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






    <div className="supply-container">
      <div className="supply-header">
        <p className="supply-subheading">
        THE SECURE SHORE</p>
        <h1 className="supply-title">Security & Surveillance <br/>with Environment
Monitoring</h1>
<p className="supply-description">
    Integrating intelligent monitoring and advanced analytics to safeguard assets and ensure safety. Our solutions provide real-time threat detection,
    <br class="responsive-br" /> automated alerts, and actionable insights to prevent incidents, reduce risks, and enhance situational awareness, delivering peace of mind and robust
    <br class="responsive-br" /> protection for businesses and communities.
</p>

      </div>
    </div>






 
    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="sevurity1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>BOOST SAFETY PROTOCOL COMPILANCE BY 35%</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Reduce the risk of non compliance fines by 30% with enhanced<br /> adherence strategies.
    </h4>
    <ul className="featuresSupply">
    <li>Monitor real-time, Safety compliance.</li>
    <li>Reduce the risk of costly accident and fines.</li>
    </ul>
  </div>
</div>

  







    <div className="container">
      <div className="content">
      <h1>DECREASE THEFT INCIDENT BY 50% WITH REAL-TIME<br />MONITORING</h1>
      <hr style={{maxWidth:'100%'}}></hr>
       <h4 style={{fontWeight:'300'}}>Strengthen site security and protect assets with continuous<br /> surveillance.</h4>
        <ul className="features">
          <li>Smart vision to prevent theft.</li>
          <li>Ensure that workers & equipment
          are secure</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="security2.png" alt="Product Line" />
        
      </div>
    </div>




    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="security3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>ENSURE A SAFE WORKPLACE WITH CONTINUOS<br /> MONITORING</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Monitoring environmental parameters to maintain a healthy<br /> and secure working environment.
    </h4>
    <ul className="featuresSupply">
    <li>Continuously track environmental factors</li>
    <li>Ensure site compliance and safety</li>
    </ul>
  </div>
</div>




    









  
    <Footer />
  </div>

);
};

export default Security;
