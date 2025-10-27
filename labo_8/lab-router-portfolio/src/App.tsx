import { Outlet, createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import { Slotmachine } from "./slotmachine";
import { Maaltafels } from "./Maaltafels";
import { Messages } from "./chat-messages";
import { PageNotFound } from "./page-not-found";

const Root = () => {
    return (
        <div>
            <div>
                <NavLink to="/" >Maaltafels</NavLink>
                <NavLink to="slotmachine">Slotmachine</NavLink>
                <NavLink to="messages">Messages</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <Maaltafels/>
                },
                {
                    path: "slotmachine",
                    element: <Slotmachine/>
                },
                {
                    path: "messages",
                    element: <Messages/>
                },
                {
                  path: "*",
                  element: <PageNotFound/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;  