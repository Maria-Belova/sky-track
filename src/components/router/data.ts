import type { JSX } from 'react';
import { HomePage } from '../../pages/Home';
import { PageUrl } from '../../constants/PageUrl';

interface IRoute {
  path: string;
  component: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: PageUrl.HOME_PAGE,
    component: HomePage,
  },
];
