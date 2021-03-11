import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import male from "../../Resources/male.png";
import female from "../../Resources/female.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMarsStroke,
} from "@fortawesome/free-solid-svg-icons";

import "./LeagueDetails.css";
import LeageDetailsBanner from "../LeageDetailsBanner/LeageDetailsBanner";
import Footer from "../Footer/Footer";

const LeagueDetails = () => {
  const { leagueId } = useParams();
  let [leagueInfo, setLeagueInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  };

  let {
    strBadge,
    strLeague,
    strGender,
    strCountry,
    strDescriptionEN,
    strDescriptionFR,
    strFacebook,
    strTwitter,
    strYoutube,
    strSport,
    intFormedYear,
  } = leagueInfo;

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setLeagueInfo(data.leagues[0]);
      });
  }, [leagueId]);

  return (
    <>
      <div>
        <LeageDetailsBanner
          name={strLeague}
          banner={strBadge}
        ></LeageDetailsBanner>
      </div>

      {isLoaded ? (
        <div>
          <section id="discuss" className="mt-5  mb-5">
            <div
              className="container shadow p-5 roundeds"
              style={{ backgroundColor: "#e85d04", color: "white" }}
            >
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                  <h2 className="fw-bold">{strLeague}</h2>
                  <p className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                    Founded :{intFormedYear}
                  </p>
                  <p className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-2" icon={faFlag} />
                    Country : {strCountry}
                  </p>
                  <p className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-2" icon={faFutbol} />
                    Sport Type :{strSport}
                  </p>
                  <p className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-2" icon={faMarsStroke} />
                    Gender : {strGender}
                  </p>
                </div>
                <div className="col-md-6">
                  {strGender === "Male" ? (
                    <img className="bnner-image img-fluid" src={male} alt="" />
                  ) : (
                    <img
                      className="bnner-image img-fluid"
                      src={female}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
          {/* Descirption */}
          <section className="mt-2 mb-2 container me-xs-2 ms-xs-2">
            <p className="justify-content just">{strDescriptionEN}</p>
          </section>

          <section className="mt-2 mb-2 container ">
            <p className="justify-content just">{strDescriptionFR}</p>
          </section>
          {/* Footer */}
          <Footer
            strFacebook={strFacebook}
            strTwitter={strTwitter}
            strYoutube={strYoutube}
          ></Footer>
        </div>
      ) : (
        <Loader
          style={loaderStyle}
          type="Audio"
          color="#3a0ca3"
          height={50}
          width={50}
        />
      )}
    </>
  );
};

export default LeagueDetails;
