// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import './manufacturing.css';
import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
const Warehouse = () => {

   
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






        const [activeTab, setActiveTab] = useState('resourceTracking');

        const content = {
          resourceTracking: {
            title: 'Material Tracking & Resource Optimization',
            description: [
              'Detect defects instantly with automated quality checks.',
              'Optimize workflows and reduce bottlenecks.',
              'Get alerts for predictive maintenance before breakdowns.'
            ],
            image: 'warehouse_1.png'
          },
          riskManagement: {
            title: 'Workplace Safety & Risk Management',
            description: [
              'Real-time hazard detection like missing PPE.',
              'Monitor worker activity to prevent accidents.',
              'Track safety compliance automatically.'
            ],
            image: 'warehouse_2.png' // Replace with your image URL or import it
          },
          smartAutomation: {
            title: 'Smart Automation for Productivity',
            description: [
              'Detect defects instantly with automated quality checks.',
              'Optimize workflows and reduce bottlenecks.',
              'Get alerts for predictive maintenance before breakdowns..'
            ],
            image: 'warehouse_3.png'
          },
          dataDrivenInsights: {
            title: 'Data Driven Insights & Remote Monitoring',
            description: [
              'Visualize live production data instantly.',
              'Optimize processes with actionable insights.',
              'Remote factory monitoring anytime, anywhere.'
            ],
            image: 'warehouse_4-2.png'
          }
        };


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







    <div className="container-mirrored">
  <div className="image-section-mirrored">
    <img src="123456.png" alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>Elevate Your Inventory<br /> to New Heights</h1>
    <h4 style={{ fontWeight: '300' }}>
    Master your workflow with data-driven insights that unlock efficiency, reduce errors, and transform stock management.
    </h4>
    <Button target="_blank" href="https://forms.gle/P7B2NMVwGstAeVea8" className="know-more-btn">Get Started</Button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See Your Storage Solutions Transformed</h2>
        <h6>Explore how innovative insights can optimize your space and enhance overall efficiency.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kCouvttSdQs?si=ABfmB8_kXmtJ4V7f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>

       





<div className="app2">
  <div className="tabs2">
    {Object.keys(content).map((tabKey) => (
      <button
        key={tabKey}
        className={`tab2 ${activeTab === tabKey ? 'active2' : ''}`}
        onClick={() => setActiveTab(tabKey)}
      >
        {content[tabKey].title.split(' & ')[0]}
      </button>
    ))}
  </div>

  <div className="content2">
    <div className="text-column2">
      <h2>{content[activeTab].title}</h2>
      <hr />
      <p>
        {content[activeTab].description.map((desc, index) => (
          <div key={index}>• {desc}</div>
        ))}
      </p>
    </div>
    <div className="image-column2">
      <img src={content[activeTab].image} alt={content[activeTab].title} />
    </div>
  </div>
</div>






<div className="app-container2">
  <header className="app-header2">
    <h1 className="title2">Our Story in Numbers</h1>
  </header>

  <div className="statistics-container2">
    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+30%</h2>
      <p className="statistic-description21">Inventory</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Through Automation</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-50%</h2>
      <p className="statistic-description21">Defect Rate</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">With Quality Control System</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+15%</h2>
      <p className="statistic-description21">Overall Equipment Effectiveness</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">With Predictive Maintenance</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-30%</h2>
      <p className="statistic-description21">Lead Time Reduction</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Through Streamline Process</p>
    </div>
  </div>
</div>







<div className="app-container3">
      <div className="content3" style={{textAlign:'left'}}>
        <h1 className="title3">Maximize Warehouse Performance Using Argus</h1>
        <Button href="/contact" style={{backgroundColor:'white',color:'black'}} className="connect-button3">Connect Now</Button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">Smart Space Utilization for optimal storage efficiency.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">
          Inventory Transparency for precise control</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">
          Automated Order Processing for faster, accurate picking.</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">Dynamic Management for Real-Time Task allocation.</h3>
        </div>
      </div>
    </div>







  
    <Footer />



</div>

);
};

export default Warehouse;
