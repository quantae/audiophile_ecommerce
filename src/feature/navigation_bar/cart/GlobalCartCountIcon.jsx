/* eslint-disable react/prop-types */
import styles from './global_cart_count_icon.module.css'



export const GlobalCartCountIcon = ({ count }) => (
    <div className={styles.cart_counter}>
      <p>{count}</p>
    </div>
  );

  