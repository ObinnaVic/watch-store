import React, {useState} from 'react';
import { useGlobalContext } from './context';

const Contact = () => {
  const [contactInput, setContactInput] = useState('');
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const {contactModal, openContactModal, closeContactModal} = useGlobalContext();

  const submitInfo =() => {
    openContactModal();
    setContactInput('');
    setContactName('');
    setContactEmail('');
  }
    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">CONTACT</h1>
        </div>
        <div className="contact-sec">
          <div className="row">
            <div className="col-sm-12 col-lg-4 bg-dark d-flex flex-column align-items-center text-light">
              <h6>BREQUET NO.1</h6>
              <div className="mb-4 contacts">
                <p>
                  <span className="text-danger me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  2715 Ash Dr.San Jose, South Dakota 83475
                </p>
                <p>
                  <span className="text-danger me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </span>
                  (808)-555-0111
                </p>
                <p>
                  <span className="text-danger me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </span>
                  victornkire777@gmail.com
                </p>
              </div>
              <h6>BREQUET NO.2</h6>
              <div className="contacts">
                <p>
                  <span className="text-danger me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  271500 Ash Dr.San Jose, New York 163890
                </p>
                <p>
                  <span className="text-danger me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </span>
                  (808)-555-0111
                </p>
                <p>
                  <span className="text-danger me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </span>
                  nkirevictor77@gmail.com
                </p>
              </div>
              <div className="d-flex mt-4 mb-2 text-danger">
                <i className="devicon-react-original fs-1"></i>

                <i className="devicon-bootstrap-plain fs-1"></i>

                <i className="devicon-css3-plain fs-1"></i>

                <i className="devicon-materialui-plain fs-1"></i>
              </div>
            </div>
            <div className="col-sm-12 col-lg-8">
              <div className="mapouter">
                <div
                  className="gmap_canvas"
                  style={{
                    position: "relative",
                    textAlign: "right",
                    height: "400px",
                    width: "100%",
                  }}
                >
                  <iframe
                    title=' mapping'
                    width="100%"
                    height="400"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  <a href="https://putlocker-is.org">.</a>
                  <br />
                  <a href="https://www.embedgooglemap.net">
                    embed google map in html
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center p-5">
              <div className="">
                <h4 className="text-danger fw-bold">GET IN TOUCH</h4>
                <p>
                  Get through to us at any time of the day and any day of the
                  week. We are always here to response to all complaints and
                  information received. Thanks you for you cooperation.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="form">
                <input
                  type="email"
                  value={contactEmail}
                  placeholder="Enter your email"
                  className="contact-form mb-3"
                  onChange={(e) => setContactEmail(e.target.value)}
                />
                <input
                  type="text"
                  value={contactName}
                  placeholder="Enter Full Name"
                  className="contact-form mb-3"
                  onChange={(e) => setContactName(e.target.value)}
                />
                <textarea
                  className="contact-Info p-3 mb-3"
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  placeholder="Enter Question/Information"
                  cols="30"
                  rows="10"
                ></textarea>
                <button
                  className="btn rounded bg-danger"
                  onClick={() => submitInfo()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            contactModal
              ? "d-flex align-items-center justify-content-center modal"
              : "d-none"
          }
        >
          <div className="modal-info d-flex flex-column align-items-center">
            <button
              type="button"
              className="btn-close ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeContactModal()}
            ></button>
            <h2>Information Recieved.</h2>
            <p>Thank You!!</p>
          </div>
        </div>
      </div>
    );
}

export default Contact;