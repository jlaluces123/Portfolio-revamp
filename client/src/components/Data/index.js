// Assets
import TacoProject from "../../assets/taco_dashboard.webp";
import TacoProject2 from "../../assets/taco_create_lg.webp";

import FreelyProject from "../../assets/meditation_app.webp";
import FreelyProject2 from "../../assets/meditation_lg.webp";

import BlogProject from "../../assets/blog_home.webp";

import HuddleProject from "../../assets/huddle_challenge.webp";

// Text Data
import {
  tacoInDepth,
  tacoTechStack,

  freelyInDepth,
  freelyTechStack,
} from "./text.js";

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
    "secondImage": FreelyProject2,
    "inDepth": freelyInDepth(),
    "techStack": freelyTechStack(),
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