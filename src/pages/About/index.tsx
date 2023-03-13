import React from "react";
import useMount from "../../hooks/useMount";
import Count from "./components/Count";
import "./index.less";
const About = () => {
  const { mount } = useMount();
  return (
    <>
      <div className="about">About--{mount}</div>
      <Count />
    </>
  );
};
export default About;
