import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './terms.css';  

import Footer from './Footer';

function Terms() {
    


 
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

         


{/* second section */}
<div className="terms-container">
      <h2 className="terms-heading">Terms & Conditions</h2>

      <div className="terms-section">
        <h3 className="terms-subheading">A Legal Disclaimer</h3>
        <p className="terms-paragraph">
          Welcome to Ekak Innovations. By accessing or using our website, products, or services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any of these terms, please do not use our services. By using Ekak Innovations’s services, you confirm that you are at least 18 years old or have the permission of a legal guardian, and that you have the legal authority to enter into these terms on behalf of yourself or the organization you represent.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="terms-subheading">Use of Services</h3>
        <p className="terms-paragraph">
          You agree to use our services responsibly and not engage in any unlawful activities. This includes, but is not limited to, creating an account using false information, sharing your account details with unauthorized users, or using our platform for any activities that violate applicable laws. Ekak Innovations reserves the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="terms-subheading">Intellectual Property</h3>
        <p className="terms-paragraph">
          All content, software, designs, and trademarks displayed on our platform are the intellectual property of Ekak Innovations or our partners. You may not reproduce, distribute, modify, or create derivative works of any content or materials without our express permission.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="terms-subheading">Privacy and Data Collection</h3>
        <p className="terms-paragraph">
          We respect your privacy and are committed to protecting your personal data. By using our services, you consent to the collection and use of your information as described in our [Privacy Policy]. Please review our policy to understand how we handle your data and what measures we take to protect it.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="terms-subheading">Limitation of Liability</h3>
        <p className="terms-paragraph">
          We strive to provide reliable and efficient services, but we do not guarantee that our services will be error-free or uninterrupted. In no event will Ekak Innovations be held liable for any direct, indirect, or consequential damages resulting from your use of our services. This includes any loss of data, business, or profits, regardless of the cause.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="terms-subheading">Changes to Terms</h3>
        <p className="terms-paragraph">
          We may update these Terms and Conditions periodically to reflect changes in our services, policies, or legal requirements. When we make changes, the revised terms will be posted on this page, and the effective date will be updated accordingly. Your continued use of our services after any changes indicates your acceptance of the new terms.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="terms-subheading">Contact Us</h3>
        <p className="terms-paragraph">
          If you have any questions or concerns regarding these Terms, please contact us at contact@ekak.in.
        </p>
      </div>
    </div>


<Footer/>

        </>
    );
}

export default Terms;
