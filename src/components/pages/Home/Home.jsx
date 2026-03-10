import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductAsync } from "../../../redux/products/products.actions";
import { Link } from "react-router-dom";
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
      <Link key = {p.id} to={`/product/${p.id}`}>
        <div className="productCard">
          <div className="productCardImageContainer">
            <img src={p.images[0]} alt={p.title}/>
          </div>
          <div className="productCardTextContainer">
            <p>{p.title}</p>
            <p>Cena:&nbsp;{p.price}zł</p>
          </div>
        </div>
        </Link>
      )}
    </div>
  )
}
export default Home;
