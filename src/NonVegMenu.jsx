import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './Products.css';


export function NonVegMenu() {
  const nonveg = useSelector(globalState => globalState.products.nonveg);
  const dispatch = useDispatch();

  return (
    <div className="product-page nonveg-background">
      <h2 className="category-title">🍗 Non-Veg Specials</h2>
      <div className="first">
        {nonveg.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <b>Price: ₹{item.price}</b>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
