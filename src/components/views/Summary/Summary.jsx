import { useSelector } from "react-redux";
import Button from '../../common/Button/Button';
import './Summary.scss';

const Summary = () => {
  const cartProducts = useSelector(state => state.cart.cart);
  
  const total = cartProducts.reduce((acc, p) => acc + (p.quantity * p.price), 0);

  const handleSubmitContact = (e) => {
    e.preventDefault();
    alert("Zamówienie zostało wysłane!");
  };

  return (
    <div className="summaryPage">
      <h2>Podsumowanie zamówienia</h2>

      <div className="orderList">
        {cartProducts.map(p => (
          <div key={p.id} className="summaryItem">
            <div>
              <strong>{p.title}</strong>
              <p>Ilość: {p.quantity} * {p.price}zł</p>
              {p.info && <p>Uwagi:&nbsp;{p.info}</p>}
            </div>
            <div>
              {p.quantity * p.price} zł
            </div>
          </div>
        ))}
      </div>
      <div className="totalAmount">
        <h3>Łącznie do zapłaty: {total}zł</h3>
      </div>

      <hr />

      <div className="contactFormContainer">
        <h3>Dane do wysyłki</h3>
        <form onSubmit={handleSubmitContact}>
          <input type="text" placeholder="Imię i Nazwisko" required />
          <textarea placeholder="Adres dostawy"></textarea>
          <Button type="submit">Potwierdzam zakup</Button>
        </form>
      </div>
    </div>
  );
};

export default Summary;