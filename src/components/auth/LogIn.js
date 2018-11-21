import React, { Component } from "react";

class LogIn extends Component {
  state = {
    name: undefined,
    email: undefined,
    passwordOne: undefined,
    passwordTwo: undefined,
    error: undefined
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === "" ||
      this.state.email === "" ||
      this.state.name === "";
    return (
      <div className="tc">
        <h1 className="f1">100 Days of Mindfulness</h1>
        <h2 className="f2">Log In</h2>
        <form>
          <input
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={this.state.passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={this.state.passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>

          {this.state.error && <p>{this.state.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default LogIn;
