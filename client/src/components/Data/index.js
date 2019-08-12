// Assets
import TacoProject from "../../assets/taco_dashboard.webp";
import TacoProject2 from "../../assets/taco_create_lg.webp";

import FreelyProject from "../../assets/meditation_app.webp";
import FreelyProject2 from "../../assets/meditation_lg.webp";

import GiphyClone from "../../assets/giphy_clone.webp";
import GiphyClone2 from "../../assets/giphy_clone_lg.webp";

import Ngroups from "../../assets/ngroups_project.webp";
import Ngroups2 from "../../assets/ngroups_lg.webp";

import BlogProject from "../../assets/blog_home.webp";
import BlogProject2 from "../../assets/blog_lg.webp";

// import HuddleProject from "../../assets/huddle_challenge.webp";

// Text Data
import {
  tacoInDepth,
  tacoTechStack,

  freelyInDepth,
  freelyTechStack,

  nGroupsInDepth,
  nGroupsTechStack,

  giphyInDepth,
  giphyTechStack,

  gatsbyInDepth,
  gatsbyTechStack,

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
    "demo": "https://freely-db7b0.firebaseapp.com/",
  },

  {
    "title": "Giphy Clone Side Project",
    "link": "/projects/giphy-clone",
    "description": "Taking one of my most used apps and creating a neat replica",
    "image": GiphyClone,
    "secondImage": GiphyClone2,
    "inDepth": giphyInDepth(),
    "techStack": giphyTechStack(),
    "github": "https://github.com/jlaluces123/Giphy-Clone",
    "demo": "https://giphy-clone-6a8f9.firebaseapp.com/",
  },


  {
    "title": "Neighborhood Groups Finder",
    "link": "/projects/neighborhood-groups-finder",
    "description": "Project to help my church introduce guests to the neighborhood groups to get to know them better",
    "image": Ngroups,
    "secondImage": Ngroups2,
    "inDepth": nGroupsInDepth(),
    "techStack": nGroupsTechStack(),
    "github": "https://github.com/jlaluces123/ngroups-frontend",
    "demo": "https://neighborhood-groups-finder.firebaseapp.com/",
  },

  {
    "title": "Thoughts Of A Developer",
    "link": "/projects/blog",
    "description": "Blog website made with React and Gatsby",
    "image": BlogProject,
    "secondImage": BlogProject2,
    "inDepth": gatsbyInDepth(),
    "techStack": gatsbyTechStack(),
    "github": "https://github.com/jlaluces123/Gatsby-Blog-Site-Remake",
    "demo": "https://gatsby-blog-e40ac.firebaseapp.com/",
  },

  // {
  //   "title": "Huddle Landing Page Challenge",
  //   "link": "/projects/huddle-landing-page",
  //   "description": "Design turned into code front-end challenge to work on fundamentals",
  //   "image": HuddleProject,
  //   "secondImage": HuddleProject,
  //   "inDepth": huddleInDepth(),
  //   "techStack": huddleTechStack(),
  //   "github": "https://github.com/jlaluces123/Huddle-Landing-Page-Challenge",
  //   "demo": "",
  // },

];