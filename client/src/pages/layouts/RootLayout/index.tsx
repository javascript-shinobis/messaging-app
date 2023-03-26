import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

export default function Rootlayout() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
}
