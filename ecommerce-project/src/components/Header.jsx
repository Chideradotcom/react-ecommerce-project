import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import './Header.css'
import CartIconImage from "../assets/images/icons/cart-icon.png"
import SearchIconImage from "../assets/images/icons/search-icon.png"
import LogoWhiteImage from "../assets/images/logo-white.png"
import MobileLogoWhiteImage from "../assets/images/mobile-logo-white.png"

export function Header({ cart }) {
  const [searchParams] = useSearchParams()
  const searchText = searchParams.get('search')
  const [search, setSearch] = useState(searchText || '')
  const navigate = useNavigate()

  const updateSearchInput = (event)=>{
    setSearch(event.target.value)
  }
  
  const printSearch = () => {
    console.log(search);
    navigate(`/?search=${search}`)
    setSearch('')
  }

  const enterSearch = (event) => {
    if(event.key==="Enter"){
      printSearch()
    }else if(event.key==="Escape"){
      setSearch('')
    }
  }

  let totalQuantity = 0
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity
  })
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={LogoWhiteImage} />
          <img className="mobile-logo" src={MobileLogoWhiteImage} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" 
        value={search}
        onChange={updateSearchInput}
        onKeyDown={enterSearch}/>

        <button className="search-button" onClick={printSearch}>
          <img className="search-icon" src={SearchIconImage} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className={({ isActive }) => `orders-link header-link ${isActive ? 'active' : ''}`} to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className={({ isActive }) => `cart-link header-link ${isActive ? 'active' : ''}`} to="/checkout">
          <img className="cart-icon" src={CartIconImage} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
