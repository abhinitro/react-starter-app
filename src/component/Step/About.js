import React, { Component } from "react";

class About extends Component {

  componentWillUnmount(){
 
    console.log("About is removing");

  }
  render() {
    return <div>About</div>;
  }
}

export default About;
