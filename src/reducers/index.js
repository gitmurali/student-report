import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import students from "./students_reducer";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  students,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
