/* eslint-disable no-console */

import { ThemeType } from '../types/ThemeType';
import { TDoubtStatus } from '../types/TDoubtStatus';
import { themes } from './themes';

export const DEFAULT_APLICATION: IAplication = {
  token: '',
  theme: ThemeType.LIGHT_BLUE,
  isStudent: true,
  loadingAnimation: false,
};

export const DEFAULT_CONFIRM_ACTION_POPUP: IConfirmActionPopup = {
  message: '',
  isActive: false,
  method: () => console.log(''),
};

export const DEFAULT_SIGN_UP: ISignUp = {
  name: '',
  email: '',
  password: '',
  isStudent: false,
  teachingTypeId: '',
  schoolGradeId: '',
};

export const DEFAULT_THEME: ITheme = themes[0];

export const DEFAULT_THEME_FONTS_SIZE: IThemeFontsSize = {
  computer: '2.25vh',
  tablet: '2.2vw',
  smartphone: '3.3vw',
  smallFonts: {
    computer: '2vh',
    tablet: '2vw',
    smartphone: '3vw',
  },
};
export const DEFAULT_THEME_SIMILAR_COLORS: IThemeSimilarColors = {
  warningColor: '#CB0000',
  rightQuestion: '#52b788',
  wrongQuestion: '#f72585',
  skippedQuestion: '#a100f2',
};

export const DEFAULT_FLOAT_NOTIFICATION: IFloatNotification = {
  content: '',
  isActive: false,
};

export const DEFAULT_IMAGE: IImage = {
  id: '',
  path: '',
};

export const DEFAULT_TEACHING_TYPE: ITeachingType = {
  id: '',
  name: '',
  schoolGrades: [],
};

export const DEFAULT_SCHOOL_GRADE: ISchoolGrade = {
  id: '',
  index: 0,
  subjects: [],
  teachingType: DEFAULT_TEACHING_TYPE,
};

export const DEFAULT_PEOPLE: IPeople = {
  id: '',
  email: '',
  name: 'Default User',
  profilePicture: DEFAULT_IMAGE,
  league: '',
  isOnline: false,
  isStudent: true,
  dailyGoal: 0,
  friends: [],
};

export const DEFAULT_CHAT: IChat = {
  id: '',
  chatCreator: DEFAULT_PEOPLE,
  chatParticipant: DEFAULT_PEOPLE,
  messages: [],
  createdAt: new Date(),
};

export const DEFAULT_STUDENT: IStudent = {
  id: '',
  people: DEFAULT_PEOPLE,
  schoolGrade: DEFAULT_SCHOOL_GRADE,
};

export const DEFAULT_TEACHER: ITeacher = {
  id: '',
  people: DEFAULT_PEOPLE,
  teachingType: DEFAULT_TEACHING_TYPE,
};

export const DEFAULT_SUBJECT: ISubject = {
  id: '',
  name: '',
  units: [],
};

export const DEFAULT_UNITY: IUnity = {
  id: '',
  name: '',
  contents: [],
};

export const DEFAULT_CONTENT: IContent = {
  id: '',
  name: '',
  description: '',
  video: '',
  index: 0,
  unity: DEFAULT_UNITY,
  questions: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  doubts: [],
};

export const DEFAULT_DOUBT: IDoubt = {
  id: '',
  description: '',
  status: TDoubtStatus.PENDING,
  content: DEFAULT_CONTENT,
  student: DEFAULT_STUDENT,
  createdAt: new Date(),
};

export const DEFAULT_ALTERNATIVE: IAlternative = {
  id: '',
  description: '',
  index: 0,
};

