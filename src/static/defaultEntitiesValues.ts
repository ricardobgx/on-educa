import { IAlternative } from '../interfaces/IAlternative';
import { IAplication } from '../interfaces/IAplication';
import { IContent } from '../interfaces/IContent';
import { IDuel } from '../interfaces/IDuel';
import { IDuelQuestion } from '../interfaces/IDuelQuestion';
import { IDuelQuestionAnswer } from '../interfaces/IDuelQuestionAnswer';
import { IDuelTeam } from '../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../interfaces/IDuelTeamParticipation';
import { IQuestion } from '../interfaces/IQuestion';
import { ISchoolGrade } from '../interfaces/ISchoolGrade';
import { ISubject } from '../interfaces/ISubject';
import { ITeachingType } from '../interfaces/ITeachingType';
import { IUnity } from '../interfaces/IUnity';
import { IUser } from '../interfaces/IUser';
import { IPractice } from '../store/actions/practice';

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
};

export const DEFAULT_USER: IUser = {
  id: '',
  email: '',
  name: '',
  profilePicture: '',
  league: '',
  isOnline: false,
  teachingType: DEFAULT_TEACHING_TYPE,
  schoolGrade: DEFAULT_SCHOOL_GRADE,
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

export const DEFAULT_SUBJECT: ISubject = {
  id: '',
  name: '',
};

/* Duelos */

// Duelo

export const DEFAULT_DUEL: IDuel = {
  id: '',
  maxGroupParticipants: 0,
  questionsPerContent: 0,
  timeForQuestion: 0,
  owner: DEFAULT_USER,
  teams: [],
  questions: [],
};

// Time de duelo

export const DEFAULT_DUEL_TEAM: IDuelTeam = {
  id: '',
  name: '',
  lastParticipantIndex: 0,
  duel: DEFAULT_DUEL,
  participations: [],
};

// Participacao em duelo

export const DEFAULT_DUEL_TEAM_PARTICIPATION: IDuelTeamParticipation = {
  id: '',
  duelTeam: DEFAULT_DUEL_TEAM,
  student: DEFAULT_USER,
  duelQuestionsAnswers: [],
};

// Questao do duelo

export const DEFAULT_DUEL_QUESTION: IDuelQuestion = {
  id: '',
  duel: DEFAULT_DUEL,
  question: DEFAULT_QUESTION,
};

// Resposta da questao do duelo

export const DEFAULT_DUEL_QUESTION_ANSWER: IDuelQuestionAnswer = {
  id: '',
  duelTeamParticipation: DEFAULT_DUEL_TEAM_PARTICIPATION,
  question: DEFAULT_DUEL_QUESTION,
  selectedAlternative: DEFAULT_ALTERNATIVE,
};
