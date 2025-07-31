import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import AllTask from "./Tasks/AllTask";
import AllData from "./Data/AllData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "tasks",
    element: <AllTask />
  },

]);

createRoot(document.getElementById("root")).render(
  <AllData>
    <RouterProvider router={router} />
  </AllData>
);
