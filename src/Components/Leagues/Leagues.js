import React from "react";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Leagues = (props) => {
  const { strLeague, strSport, idLeague } = props.leageData;
  return (
    <div className="col">
      <div
        className="card lh-1 shadow border-0 text-center  "
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="card-body">
          <h5 className="card-title  ">{strLeague}</h5>
          <p>{strSport}</p>
          <Link to={`/leagueDetails/${idLeague}`}>
            <button
              className="btn btn-primary"
              style={{ background: "#3a0ca3" }}
            >
              <span className="me-2"> Explore</span>

              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
