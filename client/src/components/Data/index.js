import React from 'react';

// Assets
import TacoProject from "../../assets/taco_dashboard.webp";
import TacoProject2 from "../../assets/taco_create_lg.webp";
import FreelyProject from "../../assets/meditation_app.webp";
import BlogProject from "../../assets/blog_home.webp";
import HuddleProject from "../../assets/huddle_challenge.webp";

function tacoInDepth() {
  return (
    <div className="description">
      <p className = "description__paragraph">
        Lets Get Tacos at its core, is a <code>Modern Web App</code>,  that aims to bring taco lovers from all over the world the ability to meet with
        other people of same interests (in tacos of course)!
      </p>

      <p className = "description__paragraph">
        Using the official <code>Yelp API</code> alongside the extensive <code>Google Maps API</code>, users can create events at REAL taco places. In addition, we made logging in easy with <code>Firebase's Authorization</code>! The hassle of signing up for random services is a thing of the past!
      </p>
    </div>
  );
};

function tacoTechStack() {
  return (
    <div className="tech">
      <p className="description__paragraph">
        For the <code>Front End</code> of the project, my group and I decided to go with what we know best: <code>React</code>, <code>Redux</code>, <code>Material-UI (for the styling)</code>, and <code>CSS</code>.
      </p>
      <p className="description__paragraph">
        <code>React paired with Redux</code> allowed us to handle our state management as well as let us reuse multiple components with ease!
      </p>
      <p className="description__paragraph">
        <code>Material UI's</code> extensive <code>component</code> library allowed us to keep a professional look and theme throughout the entire app. Also, I
        styled many of the pages incorporating <code>Responsive Design</code> to ensure a great <code>user experience</code> on any device.
      </p>

      <p className="description__paragraph">
        For the <code>Back End</code> of the project, the tech used consisted of: <code>NodeJS</code>, <code>Express + Knex</code>, <code>JSON Web Tokens</code>, <code>SQLite</code>, and <code>PostgreSQL</code>.
      </p>

      <p className="description__paragraph">
        Hosted on <code>Heroku</code>, I was able to create parts of our own <code>API</code> used to <code>filter data</code> needed on the front-end.
      </p>
    </div>
  );
};

export const projectArr = [
  {
    "title": "Lets Get Tacos",
    "link": "/projects/lets-get-tacos",
    "description": "Modern Web App with CRUD functionality",
    "image": TacoProject,
    "secondImage": TacoProject2,
    "inDepth": tacoInDepth(),
    "techStack": tacoTechStack(),
    "github": "https://github.com/Lambda-School-Labs/labs10-taco-run",
    "demo": "https://taco-run-c453f.firebaseapp.com/",
  },

  {
    "title": "Freely",
    "link": "/projects/freely",
    "description": "Web App Made With React to help users relax after a long day",
    "image": FreelyProject,
    "secondImage": "",
    "inDepth": "This project is based off the web app Brain.fm, but unlike them I wanted to create an app that can help uses relax after a long day!\n ",
    "techStack": "",
    "github": "https://github.com/jlaluces123/Freely",
    "demo": "",
  },

  {
    "title": "Thoughts Of A Developer",
    "link": "/projects/blog",
    "description": "Blog website made with React and Gatsby",
    "image": BlogProject,
    "secondImage": "",
    "inDepth": "",
    "techStack": "",
    "github": "https://github.com/jlaluces123/Gatsby-Blog-Site-Remake",
    "demo": "",
  },

  {
    "title": "Huddle Landing Page Challenge",
    "link": "/projects/huddle-landing-page",
    "description": "Design turned into code front-end challenge to work on fundamentals",
    "image": HuddleProject,
    "secondImage": "",
    "inDepth": "",
    "techStack": "",
    "github": "https://github.com/jlaluces123/Huddle-Landing-Page-Challenge",
    "demo": "",
  },
];