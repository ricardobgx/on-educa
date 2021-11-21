import { combineReducers } from 'redux';
import practiceReducer from './practice';
import userReducer from './user';

const reducers = combineReducers({
  user: userReducer,
  practice: practiceReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
