import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import inAndOutReducer from './inAndOutReducer';

//combineReducers: 여러개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  inAndOut: inAndOutReducer,
});

export default rootReducer;
