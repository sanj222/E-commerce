import React, { useContext, useState } from 'react'
import './CartItems.css'
import all_product from '../Assets/all_product'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart, generateOrderID, deliveryAddress, setDeliveryAddress } = useContext(ShopContext);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
  
    const handleMakePayment = () => {
      
      setTimeout(() => {
        
        clearCart();
        const orderID = generateOrderID();
        alert(`Order placed successfully! Order ID: ${orderID}`);
        setDeliveryAddress({
          name: '',
          address: '',
          contactNumber: '',
        });
  
        
        setShowSuccessModal(true);
      }, ); 
    };
  
    return (
      <div className='cartItems'>
        
  
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt="" className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>₹{e.price}</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>₹{e.price * cartItems[e.id]}</p>
                  <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
            <div className="delivery-details">
          <label htmlFor="name">Name:</label>
          <input required
            type="text"
            id="name"
            value={deliveryAddress.name}
            onChange={(e) => setDeliveryAddress({ ...deliveryAddress, name: e.target.value })}
          />
  
          <label htmlFor="address">Address:</label>
          <input required
            type="text"
            id="address"
            value={deliveryAddress.address}
            onChange={(e) => setDeliveryAddress({ ...deliveryAddress, address: e.target.value })}
          />
  
          <label htmlFor="contactNumber">Contact Number:</label>
          <input required
            type="text"
            id="contactNumber"
            value={deliveryAddress.contactNumber}
            onChange={(e) => setDeliveryAddress({ ...deliveryAddress, contactNumber: e.target.value })}
          />
        </div>
  
        {showSuccessModal && (
          <div className="success-modal">
            <p>Your order has been placed successfully!</p>
            <p>Order ID: {generateOrderID()}</p>
            
          </div>
        )}
            <button onClick={handleMakePayment}>Make Payment</button>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default CartItems;