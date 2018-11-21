import React, { Component } from "react";
import Help from "./Help";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="tc f1 black">What's all This?</h1>
        <h2 className="tc f3 black">About 100 Days of Mindfulness</h2>
        <p className="tc white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          omnis cum, fugit, quas ad porro impedit a est illum saepe itaque
          recusandae laborum accusantium distinctio possimus rem! Quos, tempora
          ad.
        </p>
        <p className="tc white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          omnis cum, fugit, quas ad porro impedit a est illum saepe itaque
          recusandae laborum accusantium distinctio possimus rem! Quos, tempora
          ad.
        </p>
        <p className="tc white mb7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          omnis cum, fugit, quas ad porro impedit a est illum saepe itaque
          recusandae laborum accusantium distinctio possimus rem! Quos, tempora
          ad.
        </p>

        <Help />
      </div>
    );
  }
}

export default About;
