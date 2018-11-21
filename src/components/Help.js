import React, { Component } from "react";

class Help extends Component {
  render() {
    return (
      <article className="center mw5 mw6-ns hidden ba mv4">
        <h1 class="f4 bg-near-black white mv0 pv2 ph3">
          In a Crisis Situation?
        </h1>
        <div class="pa3 bt">
          <p class="f6 f5-ns lh-copy measure mv0">
            If you find yourself in a crisis situation then please consider
            visiting the{" "}
            <a href="https://www.nhs.uk/conditions/stress-anxiety-depression/mental-health-helplines/">
              NHS helpline
            </a>{" "}
            for further guidance
          </p>
        </div>
      </article>
    );
  }
}

export default Help;
