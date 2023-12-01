import React, { useContext, useState } from 'react';
import './Item.css';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(cartItems[props.id] || 0);

  const handleAddToCart = () => {
    addToCart(props.id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    addToCart(props.id, -1);
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="mrp">₹ {props.MRP}</div>
        <div className="price">₹ {props.price}</div>

        {quantity > 0 ? (
          <div className="quantity-controls">
            <button onClick={handleRemoveFromCart}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAddToCart}>+</button>
          </div>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Item;
