import React from "react";
import "./SubMatch.scss";

function SubMatch({ match }) {
  const { home, away, odds } = match;
  const { W1, W2, Draw, W1_event_id, W2_event_id, Draw_event_id } = odds;
  return (
    <div className="sub-match__container">
      <div className="sub-match__teams flex justify-between items-center">
        <p>{home}</p>
        <span className="sub-match__dash" />
        <p>{away}</p>
      </div>
      <div className="sub-match__teams-logo flex justify-between">
        <span
          className="logo-mini"
          style={{
            background: `url(https://bet2u.eu/dynamic/logo/${match.home.replace(
              / /g,
              "_"
            )}.png)`
          }}
        />
        <span
          className="logo-mini"
          style={{
            background: `url(https://bet2u.eu/dynamic/logo/${match.away.replace(
              / /g,
              "_"
            )}.png)`
          }}
        />
      </div>
      <a href={match.url}>поставить на матч</a>
      <div className="sub-match__coefficient flex  items-center">
        <div className="flex flex-col justify-center items-center">
          <span>
            <a className="sub__co" href={`${match.url}&event=${W1_event_id}`}>
              {W1}
            </a>
          </span>
          <p>W1</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            <a className="sub__co" href={`${match.url}&event=${Draw_event_id}`}>
              {Draw}
            </a>
          </span>
          <p>X</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            <a className="sub__co" href={`${match.url}&event=${W2_event_id}`}>
              {W2}
            </a>
          </span>
          <p>W2</p>
        </div>
      </div>
    </div>
  );
}

export default SubMatch;
