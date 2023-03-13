import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import pages from "./pages";
import Home from "../pages/Home";
import Notfund from "../pages/Notfund";
import RouteFirst from "../pages/RouteFirst";
import RouteChild from "../pages/RouteChild";
import IntersectionObserver from "../pages/IntersectionObserver";
import LoadingData from "../pages/LoadingData";
import Scroll from "../pages/LoadingData/scroll";
import Time from "../pages/LoadingData/time";
import Fetch from "../pages/Fetch";
import UmiRequest from "../pages/UmiRequest";
import Effect from "../pages/Effect";
import Grid from "../pages/Grid";
import Flex from '../pages/Flex';

import styles from "./layout.module.less";
const Menu = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className={styles.center}>
        <ul className={styles.menu}>
          {pages.map((item, i) => (
            <li key={i} className={styles.menu_item}>
              <Link to={item.path}>{item.menu}</Link>
              {item.children?.map((child, j) => (
                <div key={j} className={styles.menu_item}>
                  <Link to={child.path}>{child.menu}</Link>
                </div>
              ))}
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route index element={<Home />} />
        <Route path="route">
          <Route index element={<RouteFirst />} />
          <Route path="route-child" element={<RouteChild />} />
        </Route>
        <Route path="intersectionObserver" element={<IntersectionObserver />} />
        <Route path="loading">
          <Route index element={<LoadingData />} />
          <Route path="scroll" element={<Scroll />} />
          <Route path="time" element={<Time />} />
        </Route>
        <Route path="fetch" element={<Fetch />} />
        <Route path="umiRequest" element={<UmiRequest />} />
        <Route path="effect" element={<Effect />} />
        <Route path="flex" element={<Flex />} />
        <Route path="grid" element={<Grid />} />
      </Route>
      <Route path="*" element={<Notfund />} />
    </Routes>
  );
};
export default Layout;
