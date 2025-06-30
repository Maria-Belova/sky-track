import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { routes as menu } from '../../router/routes.data';
import { MenuItem } from './MenuItem';
import { match } from 'path-to-regexp';
import { useLocation } from 'react-router';
import { ThemeToggle } from '../../ThemeToggle';

export const MenuButton = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return isMenuOpen ? (
    <div className='lg:hidden bg-neutral-900 rounded-2xl p-8 fixed top-8 left-8 w-full' style={{ maxWidth: 'calc(100% - 64px)' }}>
      <div className='w-full flex justify-end'>
        <X size={40} className='cursor-pointer' onClick={() => setIsMenuOpen(false)} />
      </div>

      <div className='flex flex-col items-center gap-4 text-lg'>
        {menu.map((item) => {
          return <MenuItem isActive={!!match(item.path)(location.pathname)} item={item} key={item.title} />;
        })}
      </div>

      <div className='border-1 border-white my-8 px-8'></div>

      <div className='flex items-center gap-4 text-white justify-center'>
        <Heart className='cursor-pointer' />
        <ThemeToggle />
      </div>
    </div>
  ) : (
    <div className='lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(true)}>
      <Menu size={40} />
    </div>
  );
};
