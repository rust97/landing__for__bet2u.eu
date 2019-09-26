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
        mainMatches: action.mainMatches,
        subMatches: action.subMatches
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
