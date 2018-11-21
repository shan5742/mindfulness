import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="Nav tc">
        <header className="bg-black w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f4 fw6 ttu tracked">
            <a className="link dim white dib mr3" href="/" title="Home">
              Home
            </a>
            <a
              className="link dim white dib mr3"
              href="/signup"
              title="Sign Up"
            >
              Sign Up
            </a>
            <a className="link dim white dib mr3" href="/login" title="Log In">
              Log In
            </a>
            <a className="link dim white dib" href="/about" title="About">
              About
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
