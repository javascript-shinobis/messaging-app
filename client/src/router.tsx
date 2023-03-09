import { createBrowserRouter, Outlet } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Authlayout from "./pages/layouts/Authlayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const router = createBrowserRouter([
  {
    element: <ContextProvider />,
    children: [
      {
        element: <Authlayout />,

        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

function ContextProvider() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
