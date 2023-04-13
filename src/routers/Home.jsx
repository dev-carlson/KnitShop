import React from "react";
import "../styles/Home.css";
import video1 from "../assets/video1.mp4";
const Home = () => {
  return (
    <div className="Home">
        <video className="video" autoPlay loop muted>
          <source src={video1} />
        </video>
    </div>
  );
};

export default Home;
