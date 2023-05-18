import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShopComponents from "../imageComponents/ShopComponents";
import "../styles/Shop.css";

const Shop = () => {
  const [selectedDressType, setSelectedDressType] = useState(ShopComponents);

  const handleFilterImage = () => {
    setSelectedDressType(ShopComponents);
  };

  return (
    <div className="shop-container">
    <div className="shop-title-container">
      SHOP
    </div>
      <div className="dress-types">
        <div className="title-description">NAVY</div>
        <div className="shop-navy-container">
          {selectedDressType
            .filter((item) => item.category === "navy")
            .map((item, index) => (
              <Link key={index} to={`/product/${item.id}`}>
                <div className="shop-image-container">
                  <img src={item.image} alt={item.name} />
                  <p className="shop-image-container-name">{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
        <div className="title-description">SAILOR</div>
        <div className="shop-sailor-container">
          {selectedDressType
            .filter((item) => item.category === "sailor")
            .map((item, index) => (
              <Link key={index} to={`/product/${item.id}`}>
                <div className="shop-image-container">
                  <img src={item.image} alt={item.name} />
                  <p className="shop-image-container-name">{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
        <div className="title-description">SKIPPER</div>
        <div className="shop-skipper-container">
          {selectedDressType
            .filter((item) => item.category === "skipper")
            .map((item, index) => (
              <Link key={index} to={`/product/${item.id}`}>
                <div className="shop-image-container">
                  <img src={item.image} alt={item.name} />
                  <p className="shop-image-container-name">{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
