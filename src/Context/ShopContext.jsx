
import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: '',
    address: '',
    contactNumber: '',
  });

  useEffect(() => {
    // Load cart and delivery address from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart')) || getDefaultCart();
    const storedDeliveryAddress = JSON.parse(localStorage.getItem('deliveryAddress')) || { name: '', address: '', contactNumber: '' };

    setCartItems(storedCart);
    setDeliveryAddress(storedDeliveryAddress);
  }, []);

  useEffect(() => {
    // Save cart and delivery address to local storage whenever they change
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress));
  }, [cartItems, deliveryAddress]);

  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const generateOrderID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    generateOrderID,
    deliveryAddress,
    setDeliveryAddress,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
