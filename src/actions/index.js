import axios from 'axios';
import {GET_STUDENTS} from "./types";

const ROOT_URL = 'http://localhost:3000';

export function getStudents() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/api/students`)
      .then(response => {
        dispatch({type: GET_STUDENTS, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

