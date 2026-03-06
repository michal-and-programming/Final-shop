import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductAsync } from "../../../redux/products.actions";
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductAsync());
  },[dispatch]);

  if(loading) return <div>Ładowanie w toku...</div>
  if(error) return <div>Błąd sieci</div>
  
  return(
    <div className="productsContainer">
      {products.map(p =>
        <div key = {p.id}>
          <div className="productImageContainer">
            <img src={p.images[0]} alt={p.title}></img>
          </div>
          <div>
            <p>{p.title}</p>
            <p>Cena: {p.price}zł</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default Home;
