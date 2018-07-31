import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import students from "./students_reducer";

const rootReducer = combineReducers({
  students,
  routing: routerReducer
});

export default rootReducer;
