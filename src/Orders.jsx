import { useSelector } from 'react-redux';
import './Order.css'; // Ensure this file contains your styles
import { useState } from 'react';

function Orders() {
  const allOrders = useSelector(globalState => globalState.orders);
  const [visibleOrderIds, setVisibleOrderIds] = useState([]);

  const toggleOrderDetails = (orderId) => {
    setVisibleOrderIds(prevState =>
      prevState.includes(orderId)
        ? prevState.filter(id => id !== orderId)
        : [...prevState, orderId]
    );
   };
 

   const orderList =allOrders.map((order, index) => (
    <div key={index} className="order-card">
      <div className="order-header">
        <strong>Order Id:</strong> {order.orderId}
       <strong>Order Date:</strong> {order.date}
        <strong>Total Amount:</strong> ₹{order.finalPrice}
        <button onClick={() => toggleOrderDetails(order.orderId)}>
          {visibleOrderIds.includes(order.orderId) ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {visibleOrderIds.includes(order.orderId) && (
        <div className="order-items">
          <p><strong>Items:</strong></p>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                <span>Name: {item.name}</span>, 
                <span> Price: ₹{item.price}</span>, 
                <span> Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ));

  return (
    <div className="orders-container">
      <h2>All Orders</h2>
      {allOrders.length === 0 ? <p>No orders found.</p> : <><div style={{width:"100%"}}><img src="https://media1.giphy.com/media/hWco3fzBujt2CqaQBB/giphy.gif" width="60px" height="60px"></img></div>{orderList}</>}
    </div>
  );
}

export default Orders;
