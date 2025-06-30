import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from './routes.data';
import { Layout } from '../Layout';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route) => {
              return <Route path={route.path} key={`route ${route.path}`} element={<route.component />} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
