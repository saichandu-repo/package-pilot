import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from 'emailjs-com';
import Confetti from 'react-confetti';
import { v4 as uuidv4 } from 'uuid';
import { incCart, decCart, removeCartItem, clearCart, addOrder } from './store';
import './Cart.css'; // Assuming you have a separate CSS file for styling

function Cart( {isLogged}) {
  const cuponCodeRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const taxper = 5;

  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);
  const [cuponDiscount, setCuponDiscount] = useState(0);
  const [cupon, setCuponCode] = useState('');
  const [show, setShow] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [customerMail, setCustomerMail] = useState('');
  const [message, setMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const DiscountPer = (per) => {
    setApplied(true);
    setDiscount(per);
  };
  

  const cuponHandling = () => {
    const cuponInput = cuponCodeRef.current.value.trim().toUpperCase();
    setCuponCode(cuponInput);
    switch (cuponInput) {
      case 'DIWALI10':
        setCuponDiscount(10);
        break;
      case 'DIWALI20':
        setCuponDiscount(20);
        break;
      case 'DIWALI30':
        setCuponDiscount(30);
        break;
      case 'DIWALI40':
        setCuponDiscount(40);
        break;
      default:
        alert('Coupon code invalid');
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const calculateAmount = () => {
    const discountAmount = (totalPrice * discount) / 100;
    const couponDiscountAmount = (totalPrice * cuponDiscount) / 100;
    const priceAfterDiscount = totalPrice - discountAmount - couponDiscountAmount;
    const taxAmount = (priceAfterDiscount * taxper) / 100;
    const finalPrice = priceAfterDiscount + taxAmount;

    return { discountAmount, couponDiscountAmount, priceAfterDiscount, taxAmount, finalPrice };
  };

  const { discountAmount, couponDiscountAmount, priceAfterDiscount, taxAmount, finalPrice } = calculateAmount();

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
    setMessage(`${item.name} removed from cart`);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleClearCart = () => {
    const confirmed = window.confirm('Are you sure you want to clear the cart?');
    if (confirmed) {
      dispatch(clearCart());
    }
  };

  const purchase = () => {
    const purchaseDate = new Date().toLocaleString();
    const orderId = uuidv4();
    const purchaseDetails = {
      orderId: orderId,
      date: purchaseDate,
      items: [...cartItems],
      finalPrice: finalPrice,
    };
    dispatch(clearCart());
    dispatch(addOrder(purchaseDetails));
    setShow(true);
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
      navigate('/orders');
    }, 5000);

    const templateParams = {
      order_id:  purchaseDetails.orderId,
      orders: cartItems.map((item) => ({
        name: item.name,
        image_url: item.img,
        price: item.price,
        units: item.quantity,
      })),
      cost: {
        totalAmount: totalPrice,
        discountAmount: discountAmount,
        taxAmount: taxAmount,
        cuponAmount:couponDiscountAmount,
        finalPrice: finalPrice,
      },
      email: customerMail,
    };

    emailjs
      .send('service_jqmb25s', 'template_4lf415t', templateParams, 'b1zanMyu7UfP7u5sN')
      .then(() => {
        alert('Successfully sent email');
      })
      .catch((error) => {
        alert('Error sending email');
      });
  };

  const available = true 

  useEffect(()=>{
    if(!isLogged )
    navigate("/signin")

  },[])

  return (
    
    <>
       {  available === isLogged && 
       <>


        {orderPlaced && <Confetti />}
        <div className="cart-container">
          {message && <div className="highlight-message">{message}</div>}

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h1>No Items in Cart</h1>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.img} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <b>Price: ₹{item.price}</b>
                  <div className="cart-item-actions">
                    <button onClick={() => dispatch(incCart(item))}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(decCart(item))}>-</button>
                    <button onClick={() => handleRemoveItem(item)}>
                      <img src="/delete.png" alt="Delete" width="20px" height="20px" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="payment-details">
            <button onClick={handleClearCart}>CLEAR CART</button>
            <h1><u>Payment Details</u></h1>
            <h3>Total Price: ₹{totalPrice}</h3>

            <div className="discount-section">
              <strong>Discount Apply: </strong>
              {[10, 20, 30].map((percent) => (
                <button key={percent} onClick={() => DiscountPer(percent)}>
                  {percent}%
                </button>
              ))}
              <b className={`discount-status ${applied ? "applied" : "not-applied"}`}>
                {applied ? "Discount Applied" : "Discount Not Applied"}
              </b>
              <h3>Discount Amount ({discount}%): -₹{discountAmount}</h3>
            </div>

            <input type="text" placeholder="Coupon Code" ref={cuponCodeRef} />
            <button onClick={cuponHandling}>Apply Coupon</button>
            <h3>Coupon Discount ({cupon}): -₹{couponDiscountAmount}</h3>
            <h3>Tax Amount ({taxper}%): +₹{taxAmount}</h3>
            <hr />
            <h1>Final Price: ₹{finalPrice}</h1>

            <div className="email-section">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setCustomerMail(e.target.value)}
              />
              <i>*For communication purposes</i>
            </div>

            <div className="payment-method">
              <b>Select Payment Method:</b>
              <button onClick={() => setPaymentMethod('qr')}>QR Code</button>
              <button onClick={() => setPaymentMethod('card')}>Card</button>

              {paymentMethod === 'qr' && (
                <div className="qr-section">
                  <h4>Scan QR to pay ₹{finalPrice.toFixed(2)}</h4>
                  <QRCode
                    value={`upi://pay?pa=sschandu7491@ybl&pn=chandu&am=${finalPrice.toFixed(2)}&cu=INR`}
                  />
                 <br></br> <b>UPI ID: sschandu7491@ybl</b>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="card-form">
                  <h4>Enter Card Details to pay ₹{finalPrice.toFixed(2)}</h4>
                  <input type="text" placeholder="Cardholder Name" />
                  <input type="text" placeholder="Card Number" />
                  <input type="text" placeholder="MM/YYYY" />
                  <input type="text" placeholder="CVV" />
                  <button>Proceed</button>
                </div>
              )}
            </div>

            <button id="purchase" onClick={purchase}>
              Payment Done
            </button>
          </div>
        )}

        {show && (
          <div className="thank-you">
            <b>
              Thank you for using PackagePilot...
              <br />
              Redirecting to Orders page...
            </b>
          </div>
        )}
      </>}
      </>

);

}

export default Cart;
