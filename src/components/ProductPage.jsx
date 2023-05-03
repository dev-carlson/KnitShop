import { useParams } from "react-router-dom";
import ShopComponents from "../imageComponents/ShopComponents";

const ProductPage = () => {
  const { id } = useParams();
  const selectedItem = ShopComponents.find((item) => item.id === id);

  return (
    <div className="product-page">
      <h1>{selectedItem.name}</h1>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <p>{selectedItem.description}</p>
      <p>{selectedItem.price}</p>
    </div>
  );
};

export default ProductPage;
