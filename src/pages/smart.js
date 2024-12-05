
import './supplychain.css';
import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

const Smart = () => {

   
   
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
        THE STOCK BLOCK</p>
        <h1 className="supply-title">Automated Inventory Management</h1>
        <p className="supply-description">
    Optimizing stock control with real-time tracking and data-driven insights to reduce overstock, prevent stockouts, and minimize carrying costs.
    <br class="responsive-br" /> Our solutions streamline inventory workflows, improve demand forecasting, and automate replenishment, ensuring the right products are
    <br class="responsive-br" /> available at the right time for seamless operations.
</p>

      </div>
    </div>





    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="smart1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
  <h1>CUT LABOR COST BY 30% OF AUTOMATION</h1>
  <hr style={{maxWidth:'100%'}}></hr>
  <h4 style={{fontWeight:'300'}}>Save 25-30% on manual labour through Automated Inventory Tracking.</h4>
    <ul className="featuresSupply">
    <li>Team spend less time in searching
          item to fulfil order.</li>
          <li>Reducing the reliance on costly,
          unplanned repair.</li>
    </ul>
  </div>
</div>

 








    <div className="container">
      <div className="content">
      <h1>INCREASE ORDER FULFILLMENT SPEED BY 30%</h1>
      <hr style={{maxWidth:'100%'}}></hr>
       <h4 style={{fontWeight:'300'}}>Enhance logistics efficiency by 40% using smart warehousing solution. </h4>
        <ul className="features">
          <li>Quickly locate and fulfil rush order</li>
          <li>Impress clients with prompt service.</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="smart2.png" alt="Product Line" />
        
      </div>
    </div>





    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="smart3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
  <h1>ACHEIVE 98% ACCURACY IN INVENTORY SORTING</h1>
  <hr style={{maxWidth:'100%'}}></hr>
  <h4 style={{fontWeight:'300'}}>Reduce operational error by 60% with precise Automated System.</h4>
    <ul className="featuresSupply">
    <li>Avoid the frustration of misplaced productsduring Rush hour.</li>
          <li>Reducing the reliance on costly,
          unplanned repair.</li></ul>
  </div>
</div>











  
    <Footer />
  </div>

);
};

export default Smart;
