import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./useReducer";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
// import { Provider } from "react-redux";
// import store from "./store";
// import { registerMicroApps, start } from 'qiankun';

// registerMicroApps([
//   {
//     name: 'react app1', // app name registered
//     entry: '//localhost:7100',
//     container: '#yourContainer',
//     activeRule: '/yourActiveRule',
//   },
//   {
//     name: 'react app2',
//     entry: { scripts: ['//localhost:7100/main.js'] },
//     container: '#yourContainer2',
//     activeRule: '/yourActiveRule2',
//   },
// ]);

// start();
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);
createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router}>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  // </RouterProvider>
);
