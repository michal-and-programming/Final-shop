import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ProductGallery from '../../views/ProductGallery/ProductGallery';
import './ProductCard.scss';

const ProductCard = () => {
  const { id } = useParams();
  const productsData = useSelector(state => state.products.products);
  const product = productsData.find(p => p.id === Number(id));
  const itemQuantity = useSelector(state => state.products.quantity);

  const [quantity, setQuantity] = useState(itemQuantity);

  return(
    <div className="productContainer">
      <div>
        <ProductGallery images={product.images} title={product.title}/>
      </div>
      <div>
        <input 
          type="number"
          min="1"
          max="10"
          step="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ProductCard;
