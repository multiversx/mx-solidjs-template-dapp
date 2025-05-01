import { RouteNamesEnum } from 'localConstants';
import { Dashboard } from 'pages/Dashboard';
import { Disclaimer } from 'pages/Disclaimer';
import { Home } from 'pages/Home';
import { Unlock } from 'pages/Unlock';
import { RouteType } from 'types';

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home
  },
  {
    path: RouteNamesEnum.unlock,
    title: 'Unlock',
    component: Unlock
  },
  {
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard
  },
  {
    path: RouteNamesEnum.disclaimer,
    title: 'Disclaimer',
    component: Disclaimer
  }
];
