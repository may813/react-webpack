import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import pages from "./pages";
import Home from "./pages/Home";
import Notfund from "./pages/Notfund";
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
      </Route>
      <Route path="*" element={<Notfund />} />
    </Routes>
  );
};
export default Layout;
