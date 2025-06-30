import type { JSX } from 'react';
import { HomePage } from '../../pages/Home';
import { PageUrl } from '../../constants/pageUrl';
import { FlightsPage } from '../../pages/Flights';
import { InfoPage } from '../../pages/Info';
import { ContactsPage } from '../../pages/Contacts';

export interface IRoute {
  path: string;
  component: () => JSX.Element;
  title: string;
}

export const routes: IRoute[] = [
  {
    path: PageUrl.HOME_PAGE,
    component: HomePage,
    title: 'Home',
  },
  {
    path: PageUrl.MY_FLIGHTS,
    component: FlightsPage,
    title: 'Flights',
  },
  {
    path: PageUrl.INFORMATION,
    component: InfoPage,
    title: 'Information',
  },
  {
    path: PageUrl.CONTACTS,
    component: ContactsPage,
    title: 'Contacts',
  },
];
