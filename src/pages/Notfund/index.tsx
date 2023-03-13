import React, { useEffect } from "react";
import './index.less';

const Notfund = () => {
  useEffect(()=>{
console.log('useEffect')
  },[])
  return <div className="home">Notfund</div>;
};
export default Notfund;
