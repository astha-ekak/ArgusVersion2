import React, { useState } from 'react';
import './navbar.css'; 

const NewsletterForm = () => {
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const email = event.target.EMAIL.value;
  
    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.REACT_APP_API_KEY,
        },
        body: JSON.stringify({
          email: email,
          listIds: [5], // Ensure this is the correct list ID
          updateEnabled: true,
        }),
      });
  
      const data = await response.json();
      console.log("Response data:", data); // Log the response data
  
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Subscription failed:', data);
        alert(`Subscription failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error('Error in fetch:', error);
      alert('An error occurred. Check console for details.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#EFF2F7' }}>
      <div id="sib-form-container" className="sib-form-container">
        <div
          id="sib-container"
          className="sib-container--large sib-container--vertical"
          style={{
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '500px',
            fontFamily:'"Poppins",sans-serif',
           
          }}
        >
          {submitted ? (
            <div style={{ padding: '2px 0', fontSize: '16px', color: '#3C4858' }}>
              <p>Thank you for subscribing! Please check your email to confirm your subscription.</p>
            </div>
          ) : (
            <form
              id="sib-form"
              method="POST"
              action="https://dc14c2ac.sibforms.com/serve/MUIFAJ4IIzh9kiWnHNtDGXCTjjW01KohA0TZGS8dd2m0uM0qpp33LA_3qRZHLPzVAch9JLcS89Y4ZNTqmm2FveWd72Ug2JLNTFVPXVAj-IUDi-R88abDhujhEiNTUlGy3xyPTyJgu7gBY31U0v6yXprAWjAp_3wYCh_KeTD8bo-TuXIJGSRCLHoXTFelT0weaRIHtJeYkMswzUxG"
              onSubmit={handleSubmit}
            >
              <div style={{ padding: '0px 0' }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: '20px',
                    textAlign: 'left',
                    fontWeight: 500,
                    fontFamily: "'Poppins',sans-serif",
                    color: 'black',
                    backgroundColor: 'transparent',
                  }}
                >
                  <p style={{marginLeft:'10px',color:'#111',marginTop:'0px ',fontFamily: '"Poppins",sans-serif',fontWeight:'500'}}>NEWSLETTER</p>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: '12px',
                    textAlign: 'left',
                    fontFamily: 'Trebuchet MS, sans-serif',
                    color: 'black',
                    backgroundColor: 'transparent',
                  }}
                >
                  <div className="sib-text-form-block">
                    <p style={{marginLeft:'10px',fontFamily:'Poppins,sans-serif'}}>Subscribe to our newsletter and <br/>stay updated.</p>
                  </div>
                </div>
              </div>
              <div >
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        style={{
                         marginRight:'0px',
                        marginLeft:'10px',
                          fontWeight: 200,
                          textAlign: 'left',
                          fontSize: '12px',
                          fontFamily: 'Poppins,sans-serif',
                          color: 'black',
                         
                        }}
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        Enter your email address to subscribe
                      </label>
                      <div className="entry__field">
                        
                        <input
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="email"
                          data-required="true"
                          style={{ color: 'black',border:'none' }}
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: '14px',
                        textAlign: 'left',
                        fontFamily: '"Poppins",sans-serif',
                        color: '#661D1D',
                        backgroundColor: '#FFEDED',
                        
                        borderColor: '#FF4949',
                      }}
                    ></label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ textAlign: 'left',marginLeft:'10px' }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: '14px',
                      textAlign: 'center',
                      padding:'5px',
                      fontWeight: 500,
                      fontFamily: 'Trebuchet MS, sans-serif',
                      color: 'white',
                      backgroundColor: '#0097B2',
                      borderRadius: '20px',
                      borderWidth: 0,
                      width:'100px',
                    }}
                    form="sib-form"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                  </button>
                </div>
              </div>
              
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
