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
      <div className="teems__vs flex w-full  items-center">
        <p className="w-full text-center font-bold">{match.home}</p>
        <span className="dash block"></span>
        <p className="w-full text-center font-bold">{match.away}</p>
      </div>
      <div className="teams__logo__wrap flex items-center">
        <div
          className="team__logo"
          style={{
            background: `url(https://bet2u.eu/dynamic/logo/${match.home.replace(
              / /g,
              "_"
            )}.png)`
          }}
        ></div>
        <div className="match__start-time flex flex-col justify-center items-center">
          <p className="font-bold">{d[0]}</p>
          <p>{d[1]}</p>
        </div>
        <div
          className="team__logo"
          style={{
            background: `url(https://bet2u.eu/dynamic/logo/${match.away.replace(
              / /g,
              "_"
            )}.png)`
          }}
        ></div>
      </div>
      <div className="teams__coefficient flex  w-full">
        <span className="flex flex-col justify-center items-center">
          {" "}
          <a
            href={`${match.url}${match.odds.W1_event_id}`}
            className="coefficient"
          >
            {match.odds.W1}
          </a>{" "}
          <p>W1</p>
        </span>
        <span className="flex flex-col justify-center items-center">
          <a
            href={`${match.url}${match.odds.Draw_event_id}`}
            className="coefficient"
          >
            {" "}
            {match.odds.Draw}
          </a>
          <p>X</p>
        </span>
        <span className="flex flex-col justify-center items-center">
          <a
            href={`${match.url}${match.odds.W2_event_id}`}
            className="coefficient"
          >
            {match.odds.W2}
          </a>
          <p>W2</p>
        </span>
      </div>
      <a href={match.url} className="bet__btn">
        поставить на матч
      </a>
    </div>
  );
}

export default MainMatch;

// <div className="slide__wrap flex justify-center items-center">
//   <div
//     className="team__logo"
//     style={{
//       background: `url(https://bet2u.eu/dynamic/logo/${match.home.replace(
//         / /g,
//         "_"
//       )}.png)`
//     }}
//   ></div>
//   <div className=" teams__info flex justify-center items-center flex-col">
//     <div className="teems__vs flex w-full justify-between items-center">
//       <p className="w-full text-center font-bold">{match.home}</p>
//       <span className="dash block"></span>
//       <p className="w-full text-center font-bold">{match.away}</p>
//     </div>
//     <div className="match__start-time flex flex-col justify-center items-center">
//       <p className="font-bold">{d[0]}</p>
//       <p>{d[1]}</p>
//     </div>
//     <div className="teams__coefficient flex justify-around w-full">
//       <span className="flex flex-col justify-center items-center">
//         {" "}
//         <a className="coefficient">{match.odds.W1}</p> <p>W1</p>
//       </span>
//       <span className="flex flex-col justify-center items-center">
//         <a className="coefficient"> {match.odds.Draw}</p>
//         <p>X</p>
//       </span>
//       <span className="flex flex-col justify-center items-center">
//         <a className="coefficient">{match.odds.W2}</p>
//         <p>W2</p>
//       </span>
//     </div>
//     <a href={match.url} className="bet__btn">
//       поставить на матч
//     </a>
//   </div>
//   <div
//     className="team__logo"
//     style={{
//       background: `url(https://bet2u.eu/dynamic/logo/${match.away.replace(
//         / /g,
//         "_"
//       )}.png)`
//     }}
//   ></div>
// </div>;
