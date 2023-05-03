import React, { Component } from "react";
import { Footer, Header } from "..";
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Index;
