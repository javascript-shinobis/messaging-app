import { Outlet } from 'react-router-dom';
import { Card } from 'components/Card';

export default function Rootlayout() {
  return (
    <Card>
      <Outlet />
    </Card>
  );
}
