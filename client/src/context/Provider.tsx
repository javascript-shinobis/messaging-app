import { Outlet } from 'react-router-dom';

import { AuthProvider } from './AuthContext';

export default function ContextProvider() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
