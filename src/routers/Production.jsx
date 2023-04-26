import React, { useState } from "react";
import ProductionDetails from "../productionComponents/ProductionDetails";

import "../styles/Production.css";

function Production() {
  const [selectedProducts, setSelectedProducts] = useState(ProductionDetails);

  const handleCategoryClick = (categoryName) => {
    // filter the products that belong to the selected category
    const categoryProducts = ProductionDetails.filter(
      (product) => product.category === categoryName
    );
    // set the selected category products as the new state
    setSelectedProducts(categoryProducts);
  };

  const handleShowAllClick = () => {
    setSelectedProducts(ProductionDetails);
  };

  const designProducts = selectedProducts.filter(
    (product) => product.category === "design"
  );
  const materialProducts = selectedProducts.filter(
    (product) => product.category === "material"
  );
  const productionProducts = selectedProducts.filter(
    (product) => product.category === "production"
  );

  return (
    <div className="production-container">
      <div className="production-button-container">
        <button onClick={() => handleShowAllClick()}>All</button>
        <button onClick={() => handleCategoryClick("design")}>Design</button>
        <button onClick={() => handleCategoryClick("material")}>
          Material
        </button>
        <button onClick={() => handleCategoryClick("production")}>
          Production
        </button>
      </div>
      <div className="production-content">
        {designProducts.length > 0 && (
          <div className="production-row">
            <div className="production-items">
              {designProducts.map((product, index) => (
                <div key={index} className="production-item">
                  <h5>{product.title}</h5>
                  <img src={product.image} />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
        {materialProducts.length > 0 && (
          <div className="production-row">
            <div className="production-items">
              {materialProducts.map((product, index) => (
                <div key={index} className="production-item">
                  <h5>{product.title}</h5>
                  <img src={product.image} />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
        {productionProducts.length > 0 && (
          <div className="production-row">
            <div className="production-items">
              {productionProducts.map((product, index) => (
                <div key={index} className="production-item">
                  <h5>{product.title}</h5>
                  <img src={product.image} />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Production;
