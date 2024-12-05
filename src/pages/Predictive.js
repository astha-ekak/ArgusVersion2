
import './supplychain.css';
import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

const Predictive = () => {

   
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
        <p className="supply-subheading">THE ASSEST INSIGHT</p>
        <h1 className="supply-title">Predictive Maintenance &<br/>
Machine Performance
Monitoring</h1>
<p className="supply-description">
    Utilizing advanced analytics and AI to predict equipment failures before they happen, ensuring minimal downtime and maximizing operational
    <br class="responsive-br" /> efficiency. Our solutions monitor asset health in real-time, optimize maintenance schedules, reduce costs, and extend equipment lifespan, driving
    <br class="responsive-br" /> productivity and business continuity.
</p>

      </div>
    </div>







    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="predictive1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>CUT MACHINE DOWNTIME BY 50% WITH PREDICTIVE<br /> MAINTENANCE</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Implement strategies for continuous operation and minimizing unexpected failures and save  <br class="responsive-br" />thousands in downtime costs.
    </h4>
    <ul className="featuresSupply">
    <li>Catching issues early, preventing halts.</li>
    <li>Save thousands in downtime costs.</li>
    </ul>
  </div>
</div>




    <div className="container">
      <div className="content">
      <h1>BOOST WORKPLACE SAFETY BY 70% WITH EARLY <br />DETECTION</h1>
      <hr style={{maxWidth:'100%'}}></hr>
       <h4 style={{fontWeight:'300'}}>Identify equipment issues early to prevent failures and enhance safety.</h4>
        <ul className="features">
          <li>Zero Accident, Zero Penalty Fines</li>
          <li>Prevent Near Misses effectively</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="predictive2.png" alt="Product Line" />
        
      </div>
    </div>






    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="predictive3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>ENHANCE ASSEST LONGEVITY BY 40%</h1>
    <h4 style={{ fontWeight: '300' }}>
    <hr style={{maxWidth:'100%'}}></hr>
    Boost lifespan of equipment by 20-40% through timely maintenance.
    </h4>
    <ul className="featuresSupply">
    <li>Avoid Unnecessary Capital Investment</li>
    <li>Maintain Ideal Operating Condition</li>
    </ul>
  </div>
</div>

    











  
    <Footer />
  </div>

);
};

export default Predictive;
