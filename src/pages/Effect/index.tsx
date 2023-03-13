import React, { useState, useLayoutEffect, useEffect } from "react";
function Effect() {
  const [test, setTest] = useState("useLayoutEffect");
  const [test1, setTest1] = useState("useEffect");

  useLayoutEffect(() => {
    if (test === "useLayoutEffect") {
      return;
    }
    setTest("我又改变了 useLayoutEffect");
  }, [test]);
  
  useEffect(() => {
    if (test1 === "useEffect") {
      return;
    }
    setTest1("我又改变了 useEffect");
  }, [test1]);
  return (
    <div>
      <div
        onClick={() => {
          setTest("我改变了 useLayoutEffect");
        }}
      >
        {test}
      </div>
      <br/>
      <br/>
      <div
        onClick={() => {
          setTest1("我改变了 useEffect");
        }}
      >
        {test1}
      </div>
    </div>
  );
}
export default Effect;
