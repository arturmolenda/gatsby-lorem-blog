import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./navbar.scss"

const Header = ({ siteTitle }) => {
  const [dropDownClass, setDropDownClass] = useState("nav-links")
  const [hamburgerToX, setHamburgerToX] = useState("hamburger")
  // Handle for navbar and hamburger icon on smaller screen sizes
  const dropDownHandle = () => {
    if (dropDownClass === "nav-links") {
      setDropDownClass("nav-links nav-links-open")
      setHamburgerToX("hamburger hamburger-open")
    } else {
      setDropDownClass("nav-links")
      setHamburgerToX("hamburger")
    }
  }

  return (
    <nav className="navbar">
      <button className={hamburgerToX} onClick={dropDownHandle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <ul className={dropDownClass}>
        <li>
          <h4>
            <Link
              to="/"
              className="link"
              onClick={hamburgerToX.split.length === 2 && dropDownHandle}
            >
              home
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link
              to="/articles"
              className="link"
              onClick={hamburgerToX.split.length === 2 && dropDownHandle}
            >
              articles
            </Link>
          </h4>
        </li>
        <li>
          <h1>
            <Link
              to="/"
              className="link logo"
              onClick={hamburgerToX.split.length === 2 && dropDownHandle}
            >
              {siteTitle}
            </Link>
          </h1>
        </li>
        <li>
          <h4>
            <Link
              to="/about"
              className="link"
              onClick={hamburgerToX.split.length === 2 && dropDownHandle}
            >
              about
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link
              to="/contact"
              className="link"
              onClick={hamburgerToX.split.length === 2 && dropDownHandle}
            >
              contact
            </Link>
          </h4>
        </li>
      </ul>
    </nav>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
