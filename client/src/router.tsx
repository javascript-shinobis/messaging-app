import { createBrowserRouter, Outlet } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Authlayout from './pages/layouts/Authlayout';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const router = createBrowserRouter([
  {
    element: <ContextProvider />,
    children: [
      {
        element: <Authlayout />,

        children: [
          { path: '/login', element: <Login /> },
          { path: '/signup', element: <Signup /> },
          { path: '/', element: <Dashboard /> },
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
