import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="left">
          <div className="connect">
            <div className="line"></div>
            <ul>
              <li className="social-icon">
                <YouTubeIcon className="icn"/>
                <p className="txt">You Tube</p>
              </li>
              <li className="social-icon">
                <TwitterIcon className="icn"/>
                <p className="txt">Twitter</p>
              </li>
              <li className="social-icon">
                <InstagramIcon className="icn"/>
                <p className="txt">Instagram</p>
              </li>
            </ul>
            <div className="line"></div>
          </div>
        </div>
        <div className="center">
          <p className="latest hover-underline-animation" > LATEST STORIES</p>
          <div className="tag">
            Subscribe for full access to read stories from{" "}
            <span className="Nature4U">Nature4U</span>
          </div>
          <div className="btn">
            <div className="join">
              {" "}
              <p className="join-left">Join Us</p>{" "}
              <div className="join-right"></div>
            </div>
            <div className="join">
              {" "}
              <p className="join-left">Explore-&gt;</p>{" "}
              <div className="join-right"></div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Home;
