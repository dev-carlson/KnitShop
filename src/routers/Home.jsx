import React, { useState } from "react";
import "../styles/Home.css";
import video1 from "../assets/video1.mp4";
import vagi1 from "../assets/vegi1.jpg";
import vagi2 from "../assets/vegi2.jpg";
import vagi3 from "../assets/vegi3.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

import HomeComponents from "../imageComponents/HomeComponents";

const Home = () => {
  const vegiImages = [vagi1, vagi2, vagi3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const numImages = vegiImages.length;

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex + numImages - 1) % numImages);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % numImages);
  };

  //just a bunch of divs
  return (
    <div className="Home">
      <div className="video-container">
        <video className="video" autoPlay loop muted>
          <source src={video1} />
        </video>
      </div>
      <div className="classic-item-header">
        <h1>CLASSIC ITEMS</h1>
      </div>
      <div className="classic-items">
        {HomeComponents.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>

      <div className="stories">
        <h1>MARINE</h1>
        <p>
          In Denmark, we often find ourselves indoors during the winter. And
          it’s always interesting to see how others spend their time at home.
          Rosa and Frederik opened their apartment to us, giving us a peek into
          their daily lives. The Marine series is our lightest collection of
          wool sweaters, created as functional midlayer garments. Perfect under
          a heavy knit or on their own. Marine are knitted in gauge 12 using our
          signature, extra-spun yarn. Available in three classic styles:
          Turtleneck, Crewneck and Polo. Photos: Frederikke Agnete Svarre
        </p>
        <div className="stories-image-carousel">
          <div className="image-container">
            <img
              src={vegiImages[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
            />
            <div className="button-container">
              <button onClick={handlePrevClick}>
                <AiOutlineArrowLeft />
              </button>
              <span className="counter-image-carousel">
                {currentImageIndex + 1}/{numImages}
              </span>
              <button onClick={handleNextClick}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
