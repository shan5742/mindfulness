import React, { Component } from "react";
import ChallengeData from "../data/Challenges.json";

class Challenge extends Component {
  render() {
    const RandomChallenge =
      ChallengeData[Math.floor(Math.random() * ChallengeData.length)];
    return (
      <div className="tc">
        <div className="tc pv2">
          <h1>Welcome to 100 days of Mindfulness</h1>
          <h4>This is your challenge for today:</h4>
        </div>
        <h2 className="pv5 white f1">"{RandomChallenge}"</h2>
      </div>
    );
  }
}

export default Challenge;
