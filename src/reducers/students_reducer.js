import {GET_STUDENTS} from '../actions/types';

export default function(state=[], action) {

  switch (action.type){
    case GET_STUDENTS:
      return [action.payload.students, ...state];
  }
  return state;
}
