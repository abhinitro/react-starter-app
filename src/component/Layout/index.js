import React, { Component } from "react";
import { Footer, Header } from "..";
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";

class Index extends Component {
  render() {
    console.log(this.props,"ddddddddd")
    return (
      <div>
        <Header />
        <Container>
          <Outlet {...this.props} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Index;
