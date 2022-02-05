import IRoute from '../interfaces/IRoute';
import Achievements from '../pages/Achievements';
import Chats from '../pages/Chats';
import Content from '../pages/Content';
import Contents from '../pages/Contents';
import Doubts from '../pages/Doubts';
import Duel from '../pages/Duel';
import DuelCongratulations from '../pages/DuelCongratulations';
import DuelQuestions from '../pages/DuelQuestions';
import DuelResults from '../pages/DuelResults';
import Duels from '../pages/Duels';
import EditContent from '../pages/EditContent';
import Friends from '../pages/Friends';
import Home from '../pages/Home';
import Missions from '../pages/Missions';
import NewContent from '../pages/NewContent';
import NewDuel from '../pages/NewDuel';
import NewQuestion from '../pages/NewQuestion';
import Overview from '../pages/Overview';
import Performance from '../pages/Performance';
import Practice from '../pages/Practice';
import PracticePerformance from '../pages/PracticePerformance';
import Profile from '../pages/Profile';
import Question from '../pages/Question';
import Questions from '../pages/Questions';
import Settings from '../pages/Settings';
import Subjects from '../pages/Subjects';
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
    path: '/friends',
    name: 'Friends',
    component: Friends,
    exact: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
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
    path: '/subjects',
    name: 'Subjects',
    component: Subjects,
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
    path: '/contents/:id/edit',
    name: 'EditContent',
    component: EditContent,
    exact: true,
  },
  {
    path: '/units/:id',
    name: 'Contents',
    component: Contents,
    exact: true,
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions,
    exact: true,
  },
  {
    path: '/questions/:id',
    name: 'Question',
    component: Question,
    exact: true,
  },
  {
    path: '/new-question',
    name: 'NewQuestion',
    component: NewQuestion,
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
    path: '/chats',
    name: 'Chats',
    component: Chats,
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
  {
    path: '/contents/:id/practice-performance',
    name: 'PracticePerformance',
    component: PracticePerformance,
    exact: true,
  },
];

export default routes;
