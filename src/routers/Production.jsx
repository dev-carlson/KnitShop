import React, { useState } from "react";
import design1 from "../assets/design1.jpg";
import design2 from "../assets/design2.jpg";
import design3 from "../assets/design3.jpg";
import design4 from "../assets/design4.jpg";
import material1 from "../assets/material1.jpg";
import material2 from "../assets/material2.jpg";
import material3 from "../assets/material3.jpg";
import material4 from "../assets/material4.jpg";
import production1 from "../assets/production1.jpg";
import production2 from "../assets/production2.jpg";
import production3 from "../assets/production3.jpg";
import production4 from "../assets/production4.jpg";

// Array of dress data with id, images, and name properties
const productionData = [
  { id: 1, images: [design1, design2, design3, design4], name: "Design" },
  {
    id: 2,
    images: [material1, material2, material3, material4],
    name: "Material",
  },
  {
    id: 3,
    images: [production1, production2, production3, production4],
    name: "Production",
  },
];

function Production() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to update the selectedProduct state when a product button is clicked
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to handle the click event for the Design button
  const handleDesignClick = () => {
    setSelectedProduct({
      id: 1,
      images: [design1, design2, design3, design4],
      name: "Design",
    });
  };

  const handleProductionClick = () => {
    setSelectedProduct({
      id: 3,
      images: [production1, production2, production3, production4],
      name: "Production",
    });
  };

  // Filter the productionData array based on the selectedProduct state
  const filteredProducts = selectedProduct
    ? productionData.filter((product) => product.id === selectedProduct.id)
    : productionData;

  return (
    <div>
      <h1>Dresses</h1>
      <div>
        <button onClick={() => setSelectedProduct(null)}>All Dresses</button>
        <button
          onClick={() =>
            handleDesignClick({
              id: 1,
              images: [design1, design2, design3, design4],
              name: "Blue Dress",
            })
          }
        >
          Design
        </button>
        <button onClick={() => handleProductClick({ id: 2, name: "Material" })}>
          Material
        </button>
        <button
          onClick={() => handleProductionClick({ id: 3, name: "Production" })}
        >
          Production
        </button>
      </div>
      <ul>
        {/* Map over the filteredProducts array and render each product with its images as list items */}
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name}
            <ul>
              {product.images.map((image, index) => (
                <li key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Production;
