import React from "react";
import bannerImg from "../../Resources/Banner.png";
import "./Banncer.css";
const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  height: "20rem",
  width: "100% !important",
};
const Banner = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center banner"
        style={bannerStyle}
      >
        <div className="content text-center">
          <h1
            className="fw-bolder"
            style={{ color: "black", textTransform: "uppercase" }}
          >
            Football Leagues
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
