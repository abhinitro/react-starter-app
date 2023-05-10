import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//stateless component

/**
 *   internal state
 *   no lifecycle
 *   faster than class component
 *
 *    mounting componentDidMount
 *    updation  componentDidUpdate
 *    unmounting componentWillUnmount
 *    useEffect(callback,array[states])
 *
 *
 */
const Blog = (props) => {
  let [state, setState] = useState({
    name: "",
    value: "",
  });

  const navigate = useNavigate();
  const click = () => {
    setState({ name: "abhilash" });
  };

  useEffect(function () {
    console.log("componentDidMount");
  }, []);

  useEffect(
    function () {
      console.log("componentDidUpdarte  =======");

      if (state.name === "abhilash") {
        navigate("/about");
      }
    },
    [state.value, state.name]
  );

  useEffect(function () {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  console.log("render");

  return (
    <div>
      Blog.js {state.value} {state.name}
      <button onClick={(e) => click()}>click me</button>
    </div>
  );
};

export default Blog;
