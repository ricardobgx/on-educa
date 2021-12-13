import { combineReducers } from 'redux';
import aplicationReducer from './aplication';
import contentReducer from './content';
import duelReducer from './duel';
import practiceReducer from './practice';
import schoolGradeReducer from './schoolGrade';
import subjectReducer from './subject';
import teachingTypeReducer from './teachingType';
import unityReducer from './unity';
import userReducer from './user';

const reducers = combineReducers({
  aplication: aplicationReducer,
  user: userReducer,
  content: contentReducer,
  practice: practiceReducer,
  duel: duelReducer,
  teachingType: teachingTypeReducer,
  schoolGrade: schoolGradeReducer,
  subject: subjectReducer,
  unity: unityReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
