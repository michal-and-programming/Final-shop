import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from '../../common/Button/Button';
import { useState } from "react";
import { setInfo } from "../../../redux/cart/cart.actions";
import './Cart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cart);
  const total = cartProducts.reduce((acc, p) => {
    return acc + (p.quantity * p.price)
  }, 0);

  const handleTextChange = (id, value) => {
    setText(prev => ({ ...prev, [id]: value }));
  };

  const [text, setText] = useState({});

  const addInfo = (e, id) => {
    e.preventDefault();
    dispatch(setInfo(id, text[id]));
  };

  return(
    <div>
      {cartProducts.map(p => 
        <div key={p.id} className="cartProductContainer">
          <div className="imageContainer">
            <img src={p.image}/>
          </div>
          <div className="contentContainer">
            <p>{p.title}</p>
            <p>Cena:&nbsp;{p.price}</p>
            <div className="quantityContainer">
              <button>+</button>
              <input
                type="number"
                min="1"
                max="10"
                value={p.quantity}
                onKeyDown={(e) => e.preventDefault()}
              />
              <button>-</button>
            </div>
            <p>Suma:&nbsp;{p.quantity * p.price}zł</p>
          </div>
          <div className="formContainer">
            <form onSubmit={(e) => addInfo(e, p.id)}>
              <textarea 
                placeholder="Napisz informację do zamówienia"
                value={text[p.id]}
                onChange={(e) => handleTextChange(p.id, e.target.value)}
              ></textarea>
              <Button type="submit">Dodaj informację</Button>
            </form>
          </div>
        </div>
      )}
      <div className="summaryContainer">
        <p>Do zapłaty:&nbsp;{total}zł</p>
        <Link to={'/summary'}>
          <Button>Podsumowanie</Button>
        </Link>  
      </div>
    </div>
  )
}

export default Cart;