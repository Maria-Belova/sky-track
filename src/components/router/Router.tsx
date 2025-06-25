import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from './routes.data';

const Router = () => {
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
