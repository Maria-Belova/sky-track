import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from './data';

const Router: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} key={`route ${route.path}`} element={<route.component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
