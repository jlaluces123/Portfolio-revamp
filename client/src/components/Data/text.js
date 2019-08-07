// This is where I will hold all the rest of the text information for Data.js to use
// Didn't like having them in one file
import React from 'react';


// Taco Project -- Text
export function tacoInDepth() {
  return (
    <div className="description">
      <p className = "description__paragraph">
        Lets Get Tacos at its core, is a <code>Modern Web App</code>,  that aims to bring taco lovers from all over the world the ability to meet with
        other people of same interests (in tacos of course)!
      </p>

      <p className = "description__paragraph">
        Using the official <code>Yelp API</code> alongside the extensive <code>Google Maps API</code>, users can create events at REAL taco places.
        In addition, we made logging in easy with <code>Firebase's Authorization</code>! The hassle of signing up for random services is a thing of the past!
      </p>
    </div>
  );
};

export function tacoTechStack() {
  return (
    <div className="tech">
      <p className="description__paragraph">
        For the <code>Front End</code> of the project, my group and I decided to go with
        what we know best: <code>React</code>, <code>Redux</code>, <code>Material-UI (for the styling)</code>, and <code>CSS</code>.
      </p>
      <p className="description__paragraph">
        <code>React paired with Redux</code> allowed us to handle our state management as well as let us reuse multiple components with ease!
      </p>
      <p className="description__paragraph">
        <code>Material UI's</code> extensive <code>component</code> library allowed us to keep a professional look and theme throughout the entire app. Also, I
        styled many of the pages incorporating <code>Responsive Design</code> to ensure a great <code>user experience</code> on any device.
      </p>

      <p className="description__paragraph">
        For the <code>Back End</code> of the project, the tech used consisted of: <code>NodeJS</code>,
        <code>Express + Knex</code>, <code>JSON Web Tokens</code>, <code>SQLite</code>, and <code>PostgreSQL</code>.
      </p>

      <p className="description__paragraph">
        Hosted on <code>Heroku</code>, I was able to create parts of our own <code>API</code> used to <code>filter data</code> needed on the front-end.
      </p>
    </div>
  );
};

// Freely Project -- Text
export function freelyInDepth() {
  return (
    <div className="description">
      <p className="description__paragraph">
        Freely is a project built with <code>React</code> that aims to relieve the user from all the stress in a day by listening to
        a playlist of meditation-type music.
      </p>

      <p className="description__paragraph">
        With the help of <code>Component Libraries</code> such as: <code>React-Animated-Slider</code> and <code>React-Audio-Player</code>
        I was able to create a meditation-app that works great on all devices!
      </p>
    </div>
  )
};

export function freelyTechStack() {
  return (
    <div className="tech">
      <p className="description__paragraph">
        With <code>React</code> I was able to create multiple components that would either <code>consume data</code> or h
        elp the <code>user interact</code> with the app.
      </p>

      <p className="description__paragraph">
        React also comes packed with the ability to use a component's <code>Lifecycle methods</code>
        which allowed me to create the playlist functionality of the app as well as load data accordingly.
      </p>

      <p className="description__paragraph">
        In addition, I paired React with <code>React-Router-DOM</code> to handle <code>Dynamic Routing</code>.
        Unlike most apps built in Express, or Angular, React-Router-DOM allows you to take the <code>component composition</code> route that React is based off of.
      </p>

      <p className="description__paragraph">
        <code>React-Animated-Slider</code> and <code>React-Audio-Player</code> allowed me to create a better <code>User experience</code> in the meditation page.
        I thought it would be a good idea to incorporate some amazing quotes as the user listens to the soothing sounds of music.
      </p>
    </div>
  );
};