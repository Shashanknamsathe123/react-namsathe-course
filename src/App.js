import React from "react";
import ReactDOM from "react-dom/client";
import index from "./App";
import Header from "./components/Header";
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import RestaurentMenu from "./components/RestaurentMenu";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contactus',
        element: <Contactus />
      },
      {
        path: '/restaurents/:resId',
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
