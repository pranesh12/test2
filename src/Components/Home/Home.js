import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Leagues from "../Leagues/Leagues";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Home = () => {
  const [leagueData, setLeagueData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.leagues;
        const newSliceData = sliceData.slice(0, 15);
        setIsLoaded(true);
        setLeagueData(newSliceData);
      });
  }, []);
  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  };

  return (
    <>
      <div className="row">
        <Banner></Banner>
      </div>

      {isLoaded ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="row row-cols-1 row-cols-md-3 g-3">
                {leagueData.map((league) => (
                  <Leagues key={league.idLeague} leageData={league}></Leagues>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader
          style={loaderStyle}
          type="Audio"
          color="#3a0ca3"
          timeout={0}
          height={50}
          width={50}
        />
      )}
    </>
  );
};

export default Home;
