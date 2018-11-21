import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Challenge from "./components/Challenge";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: "auto" }}>
            <Nav />
            <Route exact path="/" component={Challenge} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
