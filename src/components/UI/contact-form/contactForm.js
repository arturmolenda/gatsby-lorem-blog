import React from "react"
import "./contactForm.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const ContactForm = () => {
  const submitHandle = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
  }

  return (
    <div className="contact-container">
      <form
        className="form-container"
        name="netlify-form"
        data-netlify="true"
        method="post"
      >
        <input type="hidden" name="form-name" value="netlify-form" />
        <label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            required
          />
        </label>
        <label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            className="form-input"
            required
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
