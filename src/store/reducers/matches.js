import {
  GET_ALL_MATCHES,
  GET_ALL_MATCHES_SUCCEEDED
} from "../constants/matches.constants";

const initialState = {
  isLoading: true,
  allMatches: [],
  mainMatches: [],
  subMatches: []
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MATCHES:
      return {
        ...state,
        allMatches: action.matches,
        mainMatches: [action.matches[0], action.matches[1], action.matches[2]],
        subMatches: [
          action.matches[1],
          action.matches[2],
          action.matches[3],
          action.matches[4]
        ]
      };
    case GET_ALL_MATCHES_SUCCEEDED:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
