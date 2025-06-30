import { Link } from 'react-router';
import type { IRoute } from '../../router/routes.data';

interface IMenuItemProps {
  isActive: boolean;
  item: IRoute;
}

export const MenuItem = ({ isActive, item }: IMenuItemProps) => {
  return (
    <div className={isActive ? 'text-orange-300' : 'text-white'}>
      <Link to={item.path}>{item.title}</Link>
    </div>
  );
};
