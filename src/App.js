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
      hide: [],
      check: false,
    };
    //bind
    this.onClicDiv = this.onClicDiv.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        this.setState({ hide: response });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, "After change", this.state.check);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevState, this.state.check);

    return { check: true };
  }

  componentDidUpdate(prevProps, prevState, snnap) {
    console.log("componentDIDUpdate", snnap);
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

      this.setState({ counter, check: true });
    }
  }
  render() {
    return (
      <div onClick={this.onClicDiv}>
        {this.state.hide.map((item) => {
          return <div>{item.title}</div>;
        })}
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
