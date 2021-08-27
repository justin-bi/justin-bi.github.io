import React from "react";
import "./Contact.scss";

import Icon from "../Icon";

function Contact() {
  return (
    <section id="#contact-section">
      <div id="contact-container" className="section-container">
        <h2>Contact</h2>
        <div className="section-content">
          <div className="icon-group">
            <div className="contact-div">
              <a href="https://github.com/justin-bi">
                <Icon type="GitHub" />
              </a>
              <div className="contact-div-text">
                <a href="https://github.com/justin-bi" className="text-link">
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-div">
              <a href="https://www.linkedin.com/in/justinbi/">
                <Icon type="LinkedIn" />
              </a>
              <div className="contact-div-text">
                <a
                  href="https://www.linkedin.com/in/justinbi/"
                  className="text-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="contact-div">
              <a href="mailto:justinbi@princeton.edu" className="text-link">
                <Icon type="Email" />
              </a>
              <div className="contact-div-text">
                <a href="mailto:justinbi@princeton.edu" className="text-link">
                  Email
                </a>
              </div>
            </div>
            <div className="contact-div">
              <a href="tel:609-721-2588" className="text-link">
                <Icon type="Phone" />
              </a>
              <div className="contact-div-text">
                <a href="tel:609-721-2588" className="text-link">
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
