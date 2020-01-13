import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WELCOME TO THE SMURFS!</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;
