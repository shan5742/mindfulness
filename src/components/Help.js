import React, { Component } from "react";

class Help extends Component {
  render() {
    return (
      <div className="help">
        <p className="tc">
          100 Days of mindfulness was designed to get you thinking about your
          mental health, your surroundings, your body and more, we are not
          professionals.
        </p>
        <p className="tc">
          If you find yourself in a crisis situation then please consider
          visiting the{" "}
          <a href="https://www.nhs.uk/conditions/stress-anxiety-depression/mental-health-helplines/">
            NHS helpline
          </a>{" "}
          for further guidance
        </p>
      </div>
    );
  }
}

export default Help;
