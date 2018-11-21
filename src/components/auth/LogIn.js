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
        <h1 className="f1 tc">Log In</h1>
        <article class="pa4 black-80">
          <p className="f4">
            Please enter your email address and password below to log in
          </p>
          <form>
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="name">
                  Email Address
                </label>
                <input
                  class="pa2 input-reset ba bg-white w-100 measure"
                  name="name"
                  value={this.state.email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Please enter your email"
                />
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  class="pa2 input-reset ba bg-white w-100 measure"
                  name="passwordOne"
                  value={this.state.passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Please enter your Password"
                />
              </div>
            </fieldset>
            <div class="mt3">
              <input
                class="b ph3 pv2 input-reset ba b--black bg-black white grow pointer f6"
                type="submit"
                value="Log In"
              />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default LogIn;
