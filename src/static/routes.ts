import Achievements from '../pages/Achievements';
import Chats from '../pages/Chats';
import Content from '../pages/Content';
import Contents from '../pages/Contents';
import Doubt from '../pages/Doubt';
import Doubts from '../pages/Doubts';
import Duel from '../pages/Duel';
import DuelCongratulations from '../pages/DuelCongratulations';
import DuelQuestions from '../pages/DuelQuestions';
import DuelResults from '../pages/DuelResults';
import Duels from '../pages/Duels';
import EditContent from '../pages/EditContent';
import EditQuestion from '../pages/EditQuestion';
import Friends from '../pages/Friends';
import Home from '../pages/Home';
import InterativeRooms from '../pages/InterativeRooms';
import Leagues from '../pages/Leagues';
import Missions from '../pages/Missions';
import NewContent from '../pages/NewContent';
import NewDuel from '../pages/NewDuel';
import NewInterativeRoom from '../pages/NewInterativeRoom';
import NewQuestion from '../pages/NewQuestion';
import Overview from '../pages/Overview';
import Performance from '../pages/Performance';
import Practice from '../pages/Practice';
import PracticePerformance from '../pages/PracticePerformance';
import Profile from '../pages/Profile';
import Question from '../pages/Question';
import Questions from '../pages/Questions';
import SelectSchoolGrade from '../pages/SelectSchoolGrade';
import SelectTeachingType from '../pages/SelectTeachingType';
import SelectUserType from '../pages/SelectUserType';
import Settings from '../pages/Settings';
import Subjects from '../pages/Subjects';
import Units from '../pages/Units';
import UpdateProfile from '../pages/UpdateProfile';

const routes: IRoute[] = [
  {
    path: '/sign',
    name: 'Overview',
    component: Overview,
    exact: true,
    private: false,
  },
  {
    path: '/select-user-type',
    name: 'SelectUserType',
    component: SelectUserType,
    exact: true,
    private: false,
  },
  {
    path: '/select-school-grade',
    name: 'SelectSchoolGrade',
    component: SelectSchoolGrade,
    exact: true,
    private: false,
  },
  {
    path: '/select-teaching-type',
    name: 'SelectTeachingType',
    component: SelectTeachingType,
    exact: true,
    private: false,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    private: true,
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends,
    exact: true,
    private: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    exact: true,
    private: true,
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    exact: true,
    private: true,
  },
  {
    path: '/update-profile',
    name: 'UpdateProfile',
    component: UpdateProfile,
    exact: true,
    private: true,
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: Subjects,
    exact: true,
    private: true,
  },
  {
    path: '/subjects/:id',
    name: 'Units',
    component: Units,
    exact: true,
    private: true,
  },
  {
    path: '/units/:id/new-content',
    name: 'NewContent',
    component: NewContent,
    exact: true,
    private: true,
  },
  {
    path: '/contents/:id/edit',
    name: 'EditContent',
    component: EditContent,
    exact: true,
    private: true,
  },
  {
    path: '/units/:id',
    name: 'Contents',
    component: Contents,
    exact: true,
    private: true,
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions,
    exact: true,
    private: true,
  },
  {
    path: '/questions/:id',
    name: 'Question',
    component: Question,
    exact: true,
    private: true,
  },
  {
    path: '/new-question',
    name: 'NewQuestion',
    component: NewQuestion,
    exact: true,
    private: true,
  },
  {
    path: '/questions/:id/edit',
    name: 'EditQuestion',
    component: EditQuestion,
    exact: true,
    private: true,
  },
  {
    path: '/duels',
    name: 'Duels',
    component: Duels,
    exact: true,
    private: true,
  },
  {
    path: '/new-duel',
    name: 'NewDuel',
    component: NewDuel,
    exact: true,
    private: true,
  },
  {
    path: '/duels/:id',
    name: 'Duel',
    component: Duel,
    exact: true,
    private: true,
  },
  {
    path: '/duels/:id/questions',
    name: 'DuelQuestions',
    component: DuelQuestions,
    exact: true,
    private: true,
  },
  {
    path: '/duels/:id/congratulations',
    name: 'DuelCongratulations',
    component: DuelCongratulations,
    exact: true,
    private: true,
  },
  {
    path: '/duels/:id/results',
    name: 'DuelResults',
    component: DuelResults,
    exact: true,
    private: true,
  },
  {
    path: '/contents/:id',
    name: 'Content',
    component: Content,
    exact: true,
    private: true,
  },
  {
    path: '/missions',
    name: 'Missions',
    component: Missions,
    exact: true,
    private: true,
  },
  {
    path: '/doubts',
    name: 'Doubts',
    component: Doubts,
    exact: true,
    private: true,
  },
  {
    path: '/doubts/:id',
    name: 'Doubt',
    component: Doubt,
    exact: true,
    private: true,
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats,
    exact: true,
    private: true,
  },
  {
    path: '/performance',
    name: 'Performance',
    component: Performance,
    exact: true,
    private: true,
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
    exact: true,
    private: true,
  },
  {
    path: '/contents/:id/practice',
    name: 'Practice',
    component: Practice,
    exact: true,
    private: true,
  },
  {
    path: '/contents/:id/practice-performance',
    name: 'PracticePerformance',
    component: PracticePerformance,
    exact: true,
    private: true,
  },
  {
    path: '/leagues',
    name: 'Leagues',
    component: Leagues,
    exact: true,
    private: true,
  },
  {
    path: '/interative-rooms',
    name: 'Interative Rooms',
    component: InterativeRooms,
    exact: true,
    private: true,
  },
  {
    path: '/interative-rooms/new',
    name: 'New Interative Room',
    component: NewInterativeRoom,
    exact: true,
    private: true,
  },
];

export default routes;
