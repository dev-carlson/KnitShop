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
        <div className="content">
          <p>
            Born from the idea to make the world's best sailor sweaters, our
            garments are designed in Denmark and made by the best knitters in
            Italy. Our sweaters are made to be worn and loved for a lifetime.
          </p>
        </div>
      </div>

      <div className="classic-items">
      <h1 className="text1">CLASSIC ITEMS</h1>
        <img src={dress1} />
        <img src={dress2} />
        <img src={dress3} />
        <img src={dress4} />
      </div>
    </div>
  );
};

export default Home;
