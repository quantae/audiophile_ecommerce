/* eslint-disable react/prop-types */
import {useState} from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../feature/navigation_bar/navbar/Navbar';
import CartPage from '../pages/cart/CartPage';
import styles from './root_layout.module.css';
import { CartProvider } from '../components/context/CartContext';

const RootLayout = ({ children}) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  
  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  }

  return (
    <CartProvider>
       <div>
      <Navbar onClick={toggleCartModal} />
      {isCartModalOpen && <div className={styles.modal_outer}><CartPage/></div>}
      {children}
      <Footer />
    </div>
    </CartProvider>
   
  );
};

export default RootLayout;
