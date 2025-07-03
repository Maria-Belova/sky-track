import { Link } from 'react-router';
import type { IMenuItem } from './menu.data';

interface IMenuItemProps {
  isActive: boolean;
  item: IMenuItem;
}

export const MenuItem = ({ isActive, item }: IMenuItemProps) => {
  return (
    <div className={isActive ? 'text-orange-300' : 'text-white'}>
      <Link to={item.path}>{item.label}</Link>
    </div>
  );
};
