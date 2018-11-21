import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Challenge from "./components/Challenge";
import Help from "./components/Help";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";

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
          </div>
          <Help />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
