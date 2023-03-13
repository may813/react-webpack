import React from "react";
import useMount from "../../../../hooks/useMount";

const Count = () => {
  const { mount, click } = useMount();
  return (
    <>
      <div className="about">About--{mount}</div>
      <div onClick={click}>点击</div>
    </>
  );
};
export default Count;
