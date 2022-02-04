import { combineReducers } from 'redux';
import aplicationReducer from './aplication';
import contentReducer from './content';
import duelReducer from './duel';
import practiceReducer from './practice';
import questionReducer from './question';
import schoolGradeReducer from './schoolGrade';
import subjectReducer from './subject';
import teachingTypeReducer from './teachingType';
import unityReducer from './unity';
import peopleReducer from './people';
import studentReducer from './student';
import teacherReducer from './teacher';

const reducers = combineReducers({
  aplication: aplicationReducer,
  people: peopleReducer,
  content: contentReducer,
  question: questionReducer,
  practice: practiceReducer,
  duel: duelReducer,
  teachingType: teachingTypeReducer,
  schoolGrade: schoolGradeReducer,
  subject: subjectReducer,
  unity: unityReducer,
  student: studentReducer,
  teacher: teacherReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
