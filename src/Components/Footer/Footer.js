import React from "react";
import faceBookIcon from "../../Resources/Facebook.png";
import twitterIcon from "../../Resources/Twitter.png";
import youtubeIcon from "../../Resources/YouTube.png";
// import http from "http";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
const Footer = ({ strTwitter, strFacebook, strYoutube }) => {
  return (
    <div>
      <footer className="mt-4 mb-4 d-flex align-item-center justify-content-center me-2">
        <span>
          <img
            className="img-fluid iconImage me-3"
            src={twitterIcon}
            alt="twitterIcon"
          />
        </span>
        <span>
          <img
            className="img-fluid iconImage me-3"
            src={faceBookIcon}
            alt="faceBookIcon"
          />
        </span>
        <span>
          <img
            className="img-fluid iconImage me-3"
            src={youtubeIcon}
            alt="youtubeIcon"
          />
        </span>
      </footer>
    </div>
  );
};

export default Footer;
