import React, { Component } from "react";

const ThemeHoc = (WrappedComponent) => {
  return class Index extends Component {
    constructor(props) {
      super(props);
      this.state = { color: "red" };
    }
    componentDidMount(){
       
    }
    render() {
      return <WrappedComponent color={this.state.color}></WrappedComponent>;
    }
  };
};

export default ThemeHoc;
