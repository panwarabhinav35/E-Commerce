import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const NavBar = () => {
    const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''></img>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==='shop'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}>Men{menu==='men'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==='women'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu==='kids'?<hr></hr>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt=''></img>
            <div className="nav-cart-count">0</div>
        </div>

    </div>

  )
}

export default NavBar