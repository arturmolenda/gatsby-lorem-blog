import React from "react"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">home</Link>
          <Link to="/articles">articles</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
        <div className="line-break"></div>
        <div className="footer-copy">
          © {new Date().getFullYear()}, Built by Artur Molenda
        </div>
      </div>
    </footer>
  )
}

export default Footer
