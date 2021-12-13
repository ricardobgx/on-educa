import IRoute from '../interfaces/IRoute';
import Achievements from '../pages/Achievements';
import Content from '../pages/Content';
import Contents from '../pages/Contents';
import Doubts from '../pages/Doubts';
import Duel from '../pages/Duel';
import DuelCongratulations from '../pages/DuelCongratulations';
import DuelQuestions from '../pages/DuelQuestions';
import DuelResults from '../pages/DuelResults';
import Duels from '../pages/Duels';
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Missions from '../pages/Missions';
import NewContent from '../pages/NewContent';
import NewDuel from '../pages/NewDuel';
import Overview from '../pages/Overview';
import Performance from '../pages/Performance';
import Practice from '../pages/Practice';
import Profile from '../pages/Profile';
import Units from '../pages/Units';
import UpdateProfile from '../pages/UpdateProfile';

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
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/update-profile',
    name: 'UpdateProfile',
    component: UpdateProfile,
    exact: true,
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
    exact: true,
  },
  {
    path: '/subjects/:id',
    name: 'Units',
    component: Units,
    exact: true,
  },
  {
    path: '/units/:id/new-content',
    name: 'NewContent',
    component: NewContent,
    exact: true,
  },
  {
    path: '/units/:id',
    name: 'Contents',
    component: Contents,
    exact: true,
  },
  {
    path: '/duels',
    name: 'Duels',
    component: Duels,
    exact: true,
  },
  {
    path: '/new-duel',
    name: 'NewDuel',
    component: NewDuel,
    exact: true,
  },
  {
    path: '/duels/:id',
    name: 'Duel',
    component: Duel,
    exact: true,
  },
  {
    path: '/duels/:id/questions',
    name: 'DuelQuestions',
    component: DuelQuestions,
    exact: true,
  },
  {
    path: '/duels/:id/congratulations',
    name: 'DuelCongratulations',
    component: DuelCongratulations,
    exact: true,
  },
  {
    path: '/duels/:id/results',
    name: 'DuelResults',
    component: DuelResults,
    exact: true,
  },
  {
    path: '/contents/:id',
    name: 'Content',
    component: Content,
    exact: true,
  },
  {
    path: '/missions',
    name: 'Missions',
    component: Missions,
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
  {
    path: '/contents/:id/practice',
    name: 'Practice',
    component: Practice,
    exact: true,
  },
];

export default routes;
