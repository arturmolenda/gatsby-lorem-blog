import React from "react"
import "./about.scss"
import backgroundImg from "../images/torun-panorama.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const About = () => {
  return (
    <div className="about-container">
      <div className="background-img">
        <img className="torun-img" src={backgroundImg} alt="" />
        <img
          className="author-img"
          src="https://i0.wp.com/frfars.org/wp-content/uploads/2018/12/place-holder-for-profile-picture-4.png?ssl=1"
          alt=""
        />
      </div>
      <div className="flex-container">
        <div className="author-details">
          <h3 className="name">Artur Molenda</h3>
          <p className="about-email">a.p.molenda@gmail.com</p>
          <div className="details">
            <p>Front-end Web Developer</p>
          </div>
        </div>
        <div className="links">
          <div className="about-github">
            <a
              href="https://github.com/arturmolenda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="fontAwesome-github" icon={faGithub} />
            </a>
          </div>
          <div className="about-linkedIn">
            <a
              href="https://www.linkedin.com/in/artur-molenda-16950519a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="fontAwesome-linkedIn"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <div className="line-break"></div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            optio explicabo totam quos nesciunt corrupti saepe molestiae omnis
            consequuntur. Sunt quo, tempora eveniet harum exercitationem vero ab
            aliquam sapiente autem!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
