/* eslint-disable react/prop-types */
// library imports
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// component imports
import Footer from "../components/footer/Footer";
import Navbar from "../feature/navigation_bar/navbar/Navbar";
import CartPage from "../pages/cart/CartPage";
import styles from "./root_layout.module.css";
import ClickOutSide from "../components/clickOutSide/ClickOutSide";

// state/variable imports

import MobileMenu from "../components/mobile_menu/MobileMenu";

/**
 * Layout for the entire application
 */
const RootLayout = ({ children }) => {
  const exceptionRef = useRef();
  const navigate = useNavigate();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar
        onClick={() => {
          toggleCartModal();
        }}
        openMenu={() => {
          toggleMenu();
          console.log("menuOpen: ", menuOpen);
        }}
      />
     
      {isCartModalOpen && (
        <ClickOutSide
          onClick={() => setIsCartModalOpen(false)}
          exceptionRef={exceptionRef}
        >
          <div className={styles.modal_outer}>
            <CartPage variant="A" onClick={() => navigate("/checkout")} />
          </div>
        </ClickOutSide>
      )}
      {menuOpen && (
        <div className={styles.mobile_menu_modal_outer}>
          <MobileMenu onClick={() => setMenuOpen(false)} />
        </div>
      )}
      <div className=''>
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default RootLayout;
