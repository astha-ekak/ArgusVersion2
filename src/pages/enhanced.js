
import './supplychain.css';
import Footer from './Footer';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
const Enhanced = () => {

   
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
        <p className="supply-subheading">THE CLIENT HIGHLIGHT</p>
        <h1 className="supply-title">Enhanced Customer <br />Support & Retail Experience</h1>
        <p className="supply-description">
    Delivering personalized, responsive interactions that cater to individual needs and exceed expectations. Our innovative solutions streamline
    <br class="responsive-br" /> service, anticipate preferences, and resolve issues swiftly, building stronger relationships, increasing customer satisfaction, and fostering
    <br class="responsive-br" /> loyalty for long-term growth.
</p>

      </div>
    </div>






    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="enhanced1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>OPTIMIZED THE CHECKOUT PROCESSES</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Higher Conversion rate by guiding customer towards key products.
    </h4>
    <ul className="featuresSupply">
    <li>Faster checkout, boost efficiency.</li>
          <li>Cut wait times, improve shopping.</li>
    </ul>
  </div>
</div>

 








    <div className="container">
      <div className="content">
      <h1>EXTENDED USER INTERACTION PERIOD</h1>
      <hr style={{maxWidth:'100%'}}></hr>
       <h4 style={{fontWeight:'300'}}>Encouraging longer visits, during higher purchase opportunities.</h4>
        <ul className="features">
          <li>Maximizing sales opportunities</li>
          <li>Better product placement insights</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="enhanced2.png" alt="Product Line" />
        
      </div>
    </div>









    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="enhanced3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>OPTIMIZE PRODUCT VISIBILITY BY 15%</h1>
    <hr style={{maxWidth:'100%'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Aligning staff resources with peak traffic for smoother operations.
    </h4>
    <ul className="featuresSupply">
    <li>Maximizing sales opportunities</li>
    <li>Better Product Placement Insights</li>
         
    </ul>
  </div>
</div>

  








  
    <Footer />
  </div>

);
};

export default Enhanced;
