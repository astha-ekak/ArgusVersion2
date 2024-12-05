import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './accessibility.css';  

import Footer from './Footer';

function Accessibility() {
    


 
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


   
   
    





    

    return (
        <>
            {/* Navbar */}
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








<div className="accessibility-container">
      <h2 className="accessibility-heading">Accessibility Statement</h2>
      <p className="accessibility-paragraph">
        This statement was last updated on 25th September, 2024.
      </p>
      <p className="accessibility-paragraph">
        We at Ekak Innovations are working to make our site accessible to all people.
      </p>

      <h3 className="accessibility-subheading">What web accessibility is</h3>
      <p className="accessibility-paragraph">
        An accessible site allows visitors with disabilities to browse the site with the same or a
        similar level of ease and enjoyment as other visitors. This can be achieved with the
        capabilities of the system on which the site is operating, and through assistive
        technologies.
      </p>

      <h3 className="accessibility-subheading">Accessibility adjustments on this site</h3>
      <p className="accessibility-paragraph">
        We have adapted this site in accordance with WCAG 2.0 guidelines, and have made the site accessible
        to the level of AAA. This site's contents have been adapted to work with assistive technologies,
        such as screen readers and keyboard use. As part of this effort, we have also:
      </p>
      <ul className="accessibility-list">
        <li>Adjustable Text Size: Users can resize text for better readability without loss of functionality or content.</li>
        <li>Color Contrast: We ensure sufficient contrast between text and background elements to make content easier to read for users with visual impairments.</li>
        <li>Accessible Forms: Our forms are structured with clear labels and instructions to make them easy to understand and complete, with appropriate error messages provided.</li>
      </ul>

      <h3 className="accessibility-subheading">Accessibility arrangements in the organization</h3>
      <p className="accessibility-paragraph">
        We are continuously working to maintain and improve the accessibility of our website. This includes
        regular testing and updates to ensure compatibility with new technologies and compliance with
        accessibility guidelines.
      </p>

      <h3 className="accessibility-subheading">Requests, issues, and suggestions</h3>
      <p className="accessibility-paragraph">
        If you find an accessibility issue on the site, or if you require further assistance, you are welcome to
        contact us through the organization's accessibility coordinator:
      </p>
      <p className="accessibility-paragraph">
        <strong>contact@ekak.in</strong>
      </p>
    </div>
         





<Footer/>

        </>
    );
}

export default Accessibility;
