import React from "react"
import "./contactForm.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const ContactForm = () => {
  const submitHandle = e => {
    e.preventDefault()
  }
  return (
    <div className="contact-container">
      <form
        className="form-container"
        method="POST"
        data-netlify="true"
        onSubmit={submitHandle}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
          />
        </label>
        <label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            className="form-input"
          />
        </label>
        <button type="submit" className="formBtn">
          Send
        </button>
      </form>
      <div className="form-line-break" />
      <div className="secondary-contact">
        <div className="location">
          <FontAwesomeIcon className="fontAwesome-icon" icon={faMapMarkerAlt} />
          <span className="location-text">Toruń | Poland</span>
        </div>
        <div className="email">
          <FontAwesomeIcon className="fontAwesome-icon" icon={faEnvelope} />
          <span className="email-text">a.p.molenda@gmail.com</span>
        </div>
        <div className="social-media">
          <a
            href="https://github.com/arturmolenda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fontAwesome-icon" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/artur-molenda-16950519a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fontAwesome-icon" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
