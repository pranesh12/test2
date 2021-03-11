import React from "react";
import bannerImg from "../../Resources/Banner.png";
import "./LeageDetailsBanner.css";
const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  height: "20rem",
};
const LeageDetailsBanner = ({ banner, name }) => {
  return (
    <>
      <div>
        <div
          className=" w-100  d-flex justify-content-center align-items-center"
          style={bannerStyle}
        >
          <div className="content text-center ">
            <img className="img-fluid image " src={banner} alt={name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeageDetailsBanner;
