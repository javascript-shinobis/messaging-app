import { createBrowserRouter } from 'react-router-dom';

import ContextProvider from './context/Provider';
import Dashboard from './pages/Dashboard';
import Authlayout from './pages/layouts/Authlayout';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
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

export default router;
