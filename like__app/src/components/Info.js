import React, { Component } from "react";
import Button from "./Button";

export default class Info extends Component {
  render() {
    const { title, info, score } = this.props;
    return (
      <div className="div">
        <h1>{title}</h1>
        <h3>{info}</h3>
        <p>{score}</p>
   
        <Button />
      </div>
    );
  }
}
