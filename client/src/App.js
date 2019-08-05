import React from 'react';
import './App.css';

// Component Imports
// import { Route } from "react-router-dom";
import Navigation from "./components/Navigation/index.js";
import Home from "./components/Home/index.js";


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
          <Home />
        </main>
      </div>
    );
  };
};

export default App;
