import React, { useState } from "react";
import ShopComponents from "../imageComponents/ShopComponents";

const Shop = () => {
  const [selectedDressType, setSelectedDressType] = useState(ShopComponents);

  const handleFilterClick = () => {
    setSelectedDressType(ShopComponents);
  };

  return (
    <>
      <div className="dress-types">
        <div className="title-description">NAVY</div>
        <div className="shop-navy-container">
          {selectedDressType
            .filter((item) => item.category === "navy")
            .map((item, index) => (
              <img key={index} src={item.image} />
            ))}
        </div>
        <div className="title-description">SAILOR</div>
        <div className="shop-sailor-container">
          {selectedDressType
            .filter((item) => item.category === "sailor")
            .map((item, index) => (
              <img key={index} src={item.image} />
            ))}
        </div>
      </div>
      <div className="shop-skipper-container">
        <div className="title-description">SKIPPER</div>
        {selectedDressType
          .filter((item) => item.category === "skipper")
          .map((item, index) => (
            <img key={index} src={item.image} />
          ))}
      </div>
    </>
  );
};

export default Shop;
