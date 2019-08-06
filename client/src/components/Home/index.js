import React from 'react';
import "./home.css";

// Component Imports
// import { Link } from "react-router-dom";
import Projects from "../Projects/index.js";
import { projectArr } from "../Data/index.js";

// Assets
import Profile from "../../assets/cropped_smiling.webp";

class Home extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.setState({ projects: projectArr });
  };

  componentDidUpdate() {
    // console.log("update occurred");
    // console.log(this.state.projects);
  };

  render() {
    return (
      <div className="home">

        {/* Intro section */}
        <div className="intro">
          <img className = "intro__pic" src = {Profile} alt = "smiling version of me" />
          <div className="intro__text">
            <h4 className = "intro__title">Front-End Web Developer & Cellist</h4>
            <h1 className = "intro__name">Hello, I am Jonathan Laluces</h1>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects">
          <Projects projects = {this.state.projects} />
        </div>
      </div>
    );
  };
};

export default Home;