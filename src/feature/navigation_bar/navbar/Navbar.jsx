/* eslint-disable react/prop-types */
//import React from 'react'

//dependency imports
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

//component imports
import styles from "./navbar.module.css";
import LogoSVG from "../../../assets/icons/logo.svg?react"
import Cart from "../../../assets/icons/cart.svg?react"
import Hamburger from "../../../assets/icons/hamburger.svg?react"
import { GlobalCartCountIcon } from "../cart/GlobalCartCountIcon";

// reducer imports
import { selectCartCount } from "../cart/cartSlice";



export const Logo = () => (
  <>
    <Link to="/">
      <LogoSVG className={styles.logo} />
    </Link>
  </>
);


export const NavList = () => {
  return (
    <ul className={styles.nav_list}>
      <li>
        <Link to="/" className={styles.a}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="/headphones" className={styles.a}>
          HEADPHONES
        </Link>
      </li>
      <li>
        <Link to="/speakers" className={styles.a}>
          SPEAKERS
        </Link>
      </li>
      <li>
        <Link to="/earphones" className={styles.a}>
          EARPHONES
        </Link>
      </li>
    </ul>
  );
};

// eslint-disable-next-line no-unused-vars
const Navbar = ({ onClick, count }) => {
 const cartCount = useSelector(selectCartCount);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Hamburger />
      </Link>
      <Logo />
      <div className={styles.cart_wrapper}>
        <Cart onClick={onClick} />
        <GlobalCartCountIcon count={cartCount}/>
      </div>
    </div>
  );
};

export default Navbar;
