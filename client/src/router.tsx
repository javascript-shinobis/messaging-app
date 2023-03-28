import { createBrowserRouter } from 'react-router-dom';

import NewChannel from 'pages/Channel/index';
import ContextProvider from 'context/Provider';
import Dashboard from 'pages/Dashboard';
import Authlayout from 'pages/layouts/AuthLayout';
import Rootlayout from 'pages/layouts/RootLayout';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

const router = createBrowserRouter([
  {
    element: <ContextProvider />,
    children: [
      {
        path: '/',
        element: <Rootlayout />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: '/channel',
            children: [{ path: 'new', element: <NewChannel /> }],
          },
        ],
      },
      {
        element: <Authlayout />,
        children: [
          { path: '/login', element: <Login /> },
          { path: '/signup', element: <Signup /> },
        ],
      },
    ],
  },
]);

export default router;
