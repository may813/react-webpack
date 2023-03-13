import React, { useEffect } from "react";
import { intersectionObserver, scroll } from "./utils";
import styles from "./index.module.less";
const IntersectionObserver = () => {
  useEffect(() => {
    const eEle = document.getElementById("example") as Element;
    /** IntersectionObserver
    */
    // intersectionObserver.observe(eEle);
    // return () => {
    //   intersectionObserver.unobserve(eEle);
    //   intersectionObserver.disconnect();
    // };

    /** 
     * scroll
    */
    window.onscroll = function () {
      scroll(eEle);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <>
      <div className={styles.top}>
        top区域
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className={styles.bottom} id="example">
        example
      </div>
    </>
  );
};
export default IntersectionObserver;
