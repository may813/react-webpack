import React, { useEffect } from "react";
import './index.less';
const Home = () => {
  useEffect(()=>{
console.log('useEffect')
  },[])
  return <div className="home">Home12e]</div>;
};
export default Home;
