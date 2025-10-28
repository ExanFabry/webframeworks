import { Home } from "./Home";
import { Oefening1 } from "./Oefening1";
import { Oefening2 } from "./Oefening2";
import { Oefening3 } from "./Oefening3";
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import { ThemeContext } from "./DarkLightMode";
import { useState } from "react";
import { useContext } from "react";

function App() {
  const { theme, toggle } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "oefening1",
          element: <Oefening1/>
        },
        {
          path: "oefening2",
          element: <Oefening2/>
        },
        {
          path: "oefening3",
          element: <Oefening3/>
        }
      ]
    }
  ]);
  return (
      <>
        <body style={{backgroundColor: theme === "black" ? "#000000" : "#ffffff", color: theme === "black" ? "#ffffff" : "#000000"}}>
          <div>
            <RouterProvider router={router} />
        </div>
        <button onClick={toggle}>Dark/Light mode</button>
        </body>
      </>
  )
}
const Root = () => {
  return (
    <div>
      <div>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="oefening1">Oefening 1</NavLink>
        <NavLink to="oefening2">Oefening 2</NavLink>
        <NavLink to="oefening3">Oefening 3</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default App