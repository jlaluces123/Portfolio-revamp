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

// --------------------------------------------------------------------------------------------------------------------------------------------

// Freely Project -- Text
export function freelyInDepth() {
  return (
    <div className="description">
      <p className="description__paragraph">
        Freely is a project built with <code>React</code> that aims to relieve the user from all the stress in a day by listening to
        a playlist of meditation-type music.
      </p>

      <p className="description__paragraph">
        With the help of <code>Component Libraries</code>, I used <code>React-Animated-Slider</code> and <code>React-Audio-Player</code>
        and was able to create a meditation-app that works great on all devices!
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

// --------------------------------------------------------------------------------------------------------------------------------------------

// Giphy Project -- Text
export function giphyInDepth() {
  return (
    <div className="description">
      <p className = "description__paragraph">
        Giphy is something I have used quite a bit during my spare time, so I thought why not try to recreate it? Using there
        <code>Official API</code>, I was able to make a plethora of <code>API Calls</code> from my front end code!
      </p>

      <p className="description__paragraph">
        With the help of the <code>Giphy SDK</code> (software development kit) and <code>Official Giphy API</code>, I brought one of my most
        favorite side projects to life! The app features the ability to: <code>dynamically search</code> for Gifs, see the most
        trending gifs, as well as view stickers!
      </p>
    </div>
  );
};

export function giphyTechStack() {
  return (
    <div className="tech">
      <p className="description__paragraph">
        For hosting, I decided to go with <code>Firebase's Hosting Service</code> this time around. With Firebase, it was
        super easy to host my react code and comes with a plethora of services like authorization which could come in handy for the future.
      </p>

      <p className="description__paragraph">
        Since I knew this application would have more than one page, I decided to go with <code>React-Router-DOM</code> as it provides, in my opinion, the best way to handle routing dynamically.
      </p>


      <p className="description__paragraph">
        Using <code>React's State</code> and <code>Component Lifecycle Methods</code>, I was able to <code>fetch data</code> from the API, and pass out the
        information my components need accordingly.
      </p>
    </div>
  );
};

// --------------------------------------------------------------------------------------------------------------------------------------------

export function nGroupsInDepth() {
  return (
    <div className="description">
      <p className = "description__paragraph">
        Brought up to me by one of my friends, we decided to get rid of the old clunky system to find neighborhood groups and create our own new and improved version!
      </p>

      <p className="description__paragraph">
        Currently a work in progress, we paired <code>React</code> on the front end with <code>Python</code> and <code>Django</code> on the backend!
      </p>
    </div>
  );
};

export function nGroupsTechStack() {
  return (
    <div className="tech">
      <p className="description__paragraph">
        Lets start with the front end. I created the front end code with React. With the use of the <code>Fetch API</code>, I was able to
        pull data from the backend that was made. The fetch API uses <code>JavaScript Promises</code> to handle <code>Asynchronous</code> responses, which allowed me to use one of my favorite things about React: t
        he <code>Component Life Cycle Methods</code>!
      </p>

      <p className="description__paragraph">
        Using the fetch API, I made an API call inside the <code>componentDidMount()</code> lifecycle method to <code>store data in state</code>!
        Using the component's state I was able to pass <code>properties</code> down to other components that consumed them.
      </p>


      <p className="description__paragraph">
        With the data handling out of the way, the web app also features <code>Responsive</code> design, to ensure the best <code>User Experience</code> whether on your desktop, or on the go!
      </p>
    </div>
  );
};



// --------------------------------------------------------------------------------------------------------------------------------------------

// Huddle Project -- Text
export function huddleInDepth() {
  return (
    <div className="description">
      <p className = "description__paragraph">
        It is time for some good old <code>HTML</code> and <code>CSS</code>! From <code>frontendmentor.io</code>, I took up one of the challanges to create a
        landing page given the assets and an empty html file.
      </p>

      <p className = "description__paragraph">
        Using the <code>design</code>, I created the HTML code with the help of <code>Flexbox</code>! This side project is meant to test my fundamentals in:
        <code>Responsive Development for Mobile</code> and <code>cleanliness of code</code>.
      </p>
    </div>
  );
};

export function huddleTechStack() {
  return (
    <div className="tech">
      <p className="description__paragraph">
        Surprise! There is no special magic that I used to create this project. With "Plain Jane" HTML and CSS, I was able to turn <code>deisgn into code</code>!
      </p>

      <p className="description__paragraph">
        Alongside HTML and CSS, I used <code>Flexbox</code>, a layout-method used to help shift content on the page! Instead of making redundant code,
        Flexbox allows me to space content and containers with ease, leaving me with <code>DRY</code> code.
      </p>
    </div>
  );
};