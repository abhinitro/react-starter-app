import React, { forwardRef, useEffect, useRef } from "react";
import UserContext from "../../context/UserContext";

const About = forwardRef((props, ref) => {
  return (
    <div>
      <UserContext.Consumer>
        {(c) => {
          return <Button name={c.name} ref={ref}></Button>;
        }}
      </UserContext.Consumer>
    </div>
  );
});

const Button = forwardRef((props, ref) => {
  useEffect(() => {
    console.log({ ref });
  }, []);
  return (
    <button
      ref={ref}
      onClick={() => {
        alert("CLick me");
      }}
    >
      {props.name}
    </button>
  );
});

export default About;
