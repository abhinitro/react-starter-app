import React, { Component } from "react";

class FirstComponent extends Component {
  render() {
    return (
      <div id="nav">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About">About Us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FirstComponent;
