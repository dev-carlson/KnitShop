import React from "react";
import "../styles/Home.css";
import video1 from "../assets/video1.mp4";
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
      <p>Born from the idea to make the world's best sailor sweaters, our garments are designed in Denmark and made by the best knitters in Italy. Our sweaters are made to be worn and loved for a lifetime.</p>
    </div>
  </div>
</div>

  );
};

export default Home;