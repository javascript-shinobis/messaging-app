import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";

import Authlayout from "./pages/layouts/Authlayout"
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const router = createBrowserRouter([
    {
        element: <Authlayout />,
        children: [
            {path: "login", element: <Login />},
            {path: "signup", element: <Signup />}
        ]
    }
])