export const DEFAULT_QUESTION: IQuestion = {
  id: '',
  description: '',
  difficulty: 0,
  content: DEFAULT_CONTENT,
  alternatives: [],
  rightAlternative: DEFAULT_ALTERNATIVE,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const DEFAULT_PRACTICE: IPractice = {
  questions: [],
};

export const DEFAULT_PRACTICE_QUESTION: IPracticeQuestion = {
  ...DEFAULT_QUESTION,
  selectedAlternative: DEFAULT_ALTERNATIVE,
};

/* Desempenho */

export const DEFAULT_STUDENT_WEEK_DAY_PERFORMANCE: IStudentWeekDayPerformance =
  {
    id: '',
    dailyXp: 0,
    contentsStudied: 0,
    questionsAnswered: 0,
    questionsAnsweredCorrectly: 0,
    duelsParticipated: 0,
    duelsWon: 0,
    createdAt: new Date(),
  };

export const DEFAULT_STUDENT_WEEKLY_PERFORMANCE: IStudentWeeklyPerformance = {
  id: '',
  xp: 0,
  createdAt: '',
  weekDay: DEFAULT_STUDENT_WEEK_DAY_PERFORMANCE,
  weekDays: [],
  student: DEFAULT_STUDENT,
};

export const DEFAULT_TEACHER_WEEK_DAY_PERFORMANCE: ITeacherWeekDayPerformance =
  {
    id: '',
    dailyXp: 0,
    contentsCreated: 0,
    questionsCreated: 0,
    doubtsSolved: 0,
    interativeRoomsCreated: 0,
    createdAt: new Date(),
  };

export const DEFAULT_TEACHER_WEEKLY_PERFORMANCE: ITeacherWeeklyPerformance = {
  id: '',
  xp: 0,
  weekDay: DEFAULT_TEACHER_WEEK_DAY_PERFORMANCE,
  weekDays: [],
  teacher: DEFAULT_TEACHER,
};

/* Duelos */

// Round do duelo

export const DEFAULT_DUEL_ROUND: IDuelRound = {
  id: '',
  status: -1,
  maxGroupParticipants: 0,
  questionsPerContent: 0,
  timeForQuestion: 0,
  teams: [],
  questions: [],
};

// Duelo

export const DEFAULT_DUEL: IDuel = {
  id: '',
  code: '',
  student: DEFAULT_STUDENT,
  duelRound: DEFAULT_DUEL_ROUND,
  duelRounds: [],
};

// Time de duelo

export const DEFAULT_DUEL_TEAM: IDuelTeam = {
  id: '',
  name: '',
  index: -1,
  duelRound: DEFAULT_DUEL_ROUND,
  participations: [],
};

// Participacao em duelo

export const DEFAULT_DUEL_TEAM_PARTICIPATION: IDuelTeamParticipation = {
  id: '',
  index: -1,
  duelTeam: DEFAULT_DUEL_TEAM,
  student: DEFAULT_STUDENT,
  duelQuestionsAnswers: [],
};

// Questao do duelo

export const DEFAULT_DUEL_QUESTION: IDuelRoundQuestion = {
  id: '',
  duelRound: DEFAULT_DUEL_ROUND,
  question: DEFAULT_QUESTION,
};

// Resposta da questao do duelo

export const DEFAULT_DUEL_QUESTION_ANSWER: IDuelQuestionAnswer = {
  id: '',
  duelTeamParticipation: DEFAULT_DUEL_TEAM_PARTICIPATION,
  question: DEFAULT_DUEL_QUESTION,
  selectedAlternative: DEFAULT_ALTERNATIVE,
};

export const DEFAULT_ACHIEVEMENT: IAchievement = {
  id: '',
  name: '',
  description: '',
  activities: [],
  levels: [],
};

export const DEFAULT_ACHIEVEMENT_LEVEL: IAchievementLevel = {
  id: '',
  goal: 0,
  level: 0,
};

export const DEFAULT_ACHIEVEMENT_PROGRESS: IAchievementProgress = {
  id: '',
  progress: 0,
  status: 0,
  achievement: DEFAULT_ACHIEVEMENT,
  people: DEFAULT_PEOPLE,
  level: DEFAULT_ACHIEVEMENT_LEVEL,
};
