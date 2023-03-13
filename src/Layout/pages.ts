interface IPage {
  path: string;
  menu: string;
  children?: IPage[];
}
const pages: IPage[] = [
  {
    path: "/",
    menu: "主页",
  },
  {
    path: "/route",
    menu: "一级路由",
    children: [
      {
        path: "/route/route-child",
        menu: "二级路由",
      },
    ],
  },
  {
    path: "/intersectionObserver",
    menu: "元素是否在可视区域",
  },
  {
    path: "/loading",
    menu: "渲染大数据",
  },
  {
    path: "/fetch",
    menu: "接口请求",
  },
  {
    path: "/umiRequest",
    menu: "接口请求",
  },
  {
    path: "/effect",
    menu: "useEffect 和 useLayoutEffect",
  },
  {
    path: "/flex",
    menu: "flex 布局",
  },
  {
    path: "/grid",
    menu: "grid 布局",
  },
];
export default pages;
