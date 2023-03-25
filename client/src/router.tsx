import { createBrowserRouter } from 'react-router-dom';

import ContextProvider from './context/Provider';
import Dashboard from './pages/Dashboard';
import Authlayout from './pages/layouts/AuthLayout';
import Rootlayout from './pages/layouts/RootLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    element: <ContextProvider />,
    children: [
      {
        path: '/',
        element: <Rootlayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
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

export default router;
