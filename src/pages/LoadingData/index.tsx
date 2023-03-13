import React from "react";
import { bigData } from "../../utils/math";
import { Link } from "react-router-dom";

const LoadingData = () => {
  return (
    <div>
      <ul>
        <li>全部渲染</li>
        <li>
          <Link to="/loading/scroll">通过监听可视区域来动态加载数据</Link>
        </li>
        <li>
          <Link to="/loading/time">时间分段动态加载数据</Link>
        </li>
      </ul>
      <div>
      <ul>
        {bigData.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};
export default LoadingData;
