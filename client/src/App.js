import React from 'react';
import './App.css';

// Component Imports
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation/index.js";
import Home from "./components/Home/index.js";
import SinglePage from "./components/SinglePage/index.js";
import Footer from "./components/Footer/index.js";
import About from "./components/About/index.js";
import Resume from "./components/Resume/index.js";


class App extends React.Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    // console.log("did mount");
    // console.log(document.getElementsByClassName("hidden")[0].style.height);
  };

  handleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Navigation */}
          <Navigation visible = {this.state.visible} handleMenu = {this.handleMenu} />
        </header>

        <main>
          <Route exact path = "/" component = {Home} />
          <Route path = "/projects/:name" component = {SinglePage} />
          <Route path = "/about" component = {About} />
          <Route path = "/resume" component = {Resume} />
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  };
};

export default App;
