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
import { IUser } from '../interfaces/IUser';
import { IDuelRound } from '../interfaces/IDuelRound';
import { IPracticeQuestion } from '../interfaces/IPracticeQuestion';
import { IPractice } from '../interfaces/IPractice';
import { IStudentWeekPerformance } from '../interfaces/IStudentWeekPerformance';
import { IStudentWeekDayPerformance } from '../interfaces/IStudentWeekDayPerformance';

export const DEFAULT_APLICATION: IAplication = {
  token: '',
  theme: 'light',
  userType: 'student',
  loadingAnimation: false,
};

export const DEFAULT_TEACHING_TYPE: ITeachingType = {
  id: '',
  title: '',
  schoolGrades: [],
};

export const DEFAULT_SCHOOL_GRADE: ISchoolGrade = {
  id: '',
  index: 0,
  subjects: [],
};

export const DEFAULT_USER: IUser = {
  id: '',
  email: '',
  name: '',
  profilePicture: '',
  league: '',
  isOnline: false,
  userType: 'student',
  teachingType: DEFAULT_TEACHING_TYPE,
  schoolGrade: DEFAULT_SCHOOL_GRADE,
};

export const DEFAULT_SUBJECT: ISubject = {
  id: '',
  name: '',
  units: [],
};

export const DEFAULT_UNITY: IUnity = {
  id: '',
  title: '',
  contents: [],
};

export const DEFAULT_CONTENT: IContent = {
  id: '',
  title: '',
  description: '',
  video: '',
  index: 0,
  unity: DEFAULT_UNITY,
  questions: [],
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
    dailyXP: 0,
    studiedContents: 0,
    questionsAnswered: 0,
    rightQuestionsAnswered: 0,
    duelsParticipated: 0,
    duelsWon: 0,
    date: '',
  };

export const DEFAULT_STUDENT_WEEK_PERFORMANCE: IStudentWeekPerformance = {
  id: '',
  xp: 0,
  createdAt: '',
  weekDay: DEFAULT_STUDENT_WEEK_DAY_PERFORMANCE,
  weekDays: [],
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
  student: DEFAULT_USER,
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
  student: DEFAULT_USER,
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
