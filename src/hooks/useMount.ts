import { useEffect, useState } from "react";

const useMount = () => {
  const [mount, setMount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setMount(mount + 1);
//     }, 1000);
//   }, []);
  const click = ()=>{
    setMount(mount + 1)
  }
  return {
    mount,
    click
  };
};
export default useMount;
