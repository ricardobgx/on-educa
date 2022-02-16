import { IAlternative } from '../interfaces/IAlternative';
import { IAplication } from '../interfaces/IAplication';
import { IContent } from '../interfaces/IContent';
import { IDuel } from '../interfaces/IDuel';
import { IDuelRoundQuestion } from '../interfaces/IDuelRoundQuestion';
import { IDuelQuestionAnswer } from '../interfaces/IDuelQuestionAnswer';
import { IDuelTeam } from '../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../interfaces/IDuelTeamParticipation';
import { IQuestion } from '../interfaces/IQuestion';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';
import { ISubject } from '../interfaces/ISubject';
import { ITeachingType } from '../interfaces/ITeachingType';
import { IUnity } from '../interfaces/IUnity';
import { IPeople } from '../interfaces/IPeople';
import { IDuelRound } from '../interfaces/IDuelRound';
import { IPracticeQuestion } from '../interfaces/IPracticeQuestion';
import { IPractice } from '../interfaces/IPractice';
import { IStudentWeeklyPerformance } from '../interfaces/IStudentWeeklyPerformance';
import { IStudentWeekDayPerformance } from '../interfaces/IStudentWeekDayPerformance';
import { IImage } from '../interfaces/IImage';
import { IStudent } from '../interfaces/IStudent';
import { ITeacher } from '../interfaces/ITeacher';
import { ThemeType } from '../types/ThemeType';
import { IChat } from '../interfaces/IChat';

export const DEFAULT_APLICATION: IAplication = {
  token: '',
  theme: ThemeType.BLUE,
  isStudent: true,
  loadingAnimation: false,
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
  name: '',
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
