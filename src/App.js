import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Challenge from "./components/Challenge";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: "auto" }}>
          <Nav />
          <Challenge />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
