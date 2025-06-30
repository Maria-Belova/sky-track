import { Outlet } from 'react-router';
import { Header } from './ui/header/Header';

export const Layout = () => {
  return (
    <div className='p-8 h-screen w-full max-h-screen'>
      <Header />
      <Outlet />
    </div>
  );
};
