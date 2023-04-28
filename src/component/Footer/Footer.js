import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { count } = this.props;
    return <div>Footer {count}</div>;
  }
}

export default Footer;
