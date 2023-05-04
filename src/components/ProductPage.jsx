import { useParams } from "react-router-dom";
import ShopComponents from "../imageComponents/ShopComponents";
import "../styles/ProductPage.css"

const ProductPage = () => {
  const { id } = useParams();
  const selectedItem = ShopComponents.find((item) => item.id === id);

  return (
    <div className="product-page">
      <h1 className="product-page-name">{selectedItem.name}</h1>
      <img className="product-page-image" src={selectedItem.image} alt={selectedItem.name} />
      <p className="product-page-description">{selectedItem.description}</p>
      <p className="product-page-price">{selectedItem.price}</p>
    </div>
  );
};

export default ProductPage;
