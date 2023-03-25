import { Outlet } from 'react-router-dom';
import { Card } from 'components/Card';

export default function AuthLayout() {
  return (
    <Card>
      <Outlet />
    </Card>
  );
}
