import { PageUrl } from '../../../constants/pageUrl';

export interface IMenuItem {
  path: string;
  label: string;
}

export const MENU: IMenuItem[] = [
  {
    path: PageUrl.HOME_PAGE,
    label: 'Home',
  },
  {
    path: PageUrl.MY_FLIGHTS,
    label: 'Flights',
  },
  {
    path: PageUrl.INFORMATION,
    label: 'Information',
  },
  {
    path: PageUrl.CONTACTS,
    label: 'Contacts',
  },
];
