// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';

import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './manufacturing.css';


const Construction = () => {

   
      
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
            title: 'WORKER SAFETY & ACCIDENT PREVENTION',
            description: [
              'Detect unsafe behaviors and generate instant alerts.',
              'Automate incident tracking for faster response.',
              'Analyze worker patterns to improve safety over time.'
            ],
            image: 'construction .jpg' 
          },
          riskManagement: {
            title: 'ON-TIME DELIVERY & PROJECT EFFICIENCY',
            description: [
              'Track task completion against schedules with live data.',
              'Identify process inefficiencies and resolve them proactively.',
              'Access project metrics anytime, from anywhere.'
              
            ],
            image: 'construction 3.jpg' // Replace with your image URL or import it
          },
          smartAutomation: {
            title: 'SMART AUTOMATION FOR PRODUCTIVITY',
            description: [
              'Monitor equipment and material usage to avoid overspending.',
              'Predict costs based on data trends to manage budgets better.',
              'Identify irregularities in material consumption and time logs.'
              
            ],
            image: 'construction 2.jpg' 
          },
          dataDrivenInsights: {
            title: 'REMOTE MONITORING',
            description: [
              'Visualize live production data instantly.',
              'Optimize processes with actionable insights.',
              'Remote factory monitoring anytime, anywhere.'
            ],
            image: '100001550.jpeg'
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
    <img src="e.png"  alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>Building Efficiency from<br /> the Ground Up</h1>
    <h4 style={{ fontWeight: '300' }}>
    Leverage smart solutions to enhance safety, streamline processes, and drive smarter construction.
    </h4>
    <Button  target="_blank" href="https://forms.gle/P7B2NMVwGstAeVea8" className="know-more-btn">Get Started</Button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See How Technology Enhance Construction</h2>
        <h6>Explore how innovative insights can optimize your space, streamline workflows, and significantly enhance overall efficiency across your operations.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kUPwOI9fDZM?si=7nJ10n37mY11ToEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    <h1 className="title2">
    Industry Insights by the Numbers</h1>
  </header>

  <div className="statistics-container2">
    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+25%</h2>
      <p className="statistic-description21">Project Schedule Adherence</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Enhanced Project Management</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-10%</h2>
      <p className="statistic-description21">Project cost</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Efficient Resource Management</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+30%</h2>
      <p className="statistic-description21">Labor Productivity</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Personalised Experiences</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-20%</h2>
      <p className="statistic-description21">Material Wastage</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Real-Time Monitoring</p>
    </div>
  </div>
</div>







<div className="app-container3">
      <div className="content3" style={{textAlign:'left'}}>
        <h1 className="title3">Enhance Safety and Precision with Argus for Construction</h1>
        <Button href="/contact" className="connect-button3" style={{backgroundColor:'white',color:'black'}}>Connect Now</Button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">
          Error Reduction through tracking tools.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">Comprehensive Monitoring of Safety and Resources</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">Progress Visualization for accurate timelines.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">
          Data Insights for informed decisions.</h3>
        </div>
      </div>
    </div>




  
    <Footer />



</div>

);
};

export default Construction;
