import { combineReducers } from 'redux';

// Aplicacao

import aplicationReducer from './aplication';
import themeReducer from './theme';
import floatNotificationReducer from './floatNotification';

// Usuarios

import signUpReducer from './signUp';
import peopleReducer from './people';
import studentReducer from './student';
import teacherReducer from './teacher';

// Desempenho

import studentWeeklyPerformanceReducer from './studentWeeklyPerformance';

// Materiais escolares

import teachingTypeReducer from './teachingType';
import schoolGradeReducer from './schoolGrade';
import subjectReducer from './subject';
import unityReducer from './unity';
import contentReducer from './content';
import questionReducer from './question';

// Pratica

import practiceReducer from './practice';

// Duelos

import duelReducer from './duel';

// Conversas

import chatReducer from './chat';

// Solicitacoes de amizade

import friendRequestsReducer from './friendRequests';

const reducers = combineReducers({
  aplication: aplicationReducer,
  theme: themeReducer,
  floatNotification: floatNotificationReducer,
  signUp: signUpReducer,
  people: peopleReducer,
  student: studentReducer,
  teacher: teacherReducer,
  studentWeeklyPerformance: studentWeeklyPerformanceReducer,
  teachingType: teachingTypeReducer,
  schoolGrade: schoolGradeReducer,
  subject: subjectReducer,
  unity: unityReducer,
  content: contentReducer,
  question: questionReducer,
  practice: practiceReducer,
  duel: duelReducer,
  chat: chatReducer,
  friendRequests: friendRequestsReducer,
});

export default reducers;
