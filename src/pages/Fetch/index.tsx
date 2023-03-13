import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:91/test", {
      mode: "cors",
    })
      .then((response) => {
        return response?.json() || {};
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch(function (err) {
        console.log("Fetch Error : %S", err);
      });
  }, []);
  return <>{data}</>;
};
export default Fetch;
