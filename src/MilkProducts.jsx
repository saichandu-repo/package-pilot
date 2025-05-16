import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './Products.css';

export function MilkProducts() {
  const milkItems = useSelector(globalState => globalState.products.milk);
  const dispatch = useDispatch();

  return (
    <div className="product-page milk-background">
      <h2 className="category-title">🥛 Milk & Dairy</h2>
      <div className="product-grid">
        {milkItems.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
