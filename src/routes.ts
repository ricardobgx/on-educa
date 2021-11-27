import IRoute from './interfaces/routes';
import Achievements from './pages/Achievements';
import Content from './pages/Content';
import Doubts from './pages/Doubts';
import Duel from './pages/Duel';
import DuelCongratulations from './pages/DuelCongratulations';
import DuelQuestions from './pages/DuelQuestions';
import DuelResults from './pages/DuelResults';
import Duels from './pages/Duels';
import Home from './pages/Home';
import NewDuel from './pages/NewDuel';
import Overview from './pages/Overview';
import Performance from './pages/Performance';
import Practice from './pages/Practice';
import Profile from './pages/Profile';
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
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/study',
    name: 'Study',
    component: StartLearn,
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
