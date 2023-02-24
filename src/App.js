import { Switch } from "@mui/material";
import { BrowserRouter, Router, Route } from "react-router-dom";
// import { Switch,Route,Link } from 'react-router-dom';
// import { Switch} from "react-router";
import MainChat from "./components/MainChat/MainChat";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";

import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <div className="app-body">
          <SideBar />
        </div>
      </div>
    ),
  },
  {
    path: "/rooms/:roomId",
    element: (
      <div className="App">
        <div className="app-body">
          <SideBar />
          <MainChat />
        </div>
      </div>
    ),
  },
]);

function App() {

  const [ user, setUser ] = useState(null)

  return user ? <RouterProvider router={router} /> : <h1>Login</h1>
}

export default App;
