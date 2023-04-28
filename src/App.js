import { Component } from "react";
import "./App.css";
import { FirstComponent, Footer } from "./component";

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
      arr:[],
      dummy:{}
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
    counter++;

    this.setState({ counter });
  }

  decrement() {
    let { counter } = this.state;
    counter--;

    this.setState({ counter });
  }
  render() {
    return (
      <div onClick={this.onClicDiv}>
        {this.state.counter === 0 && <FirstComponent />}
        <p>Counter :{this.state.counter}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}> -</button>
        <Footer count={this.state.counter} />
      </div>
    );
  }
}
export default App;
