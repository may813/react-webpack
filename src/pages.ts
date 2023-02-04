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
    path: "/about",
    menu: "About",
    children: [
      {
        path: "/about/me",
        menu: "Me",
      },
    ],
  },
  {
    path: "/intersectionObserver",
    menu: "元素是否在可视区域",
  },
  {
    path: "/error",
    menu: "异常",
  },
  {
    path: "/loading",
    menu: "渲染大数据",
  },
];
export default pages;
