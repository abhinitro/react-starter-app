import { Component } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./component";
import { routes } from "./routes/frontend";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout {...this.props} />}>
              {routes.map((item) => {
                return (
                  <Route
                    path={item.path}
                    element={<item.element {...this.props} auth={true} />}
                    key={item.id}
                  ></Route>
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
