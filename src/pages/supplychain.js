// src/Navbar.js

import './supplychain.css';
import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

const SupplyChainPage = () => {

   
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
        <p className="supply-subheading">THE SUPPLY ALLY</p>
        <h1 className="supply-title">Automated Supply Chain Optimization</h1>
        <p className="supply-description">
            Empowering businesses with real-time data insights and intelligent automation to streamline supply chain operations, reduce costs, and boost
            <br class="responsive-br" /> efficiency. Our advanced solutions help identify bottlenecks, improve demand forecasting, and enhance logistics for a seamless, agile, and
            <br class="responsive-br" /> resilient supply chain.
        </p>
      </div>
    </div>








    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="supply1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>ENHANCED DELIVERY EFFICIENCY</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Streamline logistics to ensure faster fulfilment and higher customer satisfaction
    </h4>
    <ul className="featuresSupply">
    <li>Reduce Lead Time</li>
    <li>Lower Operational Costs</li>
    </ul>
  </div>
</div>


    <div className="container">
      <div className="content">
      <h1>
      GREATER TRANSPARENCY AND TRUST</h1>
      <hr style={{maxWidth:'100%'}}></hr>
       <h4 style={{fontWeight:'300'}}>Increase Customer Confidence through Traceability and Product Origin Tracking</h4>
        <ul className="features">
          <li>Product Journey Tracking</li>
          <li>Reducing Material wastage and Improving Efficiency</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="supply_!.png" alt="Product Line" />
        
      </div>
    </div>






   




    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="supply_3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>IMPROVED INVENTORY MANAGEMENT</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Optimise Stock levels for better Product Availability and Customer Satisfaction
    </h4>
    <ul className="featuresSupply">
    <li>Minimize Overproduction and stockout effectively.</li>
          <li>Reducing Material wastage </li>
    </ul>
  </div>
</div>
















  
    <Footer />
  </div>

);
};

export default SupplyChainPage;
