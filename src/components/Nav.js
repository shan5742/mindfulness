import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="Nav tc">
        <header className="bg-light-blue w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f4 fw6 ttu tracked">
            <a className="link dim black dib mr3" href="#" title="Home">
              Home
            </a>
            <a className="link dim black dib mr3" href="#" title="About">
              Sign Up
            </a>
            <a className="link dim black dib mr3" href="#" title="Store">
              Sign In
            </a>
            <a className="link dim black dib" href="#" title="Contact">
              About
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
