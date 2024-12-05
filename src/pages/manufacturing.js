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
const Navbar1 = () => {

   
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
            title: 'INVENTORY ACCURACY & STOCK VISIBILITY',
            description: [
              'Conduct regular stock checks with minimal manual effort',
              'Monitor stock movement across zones and facilities.',
              'Enable seamless scanning and tracking for quick updates.'
            ],
            image: '100001548.jpeg' 
          },
          riskManagement: {
            title: 'EFFICIENT SPACE UTILIZATION & LAYOUT UTILIZATIONS',
            description: [
              'Identify Underutilized Areas and Rearrange Inventory for better flow.',
              'Adjust Product Placement based on demand trends and retrieval frequency.',
              'Detect Congested zones and prevent Bottlenecks in operations.'
            ],
            image: 'manufacturing 4.jpg' 
          },
          smartAutomation: {
            title: 'IMPROVING PICKING & PACKING OPERATIONS',
            description: [
              'Provide Real-Time Instructions for quick and accurate order picking.',
              'Identify Discrepancies before dispatch, reducing returns.',
              'Automate Sorting of high-priority orders for faster processing.'
            ],
            image: 'manufacturing 3.jpg' // Replace with your image URL or import it
          },
          dataDrivenInsights: {
            title: 'SAFETY ANALYTICS',
            description: [
              'Monitor areas for unsafe practices, like blocked aisles or high-risk activities.',
              'Monitor Productivity and Forecast Demand for efficient replenishment.',
              'Ensure workers wear proper safety gear through Automated Monitoring.'
            ],
            image: 'manufacturing 2.jpg'
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
    <img src="Manufacturing 1.png" alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>
    <span className="line">Transform </span>
      <span className="line">Operations </span>
      <span className="line">Beyond the Line</span>
    </h1>
    <h4 style={{ fontWeight: '300' }}>
    Unlock the power of smart insights to optimize every facet of your manufacturing process.
    </h4>
    <Button  target="_blank" href="https://forms.gle/P7B2NMVwGstAeVea8" className="know-more-btn">Get Started</Button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See Smarter Manufacturing in Motion</h2>
        <h6>Empower your production floor with intelligent safety measures and seamless automation that drive performance.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kCouvttSdQs?si=cE3Lc_vD7nqExstz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    <h1 className="title2">Industry Insights by the Numbers</h1>
  </header>

  <div className="statistics-container2">
    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+20%</h2>
      <p className="statistic-description21">Overall Productivity</p>
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
        <h1 className="title3">Optimize Manufacturing Efficiency with Argus</h1>
        <Button href="/contact" className="connect-button3" style={{backgroundColor:'white',color:'black'}}>Connect Now</Button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">Seamless Integration into your Production System</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">Real-Time Alert for Proactive Management</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">Comprehensive Traceability to ensure High Quality</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">Operational Excellence with reduced downtime</h3>
        </div>
      </div>
    </div>







  
    <Footer />



</div>

);
};

export default Navbar1;
