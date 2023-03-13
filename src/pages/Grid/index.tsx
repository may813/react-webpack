import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

export default function index() {
  return (
    <ul className={styles.wrapper}>
      <li>
        <div className={classnames(styles.grid)}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </li>
    </ul>
  );
}
