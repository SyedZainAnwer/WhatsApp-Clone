import MainChat from "./components/MainChat/MainChat";
import SideBar from "./components/SideBar/SideBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login/Login";
import { useStateValue } from "./SateProvider";
import "./App.css";

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

  const [ { user }, dispatch ] = useStateValue();

  return user ? <RouterProvider router={router} /> : <Login />
}

export default App;
