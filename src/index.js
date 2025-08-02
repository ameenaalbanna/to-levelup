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
import AllProgress from "./Progress/AllProgress";
import AllRewards from "./Rewards/AllRewards";
import AllLogin from "./Login/AllLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "tasks",
    element: <AllTask />
  },

  {
    path: "progress",
    element: <AllProgress />
  },

  {
    path: "reward",
    element: <AllRewards />
  },

  {
    path: "login",
    element: <AllLogin />
  },

]);

createRoot(document.getElementById("root")).render(
  <AllData>
    <RouterProvider router={router} />
  </AllData>
);
