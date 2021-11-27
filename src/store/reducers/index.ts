import { combineReducers } from 'redux';
import duelReducer from './duel';
import practiceReducer from './practice';
import userReducer from './user';

const reducers = combineReducers({
  user: userReducer,
  practice: practiceReducer,
  duel: duelReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
