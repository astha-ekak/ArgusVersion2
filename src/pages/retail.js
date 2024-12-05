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
const Retail = () => {

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
            title: 'ENHANCED CUSTOMER EXPERIENCE',
            description: [
              'Track foot traffic patterns and dwell times to understand shopper preferences.',
              'Identify suspicious behaviours in real-time to minimize theft and loss.',
              'Use behavioural data to predict which products will drive sales in specific demographics.'
            ],
            image: 'retail 2.jpg' 
          },
          riskManagement: {
            title: 'PROACTIVE OPTIMIZATION & INSIGHTS',
            description: [
              'Adjust inventory levels proactively based on predicted seasonal trends.',
              'Use predictive analytics to optimize restocking schedules based on demand.',
              'View live sales metrics, customer insights, and inventory status at a glance.'
              
            ],
            image: 'retail 3.jpg' // Replace with your image URL or import it
          },
          smartAutomation: {
            title: 'MAINTAINING OPTIMAL STOCK LEVEL',
            description: [
              'Detect when shelves need restocking or rearranging without manual checks.',
              'Ensure product quality by scanning items for defects or inconsistencies upon arrival.',
              'Monitor stock levels automatically to avoid overstocking or stockouts.'
              
            ],
            image: 'retail 4.jpg' 
          },
          dataDrivenInsights: {
            title: 'INTELLIGENT SURVEILLANCE ',
            description: [
              'Detect accidents or unsafe conditions and automatically alert staff for immediate response.',
              'Analyze crowd density and movement patterns to enhance safety and optimize store layout.',
              'Monitor store environments for suspicious activities or potential theft.'
            ],
            image: '100001549.jpeg'
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
    <img src="78544566.png" alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>Revolutionize Your<br /> Retail Landscape</h1>
    <h4 style={{ fontWeight: '300' }}>
    Explore how intelligent insights can elevate customer experiences, streamline inventory management, and boost sales.
    </h4>
    <Button  target="_blank" href="https://forms.gle/P7B2NMVwGstAeVea8" className="know-more-btn">Get Started</Button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See Your Retail Experience Revolutionized </h2>
        <h6>​Discover how smart insights can enhance customer engagement, optimize inventory, and drive sales growth.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rFTgrztP6eA?si=Wfe3WOl_B2-O_1Tj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
      <h2 className="statistic-percentage2">+15%</h2>
      <p className="statistic-description21">Sales per Sqaure Foot</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Through Customer Engagement Strategies</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+25%</h2>
      <p className="statistic-description21">Customer Conversion Rate</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Through Peak Footfall Rate</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+40%</h2>
      <p className="statistic-description21">Customer Retention Rate</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Personalised Experiences</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-50%</h2>
      <p className="statistic-description21">Inventory Shrinkage</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Better Tracking & Security Measure</p>
    </div>
  </div>
</div>







<div className="app-container3">
      <div className="content3" style={{textAlign:'left'}}>
        <h1 className="title3">Streamline Your Retail Operations with Argus</h1>
        <Button href="/contact" className="connect-button3" style={{backgroundColor:'white',color:'black'}}>Connect Now</Button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">
          Automated Shelf Scanning to prevent stockouts.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">Real-Time Alert for prevent Operational Disruption</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">Faster Checkouts with Reduced Wait times.</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">
          Data-driven Merchandising to Optimize &  Boost sales.</h3>
        </div>
      </div>
    </div>




  
    <Footer />



</div>

);
};

export default Retail;
