import {
  GET_ALL_MATCHES,
  GET_ALL_MATCHES_SUCCEEDED
} from "../constants/matches.constants";

export function getData(matches) {
  return dispatch => {
    dispatch({
      type: GET_ALL_MATCHES,
      matches
    });
    dispatch({
      type: GET_ALL_MATCHES_SUCCEEDED
    });
  };
}
