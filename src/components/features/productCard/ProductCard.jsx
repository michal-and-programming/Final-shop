import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { addToCart } from "../../../redux/cart/cart.actions";
import ProductGallery from '../../views/ProductGallery/ProductGallery';
import Button from "../../common/Button/Button";
import './ProductCard.scss';

const ProductCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productsData = useSelector(state => state.products.products);
  const product = productsData.find(p => p.id === Number(id));

  const [amount, setAmount] = useState(1);

  const handleAdd = () => {
    dispatch(addToCart({
      id: Number(id),
      title: product.title,
      price: product.price,
      quantity: Number(amount),
      image: product.images[0]
    }))
  }

  if(!product) return <p>Coś poszło nie tak</p>

  return(
    <div className="productContainer">
      <div>
        <ProductGallery images={product.images} title={product.title} />
      </div>
      <div className="productDataContainer">
        <div>
          <h2>{product.title}</h2>
          <h3>{product.description}</h3>
        </div>
        <div>
          <span>Cena:&nbsp;{product.price}zł</span>
          <input 
            type="number"
            min="1"
            max="10"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => e.preventDefault()}
          />
        </div>
        <div className="productButtonContainer">
          <Button onClick={handleAdd}>Dodaj do koszyka</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
