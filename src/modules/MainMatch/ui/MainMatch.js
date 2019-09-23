import React from "react";
import "./MainMatch.scss";

function MainMatch({ match }) {
  const d = new Date(match.start * 1000)
    .toLocaleString("ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    })
    .split(",");
  return (
    <div className="slide__wrap flex justify-center items-center flex-col">
      <div className="flex team__info__main items-stretch w-full">
        <div className="team flex justify-around items-center flex-col ">
          <p className="w-full text-center font-bold">{match.home}</p>
          <a
            href={`${match.url}${match.odds.W1_event_id}`}
            className="team__logo"
            style={{
              background: `url(https://bet2u.eu/dynamic/logo/${match.home.replace(
                / /g,
                "_"
              )}.png)`
            }}
          />
          <span className="teams__coefficient flex flex-col justify-around items-center">
            {" "}
            <a
              href={`${match.url}${match.odds.W1_event_id}`}
              className="coefficient"
            >
              {match.odds.W1}{" "}
            </a>{" "}
            <p>W1</p>{" "}
          </span>
        </div>
        <div className="draw flex justify-between items-center flex-col ">
          <span className="dash block"></span>
          <div className="match__start-time flex flex-col justify-center items-center">
            <p className="font-bold">{d[0]}</p>
            <p>{d[1]}</p>{" "}
          </div>
          <span className="teams__coefficient flex flex-col justify-center items-center">
            <a
              href={`${match.url}${match.odds.Draw_event_id}`}
              className="coefficient"
            >
              {" "}
              {match.odds.Draw}
            </a>
            <p>X</p>
          </span>
        </div>
        <div className="team flex justify-center items-center flex-col ">
          <p className="w-full text-center font-bold">{match.away}</p>
          <a
            href={`${match.url}${match.odds.W2_event_id}`}
            className="team__logo"
            style={{
              background: `url(https://bet2u.eu/dynamic/logo/${match.away.replace(
                / /g,
                "_"
              )}.png)`
            }}
          />
          <span className="teams__coefficient flex flex-col justify-center items-center">
            {" "}
            <a
              href={`${match.url}${match.odds.W2_event_id}`}
              className="coefficient"
            >
              {match.odds.W2}{" "}
            </a>{" "}
            <p>W2</p>{" "}
          </span>
        </div>
      </div>
      <a href={match.url} className="bet__btn">
        поставить на матч
      </a>
    </div>
  );
}

export default MainMatch;
