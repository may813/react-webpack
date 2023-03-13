import Request, { extend } from "umi-request";
import requestInterCeptor from "./interceptors/requestInterCeptor";
import responseInterCeptor from "./interceptors/responseInterCeptor";
import monitor from "./monitor";

// const CancelToken = Request.CancelToken;
// const { token, cancel } = CancelToken.source();
const controller = new AbortController(); // create a controller
const { signal } = controller; // grab a reference to its associated AbortSignal object using the AbortController.signal property
// signal.addEventListener("abort", () => {
//   console.log("cancel!");
// });
// window.addEventListener("popstate", function () {
//   console.log("popstate");
// });
let flag = false;
const request = extend({
  prefix: "http://localhost:91",
  mode: "cors",
  // cancelToken: token,
  signal,
  timeout: 500000,
  // credentials: "include",
});
request.interceptors.request.use(requestInterCeptor);
request.interceptors.response.use(responseInterCeptor);
request.use(monitor);
request.use(monitor);

// 取消请求
setTimeout(() => {
  // controller.abort(); // Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response Body, and streams.
  // cancel("cancel");
}, 1000);
export default async (url) => {
  try {
    console.log(flag)
    flag = true;
    const resp = await request(url);
  console.log(flag)
    return resp;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
// require('whatwg-fetch');

// export default ()=>{
//   console.log(self)
//   console.log(self.fetch)
// }
