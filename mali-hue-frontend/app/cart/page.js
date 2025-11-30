import styles from "./page.module.css";
import { getItemsFromCart } from "@/services/cart";
import CartItems from "@/public/components/cart/cartItem";




export default function Page() {


  return (
    <div>
      <div className={styles.TitleContainer}>
        <p className={styles.CartTitle}>MT CART</p>
      </div>
      <div className={styles.CartContainer}>
        <div className={styles.ProductContainer}></div>
        <div className={styles.CheckoutContainer}>
          <div className={styles.CheckoutBox}></div>
        </div>
      </div>

    </div>
  );

}2