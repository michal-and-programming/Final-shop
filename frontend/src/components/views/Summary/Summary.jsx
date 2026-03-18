import { useSelector } from "react-redux";
import { useState } from "react";
import Button from '../../common/Button/Button';
import './Summary.scss';

const Summary = () => {
  const cartProducts = useSelector(state => state.cart.cart);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  
  const total = cartProducts.reduce((acc, p) => acc + (p.quantity * p.price), 0);

  const handleSubmitContact = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: cartProducts.map(p => ({
          productId: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity,
          image: p.image,
          info: p.info || ""
        })),
        totalPrice: total,
        customer: {
          name,
          address
        }
      })
    });

    if (!response.ok) {
      throw new Error("Błąd zamówienia");
    }

    alert("Zamówienie zapisane!");

  } catch (err) {
    alert(err.message);
  }
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

      <div className="contactFormContainer">
        <h3>Dane do wysyłki</h3>
        <form onSubmit={handleSubmitContact}>
          <input 
            type="text" 
            placeholder="Imię i Nazwisko" 
            required 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <textarea 
            placeholder="Adres dostawy" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}>
          </textarea>
          <Button type="submit">Potwierdzam zakup</Button>
        </form>
      </div>
    </div>
  );
};

export default Summary;