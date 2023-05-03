import { Component } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./component";
import Home from "./component/pages/Home";
import About from "./component/Step/About";
import Blog from "./component/pages/Blog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home></Home>}></Route>
              <Route path="about" element={<About></About>}></Route>
              <Route path="blog" element={<Blog />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
