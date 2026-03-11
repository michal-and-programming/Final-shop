import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector(state => state.cart.cart);
  const total = cartProducts.reduce((acc, p) => {
    return acc + (p.quantity * p.price)
  }, 0);

  return(
    <div>
    {cartProducts.map(p => 
      <div key={p.id}>
        <div>
          <img src={p.image}/>
        </div>
        <p>{p.title}</p>
        <p>Cena:&nbsp;{p.price}</p>
        <button>+</button>
        <input 
          type="number"
          min="1"
          max="10"
          value={p.quantity}
          onKeyDown={(e) => e.preventDefault()}
        />
        <button>-</button>
        <p>Suma:&nbsp;{p.quantity * p.price}</p>
      </div>
    )}
    <div>
      <p>Do zapłaty:&nbsp;{total}</p>
    </div>
    </div>
  )
}

export default Cart;