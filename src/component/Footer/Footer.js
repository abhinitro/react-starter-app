import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { counter } = this.props;
    return <div>Footer {counter}</div>;
  }
}

export default Footer;
