import React, { useState } from 'react';

const NewsletterForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setLoading(true); // Show a loading state

    // Collect form data
    const formData = new FormData(event.target);

    try {
      // Send the form data to the server
      const response = await fetch('https://dc14c2ac.sibforms.com/serve/MUIFAJ4IIzh9kiWnHNtDGXCTjjW01KohA0TZGS8dd2m0uM0qpp33LA_3qRZHLPzVAch9JLcS89Y4ZNTqmm2FveWd72Ug2JLNTFVPXVAj-IUDi-R88abDhujhEiNTUlGy3xyPTyJgu7gBY31U0v6yXprAWjAp_3wYCh_KeTD8bo-TuXIJGSRCLHoXTFelT0weaRIHtJeYkMswzUxG', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Set submission state to true to show the thank you message
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false); // Reset state after a delay
        }, 5000); // Adjust the delay as needed
      } else {
        // Handle errors (optional)
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Hide the loading state
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
            backgroundColor: 'rgba(255,255,255,1)',
            maxWidth: '540px',
            borderRadius: '3px',
            borderWidth: '1px',
            borderColor: '#C0CCD9',
            borderStyle: 'solid',
          }}
        >
          {submitted ? (
            <div style={{ padding: '8px 0', fontSize: '16px', color: '#3C4858' }}>
              <p>Thank you for subscribing! Please check your email to confirm your subscription.</p>
            </div>
          ) : (
            <form
              id="sib-form"
              method="POST"
              action="https://dc14c2ac.sibforms.com/serve/MUIFAJ4IIzh9kiWnHNtDGXCTjjW01KohA0TZGS8dd2m0uM0qpp33LA_3qRZHLPzVAch9JLcS89Y4ZNTqmm2FveWd72Ug2JLNTFVPXVAj-IUDi-R88abDhujhEiNTUlGy3xyPTyJgu7gBY31U0v6yXprAWjAp_3wYCh_KeTD8bo-TuXIJGSRCLHoXTFelT0weaRIHtJeYkMswzUxG"
              onSubmit={handleSubmit}
            >
              <div style={{ padding: '8px 0' }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: '22px',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontFamily: 'Trebuchet MS, sans-serif',
                    color: '#3C4858',
                    backgroundColor: 'transparent',
                  }}
                >
                  <p>Newsletter</p>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: '14px',
                    textAlign: 'left',
                    fontFamily: 'Trebuchet MS, sans-serif',
                    color: '#3C4858',
                    backgroundColor: 'transparent',
                  }}
                >
                  <div className="sib-text-form-block">
                    <p>Subscribe to our newsletter and stay updated.</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        style={{
                          fontWeight: 700,
                          textAlign: 'left',
                          fontSize: '14px',
                          fontFamily: 'Helvetica, sans-serif',
                          color: '#3C4858',
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
                          placeholder="EMAIL"
                          data-required="true"
                          style={{ color: 'black' }}
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: '16px',
                        textAlign: 'left',
                        fontFamily: 'Helvetica, sans-serif',
                        color: '#661D1D',
                        backgroundColor: '#FFEDED',
                        borderRadius: '3px',
                        borderColor: '#FF4949',
                      }}
                    ></label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ textAlign: 'left' }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontFamily: 'Trebuchet MS, sans-serif',
                      color: '#FFFFFF',
                      backgroundColor: '#0097B2',
                      borderRadius: '3px',
                      borderWidth: 0,
                    }}
                    form="sib-form"
                    type="submit"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                  </button>
                </div>
              </div>
              <input type="text" name="email_address_check" value="" className="input--hidden" />
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
