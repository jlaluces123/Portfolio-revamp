import React from 'react';
import "./home.css";

// Component Imports
// import { Link } from "react-router-dom";
import Projects from "../Projects/index.js";

// Assets
import Profile from "../../assets/cropped_smiling.webp";
import TacoProject from "../../assets/taco_dashboard.webp";
import FreelyProject from "../../assets/meditation_app.webp";
import BlogProject from "../../assets/blog_home.webp";
import HuddleProject from "../../assets/huddle_challenge.webp";

export const projectArr = [
  {
    "title": "Lets Get Tacos",
    "link": "/projects/lets-get-tacos",
    "description": "Modern Web App with CRUD functionality",
    "image": TacoProject,
  },

  {
    "title": "Freely",
    "link": "/projects/freely",
    "description": "Web App Made With React to help users relax after a long day",
    "image": FreelyProject,
  },

  {
    "title": "Thoughts Of A Developer",
    "link": "/projects/blog",
    "description": "Blog website made with React and Gatsby",
    "image": BlogProject,
  },

  {
    "title": "Huddle Landing Page Challenge",
    "link": "/projects/huddle-landing-page",
    "description": "Design turned into code front-end challenge to work on fundamentals",
    "image": HuddleProject,
  },
];


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