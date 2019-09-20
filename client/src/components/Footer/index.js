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
            <Link className = "footer__item footer__link" to = "/">Home</Link>
            <span className = "footer__item">—</span>
            <Link className = "footer__item footer__link" to = "/about">About</Link>
            <span className = "footer__item">—</span>
            <Link className = "footer__item footer__link" to = "/resume">Resume</Link>
          </div>
          <p className="footer__copyright">©2019 Jonathan Laluces</p>
        </div>

        <div className="footer__right">
          <span className="contact__item">(908) 414 3555</span>
          <span className="contact__item">jlalucescareer123@gmail.com</span>
          <span className="contact__item">Los Angeles, CA</span>
        </div>

        {/* <div className="footer__right">
          <h3 className = "contact__header">Contact Info:</h3>
          <p>jlalucescareer123@gmail.com</p>
          <p>(908) 414 3555</p>
          <p>Los Angeles, CA</p>

          <div className="btn__container">
            <li><a href="/"><img className = "social__btn"/></a></li>
            <li><a href="/"><img className = "social__btn"/></a></li>
            <li><a href="/"><img className = "social__btn"/></a></li>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default Footer;