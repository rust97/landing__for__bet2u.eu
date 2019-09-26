import React from "react";
import Slider from "react-slick";
import "./App.scss";
import MainMatch from "../../MainMatch";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { DATA } from "../graphql/queryMatches";
import { connect } from "react-redux";
import { getData } from "../../../store/actions/matchesActions";
import bg from "../../../../public/assets/img/pole.jpg";
import bg1 from "../../../../public/assets/img/bg.jpg";
import SubMatch from "../../SubMatch/ui/SubMatch";
import BannerSlider from "../../BannerSlider/ui/BannerSlider";
import Spinner from "../../Spinner/ui/Spinner";

function App(props) {
  const { getData, allMatches, isLoading, subMatches, mainMatches } = props;

  const { data, loading } = useQuery(DATA, {
    onCompleted: () => getData(data.getMatches)
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    draggable: false,
    autoplay: true
  };
  if (isLoading) {
    return (
      <div className="spinner__container">
        {" "}
        <Spinner />{" "}
      </div>
    );
  } else {
    if (allMatches.length === 0) {
      window.location.replace(`https://bet2u.su/d${window.location.search}`);
    } else {
      return (
        <React.Fragment>
          <div className="bg__container">
            <div
              className="page__container  p-10"
              style={{ background: `url(${bg})` }}
            >
              <Slider {...settings}>
                {mainMatches.map(match => {
                  return <MainMatch match={match} key={match.id} />;
                })}
              </Slider>
            </div>
          </div>
          <div
            className="sub-match__list-wrap flex flex-col  items-center "
            style={{ background: `url(${bg1})` }}
          >
            <h1 className="text-center font-bold text-5xl mb-10">
              Ближайшие матчи
            </h1>
            <div className="flex justify-around flex-wrap">
              {subMatches.map(match => {
                return <SubMatch match={match} key={match.id} />;
              })}
            </div>
            <BannerSlider />
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  allMatches: state.matches.allMatches,
  isLoading: state.matches.isLoading,
  mainMatches: state.matches.mainMatches,
  subMatches: state.matches.subMatches
});

const mapDispatchToProps = dispatch => ({
  getData: matches => dispatch(getData(matches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
