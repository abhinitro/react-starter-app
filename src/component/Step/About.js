import React, { PureComponent } from "react";

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.click = this.click.bind(this);
  }

  click() {
    let counter = this.state.counter;
    counter++;
    this.setState({ counter });
  }

  render() {
    return (
      <div>
        <span>
          <button onClick={this.click}>click me</button>
          counter :{this.state.counter}
        </span>
      </div>
    );
  }
}

export default About;
