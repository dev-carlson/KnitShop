import React from "react";
import "../styles/Home.css";
import video1 from "../assets/video1.mp4";
import dress1 from "../assets/dress1.png";
import dress2 from "../assets/dress2.png";
import dress3 from "../assets/dress3.png";
import dress4 from "../assets/dress4.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="video-container">
        <video className="video" autoPlay loop muted>
          <source src={video1} />
        </video>
      </div>
      <div className="content-container">
      </div>

      <div className="classic-items">
        <div className="item-container">
        <img src={dress1} />
        <p className="item-text">Description</p>
        </div>
        <div className="item-container">
        <img src={dress2} />
        <p className="item-text">Description</p>
        </div>
        <div className="item-container">
        <img src={dress3} />
        <p className="item-text">Description</p>
        </div>
        <div className="item-container">
        <img src={dress4} />
        <p className="item-text">Description</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
