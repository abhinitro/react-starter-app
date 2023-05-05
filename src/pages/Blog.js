import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "",
      description: "",
    };
    this.change = this.change.bind(this);
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          onChange={(e) => this.change(e)}
          value={this.state.name}
        />

        <input
          type="text"
          name="age"
          onChange={(e) => this.change(e)}
          value={this.state.age}
        />
      </form>
    );
  }
}

export default Blog;
