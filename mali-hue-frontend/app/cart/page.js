"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { getItemsFromCart } from "@/services/cart";
import { CartItems } from "@/public/components/cart/Cart_Items";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = getItemsFromCart();
    setItems(cartItems);
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <div className={styles.MainOfCart}>
      <div className={styles.TitleContainer}>
        <p className={styles.CartTitle}>MY CART</p>
      </div>
      <div className={styles.CartContainer}>
        <div className={styles.ProductContainer}>
          <CartItems items={items} />
        </div>
        <div className={styles.CheckoutContainer}>
          <div className={styles.CheckoutBox}>
            <h2>Order Summary</h2>
            <div className={styles.SummaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.SummaryRow}>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div className={styles.TotalRow}>
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <Link href="/checkout" className={styles.CheckoutButton}>
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}