
export const intersectionObserver = new IntersectionObserver(function (
  entries
) {
  if (entries[0].intersectionRatio <= 0) {
    console.log("不在可视区域");
  } else {
    console.log("已进入可视区域");
  }
});
export const scroll = (eEle) => {
  const clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight; // 视口高度
  /**
   *  offsetTop + scrollTop
   */
  // scrollTop(eEle, clientHeight);

  //getBoundingClientRect
  getBoundingClientRect(eEle, clientHeight);
};

function scrollTop(eEle, clientHeight) {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop; // 滚动条
  if (eEle.offsetTop > clientHeight + scrollTop) {
    console.log("不在可视区域");
  } else {
    console.log("已进入可视区域");
  }
}
function getBoundingClientRect(eEle, clientHeight) {
  const top = eEle.getBoundingClientRect() && eEle.getBoundingClientRect().top;
  if (top <= clientHeight) {
    console.log("已进入可视区域");
  } else {
    console.log("不在可视区域");
  }
}
