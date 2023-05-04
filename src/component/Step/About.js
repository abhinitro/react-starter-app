import React, { useState, useEffect } from "react";

const About = (props) => {
  let [counter, setCount] = useState(0);

  const incremt = () => {
    setCount(counter++);
  };

  useEffect(() => {
    console.log("componentDIDMount");
  }, []);

  useEffect(() => {
    console.log("componentDIDUpdate");
  }, [counter]);

  console.log("render", props);
  return <div onClick={() => incremt()}>About {counter}</div>;
};

About.propTypes = {};

export default About;
