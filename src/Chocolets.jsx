import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './Products.css'; // Shared styling for all product components

export function Chocolets() {
  const choco = useSelector(globalState => globalState.products.chocolets);
  const dispatch = useDispatch();

  return (
    <div className="product-page veg-background">
      <h2 className="category-title">Chocolates</h2>
      <div className="product-grid">
        {choco.map((item, index) => (
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

