import React from "react";
import ReactDOM from "react-dom/client";
import index from "./App";
import Header from "./components/Header";
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contactus',
    element: <Contactus />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
