import React from 'react';
import "./navigation.css";

// Component Imports
import { NavLink, Link } from "react-router-dom";

// Assets

const Navigation = (props) => {
  return (
    <div className="container">
      <div className="navigation">
        <Link className = "navigation__home" to = "/">Jonathan Laluces</Link>
        <button className="navigation__btn" onClick = {props.handleMenu}>&#9776;</button>
      </div>

      <div onClick = {props.handleMenu} className = {props.visible ? "fullHeight" : "noHeight"} id = "hidden-nav">
        {/* <button className="hidden__close" onClick = {props.handleMenu}>&times;</button> */}

        <div className="hidden__container">
          <div className="hidden__content">
            <Link className = "hidden__btn" to = "/">Home</Link>
            <Link className = "hidden__btn" to = "/about">About</Link>
            <Link className = "hidden__btn" to = "/portfolio">Portfolio</Link>
            <Link className = "hidden__btn" to = "/resume">Resume</Link>
          </div>

          <div className="hidden__contact">
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
    </div>
  );
}

export default Navigation;