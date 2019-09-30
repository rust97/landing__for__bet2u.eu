import {
  GET_ALL_MATCHES,
  GET_ALL_MATCHES_SUCCEEDED
} from "../constants/matches.constants";

export function getData(matches) {
  let mainMatches;
  let subMatches;
  matches.forEach(el => {
    let obj = {};
    const num = el.url.match(/(\w+)(=)(\d+)/gi);
    num.forEach(item => {
      const result = item.match(/(\w+)/gi);
      obj[result[0]] = result[1];
    });
    el.url = `https://bet2u.su/d?regio=${obj.region}&sport=${
      obj.sport
    }&competition=${obj.competition}&game=${obj.game}${
      !window.location.search ? "" : `&${window.location.search.slice(1)}`
    }`;
  });

  if (matches.length <= 3) {
    mainMatches = matches;
    subMatches = matches;
  } else {
    subMatches = matches.filter((item, i) => {
      return i !== 0;
    });

    mainMatches = matches.filter((item, i) => {
      if (i !== matches.length - 1 && i !== matches.length - 2) {
        return item;
      }
    });
  }
  return dispatch => {
    dispatch({
      type: GET_ALL_MATCHES,
      matches,
      subMatches,
      mainMatches
    });
    dispatch({
      type: GET_ALL_MATCHES_SUCCEEDED
    });
  };
}
