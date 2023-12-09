//import React from 'react'
import styles from "./navbar.module.css";
import LogoSVG from "../../assets/icons/logo.svg?react";
import Cart from "../../assets/icons/cart.svg?react";
import Hamburger from "../../assets/icons/hamburger.svg?react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <>
    <LogoSVG className={styles.logo} />
  </>
)

export const NavList = () => {
  return (
    <ul className={styles.nav_list}>
      <li>
        <Link to="/" className={styles.a}>HOME</Link>
      </li>
      <li>
        <Link to="/headphones" className={styles.a}>HEADPHONES</Link>
      </li>
      <li>
        <Link to="/speakers" className={styles.a}>SPEAKERS</Link>
      </li>
      <li>
        <Link to="/earphones" className={styles.a}>EARPHONES</Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Hamburger />
      </Link>
      <Logo />
      <Cart />
    </div>
  );
};

export default Navbar;
