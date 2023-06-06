import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Admin from "./pages/admin/Admin";
import AdminApp from "./pages/admin/AdminApp";
import SignIn from "./pages/SignIn";
import MainApp from "./pages/MainApp";
import ErrorPage from "./pages/error/ErrorPage";
import Order from "./pages/order/Order";
import OrderDetail from "./pages/order/OrderDetail";
import FileUpload from "./pages/file/FileUpload";
import FileList from "./pages/file/FileList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      /* 일반적인 화면 */
      {
        path: "/",
        element: <MainApp />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          { path: "/search", element: <Search /> },
          { path: "/order", element: <Order /> },
          { path: "/order/:id", element: <OrderDetail /> },
          { path: "/file/upload", element: <FileUpload /> },
          { path: "/file/list", element: <FileList /> },

        ],
      },
      /* Admin 화면 */
      {
        path: "/admin",
        element: <AdminApp />,
        children: [
          {
            index: true,
            element: <Admin />,
          },
        ],
      },
      {
        path: "/signIn",
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
        children: [
          {
            path: "/error/:code",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
