import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

export default function index() {
  return (
    <ul className={styles.wrapper}>
      <li>
        垂直排列 flex-direction: column
        <div className={classnames(styles.flex, styles.flexDirectionColumn)}>
          <div>1</div>
          <div>2</div>
        </div>
      </li>
      <li>
        拉伸 align-items: stretch
        <div className={classnames(styles.flex, styles.alignItemsStretch)}>
          <div>1</div>
          <div>2</div>
        </div>
      </li>
      <li>
        两端对齐，中间平分，align-content: space-between
        <div className={classnames(styles.flex, styles.alignCentent)}>
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
      <li>
        拉伸 align-content: stretch
        <div className={classnames(styles.flex, styles.alignCententStretch)}>
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
      <li>
        放大倍数 flex-grow: 1;
        <div className={classnames(styles.flex, styles.itemFlexGrow)}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </li>
      <li>
        缩小倍数 flex-shrink: 1;
        <div className={classnames(styles.flex, styles.itemFlexShrink)}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </li>
      <li>
        基准 flex-base: 30px;
        <div className={classnames(styles.flex, styles.itemFlexBase)}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </li>
      <li>
        子元素单独设置对其方式，align-self: flex-end
        <div className={classnames(styles.flex, styles.alignSelf)}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </li>
    </ul>
  );
}
