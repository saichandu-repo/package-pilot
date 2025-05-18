import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './Products.css';

export function MilkProducts() {
  const milkItems = useSelector(globalState => globalState.products.milk);
  const dispatch = useDispatch();

  return (
    <div className="product-page milk-background">
      <h2 className="category-title">🥛 Milk & Dairy</h2>
      <div className="first">
        {milkItems.map((item, index) => (
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
