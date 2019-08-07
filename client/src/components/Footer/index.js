import React from 'react';
import "./footer.css";

// Component Imports
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">

        <div className="footer__left">
          <div className="footer__links">
            <Link to = "/about">About</Link>
            <span>-</span>
            <Link to = "/portfolio">Portfolio</Link>
            <span>-</span>
            <Link to = "/resume">Resume</Link>
          </div>
          <p className="footer__copyright">@2019, Made with React by Jonathan Lalcues</p>
        </div>

        <div className="footer__right">
          {/* Right */}
          <h3 className = "contact__header">Contact Info:</h3>
          <p>(908) 414 3555</p>
          <p>jlalucescareer123@gmail.com</p>
          <p>Los Angeles, CA</p>

          <div className="btn__container">
            <li><a href="/"><img className = "social__btn" /></a></li>
            <li><a href="/"><img className = "social__btn" /></a></li>
            <li><a href="/"><img className = "social__btn" /></a></li>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;