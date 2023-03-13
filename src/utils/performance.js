const keys = [
  "navigationStart", // 0 从同一个浏览器上下文的上一个文档卸载(unload)结束时的时间戳。如果没有上一个文档，这个值会和fetchStart相同。我试了几个打开方式，发现都不能和fetchStart相等。
  "unloadEventStart", // 1 如果前一个文档和当前文档同源,返回前一个文档开始unload的时间
  "unloadEventEnd", // 2 如果前一个文档和当前文档同源,返回前一个文档开始unload结束的时间
  "redirectStart", // 3 如果有重定向,这里是重定向开始的时间.
  "redirectEnd", // 4 如果有重定向,这里是重定向结束的时间.
  "fetchStart", // 5 网页请求发起

  "domainLookupStart", // 6 查询DNS
  "domainLookupEnd", // 7 查询DNS结束

  "connectStart", // 8 建立TCP链接开始
  "connectEnd", // 9 建立TCP链接结束

  "secureConnectionStart", // 10 用于计算 SSL 连接耗时，没有用https，返回0

  "requestStart", // 11 request
  "responseStart", // 12 response
  "responseEnd", // 13 处理响应结束

  "domLoading", // 14 DOM开始加载
  "domInteractive", // 15 DOM可交互，文档解析结束的时间
  "domContentLoadedEventStart", // 16 DOM 事件开始，DOMContentLoaded开始
  "domContentLoadedEventEnd", // 17 DOM 事件结束，DOMContentLoaded结束
  "domComplete", // 18 DOM加载完成

  "loadEventStart", // 19 触发 onload事件，网络页面加载事件开始，未触发加载事件，返回0
  "loadEventEnd", // 20 网络页面加载事件结束，未触发加载结束事件，返回0
];

function analyzePerf() {
  const performance = window.performance;
  if (!performance || typeof performance !== "object") return null;
  const datas = {};

  keys.forEach((key) => {
    datas[key] = performance.timing[key];
  });

  // 使用 NT2 标准计算，safari不支持
  if (typeof window.PerformanceNavigationTiming === "function") {
    // 部分浏览器会出现performance.getEntriesByType('navigation')[0]值为空的情况
    const nt2Timing = performance.getEntriesByType("navigation")[0];
    if (nt2Timing) {
      keys.forEach((key) => {
        datas[key] = nt2Timing[key];
      });
    }
  }
  return datas;
}
function objectTransfer(data) {
  let str = "";
  for (const key in data) {
    if (!str) {
      str += `${key}=${data[key]}`;
    } else {
      str += `|${key}=${data[key]}`;
    }
  }
  return str;
}
function numFormat(num1, num2) {
  try {
    if (num1 > 0 && num2 >= 0) {
      return (num1 - num2).toFixed(2);
    }
    return 0;
  } catch (error) {
    return 0;
  }
}
function isGreater(num) {
  return num > 0 ? num : 0;
}
function reportPerformance() {
  const performance = analyzePerf();
  console.log({
    logType: "info",
    title: "analyzePerformance",
    msg: objectTransfer(performance),
  });
  const redirect = numFormat(
    performance.redirectEnd || 0,
    performance.redirectStart || 0
  ); // 4 - 3   重定向耗时
  const dns = numFormat(
    performance.domainLookupEnd || 0,
    performance.domainLookupStart || 0
  ); // 7 - 6   dns解析耗时
  const tcp = numFormat(
    performance.connectEnd || 0,
    performance.connectStart || 0
  ); // 10 - 8   tcp链接耗时
  const request = numFormat(
    performance.responseEnd || 0,
    performance.requestStart || 0
  ); // 13 - 11   资源请求加载耗时
  const dom = numFormat(
    performance.domComplete || 0,
    performance.responseEnd || 0
  ); // 18 - 13   解析dom树耗时
  const domloading = numFormat(
    performance.domInteractive || performance.domLoading || 0,
    performance.fetchStart || 0
  ); // 15/12 - 5   白屏时间
  const domready = numFormat(
    performance.domContentLoadedEventEnd || 0,
    performance.fetchStart || 0
  ); // 17 - 5 首屏时间
  const onload = numFormat(
    performance.loadEventEnd || 0,
    performance.navigationStart || 0
  ); // 完整耗时 // 20 - 0
  const result = `DNS=${isGreater(dns)}|TCP=${isGreater(
    tcp
  )}|redirect=${isGreater(redirect)}|request=${isGreater(
    request
  )}|parsingDom=${isGreater(dom)}|domloading=${isGreater(
    domloading
  )}|domready=${isGreater(domready)}|onload=${isGreater(
    onload
  )}`;
  
  if (onload === 0 || domready === 0 || onload > 60000) {
    console.log({
      logType: "error",
      title: "pagePerformance_error",
      msg: result,
    });
    return;
  }
  console.log({
    logType: "info",
    title: "pagePerformance",
    msg: result,
  });
}
reportPerformance();
