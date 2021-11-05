import IRoute from './interfaces/routes';
import Achievements from './pages/Achievements';
import Content from './pages/Content';
import Doubts from './pages/Doubts';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Performance from './pages/Performance';
import StartLearn from './pages/StartLearn';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Overview',
    component: Overview,
    exact: true,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/study',
    name: 'Study',
    component: StartLearn,
    exact: true,
  },
  {
    path: '/contents/:id',
    name: 'Content',
    component: Content,
    exact: true,
  },
  {
    path: '/doubts',
    name: 'Doubts',
    component: Doubts,
    exact: true,
  },
  {
    path: '/performance',
    name: 'Performance',
    component: Performance,
    exact: true,
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
    exact: true,
  },
];

export default routes;
