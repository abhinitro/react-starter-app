import React, { Component } from "react";
import About from "./About";
import Intro from "./Intro";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.steps === 0 && <About />}
        {this.props.steps === 1 && <Intro />}
      </div>
    );
  }
}

export default Index;
