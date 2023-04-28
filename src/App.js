import { Component } from "react";
import "./App.css";
import { FirstComponent, Step } from "./component";

/***
 * State -variable which are mutable
 * Props - Read only
 * pass parent to child
 *
 *
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abhilash",
      class: "12",
      counter: 0,
      arr: [],
      dummy: {},
    };
    //bind
    this.onClicDiv = this.onClicDiv.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  onClicDiv() {
    this.setState({ name: "Somesh", class: "10" });
  }

  increment() {
    let { counter } = this.state;
    if (counter < 2) {
      counter++;

      this.setState({ counter });
    }
  }

  decrement() {
    let { counter } = this.state;
    if (counter !== 0) {
      counter--;

      this.setState({ counter });
    }
  }
  render() {
    return (
      <div onClick={this.onClicDiv}>
        <FirstComponent />
        <div className="container">
          <Step steps={this.state.counter} />

          <button className="left" onClick={this.increment}>
            Next
          </button>
          {this.state.counter !== 0 && (
            <button className="left" onClick={this.decrement}>
              Prev
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default App;
