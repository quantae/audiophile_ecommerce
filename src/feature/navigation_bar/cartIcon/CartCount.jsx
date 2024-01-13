/* eslint-disable react/prop-types */
import styles from './cart_icon.module.css'



export const CartCount = ({ count }) => (
    <div className={styles.cart_counter}>
      <p>{count}</p>
    </div>
  );