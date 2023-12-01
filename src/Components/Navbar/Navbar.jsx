import React, { useContext } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
export const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='name'>
            <p>Store Cart</p>
        </div>
        <Link style={{textDecoration:'none'}}to='/cart'><div className='nav-cart'>
            <img src={cart_icon} alt=""/>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div></Link>
    </div>
  )
}
