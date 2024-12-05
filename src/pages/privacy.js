import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './privacy.css';  

import Footer from './Footer';

function Privacy() {
    


 
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
      <h1 className="terms-heading">Privacy Policy</h1>
      <hr className="terms-line" />
      <div className="terms-row">
        <div className="terms-column">
          <h2 className="terms-subheading">A Legal Disclaimer</h2>
        </div>
        <div className="terms-column">
  <p className="terms-paragraph">
    At Ekak Innovations, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, store, and protect your personal data when you interact with our services.
  </p>
  <p className="terms-paragraph">
    By using our website or services, you consent to the collection and use of your information in accordance with this policy. If you do not agree with this policy, please discontinue use of our services.
  </p>
  
  {/* New Section Added */}
  <p className="terms-paragraph">
    <strong className="terms-bold">Information We Collect: <br/></strong> 
    We may collect the following types of information from you when you use our services:
  </p>

  <p className="terms-paragraph">
      {/* New Section Added */}
 
    <strong className="terms-bold">Personal Information: <br/> </strong> 
    We may collect your name, email address, phone number, and address when you create an account, or contact us for support.
  </p>

  <p className="terms-paragraph">
    <strong className="terms-bold">Usage Data:  <br/></strong>
    We automatically collect information about how you interact with our website and services, such as browser type, device information, pages visited, and time spent on our site. We may also use cookies or similar tracking technologies to improve your experience.
  </p>

  <p className="terms-paragraph">
    <strong className="terms-bold">Communications:  <br/></strong> 
    If you contact us via email, phone, or other means, we may collect and store the content of your communications, along with your contact information.
  </p>
</div>



        
      </div>

 
      <hr className="terms-line" />
      <div className="terms-row">
        <div className="terms-column">
          <h2 className="terms-subheading">​How We Use Your Information</h2>
        </div>
        <div className="terms-column">
        <p className="terms-paragraph">
  
  We use the information we collect for the following purposes.To Provide and Improve:
  <br/>
  <strong className="terms-bold"><br/>Our Services:</strong> We use your information to operate and maintain our services, process orders, and provide customer support.
  <br/><br/><ul>
  <li><strong className="terms-bold">To Personalize Your Experience: <br/></strong>We may use your data to tailor content, recommendations, and promotions to your preferences.
  <br/><br/></li>
  <li><strong className="terms-bold">For Marketing and Communications:<br/></strong> With your consent, we may use your contact information to send you updates, newsletters, and promotional offers about our products and services.
  <br/><br/></li>
  <li><strong className="terms-bold">To Ensure Security and Compliance:<br/></strong> We may use your data to prevent fraudulent activities, ensure the security of our systems, and comply with legal obligations.
  <br/><br/></li></ul>

  <strong className="terms-bold"><br/>Data Sharing and Disclosure : </strong>
  
  We do not sell your personal information to third parties. However, we may share your data with the following parties under certain circumstances:
  <br/><br/><ul>
 <li><strong className="terms-bold">Service Providers:<br/></strong> We may share your information with third-party service providers who help us operate our business, such as payment processors, hosting services, and analytics providers. These providers are required to protect your data and use it only for the purposes for which it was shared.
  <br/><br/></li> 
  <li><strong className="terms-bold">Legal Compliance:<br/></strong> We may disclose your information if required to do so by law or in response to a valid legal request, such as a court order or government investigation.
  <br/><br/></li> 
  <li><strong className="terms-bold">Business Transfers:<br/></strong> In the event of a merger, acquisition, or sale of our company, your data may be transferred to the new owner as part of the transaction.
  <br/><br/></li> </ul>
  
  <strong className="terms-bold"><br/>Data Retention<br /></strong>
  <br/>
  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. After that period, your data will be deleted or anonymized.
  <br/><br/>
  
  <strong className="terms-bold"><br/>Your Rights<br /></strong>
  <br/>
  Depending on your location, you may have certain rights regarding your personal data. These may include the right to:
  <br/><br/>
  - Access and receive a copy of your personal information<br/>
  - Correct any inaccuracies in your data<br/>
  - Request the deletion of your data<br/>
  - Restrict or object to the processing of your data<br/>
  - Withdraw your consent to data processing at any time
  <br/><br/>
  To exercise any of these rights, please contact us at <a href="mailto:contact@ekak.in">contact@ekak.in</a>.
  
  
  </p>

        </div>
    </div>


 
    <hr className="terms-line" />
   
    </div>





<Footer/>

        </>
    );
}

export default Privacy;
