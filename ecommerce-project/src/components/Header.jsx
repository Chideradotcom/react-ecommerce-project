import { NavLink } from 'react-router';
import './header.css'
import CartIconImage from "../assets/images/icons/cart-icon.png"
import SearchIconImage from "../assets/images/icons/search-icon.png"
import LogoWhiteImage from "../assets/images/logo-white.png"
import MobileLogoWhiteImage from "../assets/images/mobile-logo-white.png"

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={LogoWhiteImage} />
          <img className="mobile-logo" src={MobileLogoWhiteImage} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SearchIconImage} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className={({ isActive }) => `orders-link header-link ${isActive ? 'active' : ''}`} to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className={({ isActive }) => `cart-link header-link ${isActive ? 'active' : ''}`} to="/checkout">
          <img className="cart-icon" src={CartIconImage} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
