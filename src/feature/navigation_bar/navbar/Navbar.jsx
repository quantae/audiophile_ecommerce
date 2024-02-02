/* eslint-disable react/prop-types */
//import React from 'react'

// library imports
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//component imports
import styles from "./navbar.module.css";
import LogoSVG from "../../../assets/icons/logo.svg?react";
import Cart from "../../../assets/icons/cart.svg?react";
import Hamburger from "../../../assets/icons/hamburger.svg?react";
import { GlobalCartCountIcon } from "../cart/GlobalCartCountIcon";

// reducer/ component imports
import { selectCartCount } from "../cart/cartSlice";

export const Logo = () => (
  <>
    <Link to="/">
      <LogoSVG className={styles.logo} />
    </Link>
  </>
);

export const NavList = ({ className }) => {
  return (
    <ul className={`${styles.nav_list} ${className}`}>
      <li>
        <Link to="/" className={styles.a}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="/categories/headphones" className={styles.a}>
          HEADPHONES
        </Link>
      </li>
      <li>
        <Link to="/categories/speakers" className={styles.a}>
          SPEAKERS
        </Link>
      </li>
      <li>
        <Link to="/categories/earphones" className={styles.a}>
          EARPHONES
        </Link>
      </li>
    </ul>
  );
};

// eslint-disable-next-line no-unused-vars
const Navbar = ({ onClick, openMenu }) => {
  const cartCount = useSelector(selectCartCount);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Hamburger onClick={openMenu} className={styles.hamburger} />

        <Logo />
        <NavList className={styles.nav_list_header} />
        <div className={styles.cart_wrapper} onClick={onClick}>
          <Cart />
          <GlobalCartCountIcon count={cartCount} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
