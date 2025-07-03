import { Heart, SatelliteDish } from 'lucide-react';
import { ThemeToggle } from '../../ThemeToggle';
import { Link, useLocation } from 'react-router';
import { match } from 'path-to-regexp';
import { MenuItem } from './MenuItem';
import { PageUrl } from '../../../constants/pageUrl';
import { MenuButton } from './MenuButton';
import { MENU } from './menu.data';
import cn from 'clsx';

export const Header = () => {
  const location = useLocation();

  return (
    <div className='flex items-center justify-between bg-neutral-900 text-white w-full p-6 rounded-2xl'>
      <div className='flex items-center gap-14'>
        <Link to={PageUrl.HOME_PAGE} className='flex items-center gap-1 text-3xl mr-4'>
          <div>SKY</div>
          <SatelliteDish className='text-orange-300' />
          <div>TRACK</div>
        </Link>

        <div className='hidden lg:flex items-center gap-8 text-xl'>
          {MENU.map((item) => {
            return <MenuItem key={item.label} item={item} isActive={!!match(location.pathname)(item.path)} />;
          })}
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-4 text-white'>
        <Link to={PageUrl.FAVORITES}>
          <Heart
            className={cn(match(location.pathname)(PageUrl.FAVORITES) ? 'text-orange-300' : 'text-white', 'cursor-pointer')}
            fill={match(location.pathname)(PageUrl.FAVORITES) ? '#ffb86a' : 'none'}
          />
        </Link>
        <ThemeToggle />
      </div>

      <MenuButton />
    </div>
  );
};
