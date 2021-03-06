import React, { Component } from "react";
import ChallengeData from "../data/Challenges.json";
import Help from "./Help";

class Challenge extends Component {
  render() {
    const RandomChallenge =
      ChallengeData[Math.floor(Math.random() * ChallengeData.length)];
    return (
      <div className="tc">
        <div className="tc pv2">
          <h1>Welcome to 100 days of Mindfulness</h1>
          <h3>This is your challenge for today:</h3>
        </div>
        <h2 className="pv5 white f1">"{RandomChallenge}"</h2>
        <Help />
      </div>
    );
  }
}

export default Challenge;
