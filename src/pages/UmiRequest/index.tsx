import React, { useEffect, useState } from "react";
import request from "../../utils/Request";

const UmiRequest = () => {
  const [data, setData] = useState();
  useEffect(() => {
    request("/test")
      .then(({ data }) => {
        setData(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);
  const onclick = () => {
    request("/test")
      .then(({ data }) => {
        setData(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };
  return <div onClick={onclick}>{data}</div>;
};
export default UmiRequest;
