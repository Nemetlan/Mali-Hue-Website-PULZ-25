"use client";

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart');
      const parsed = raw ? JSON.parse(raw) : [];
      if (parsed && parsed.length > 0) {
        setCart(parsed);
      } else {
        // Temporary sample data for development/demo purposes
        const sample = [
          { id: 'sample-1', name: 'Timeless Bark', price: 1200, qty: 1, image: '/photos/1.png' },
          { id: 'sample-2', name: 'Ethereal Swirl', price: 850, qty: 2, image: '/photos/2.png' },
          { id: 'sample-3', name: 'Quiet Resolve', price: 650, qty: 1, image: '/photos/3.png' }
        ];
        setCart(sample);
      }
    } catch (e) {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, it) => s + (Number(it.price || 0) * Number(it.qty || 1)), 0);

  const checkout = () => {
    // Placeholder behaviour — integrate payment or order flow here
    alert('Checkout not implemented — cart total: ' + total.toFixed(2));
  };

  return (
    <main className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Your Cart</h1>

        {cart.length === 0 ? (
          <div className={styles.empty}> 
            <p>Your cart is empty.</p>
            <Link href="/shop" className={styles.shopLink}>Browse Works</Link>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {cart.map(item => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.thumb}>
                    {item.image ? (
                      <Image src={item.image} alt={item.name} width={120} height={120} className={styles.img} />
                    ) : (
                      <div className={styles.placeholder}>No image</div>
                    )}
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>${Number(item.price || 0).toFixed(2)}</div>
                    <div className={styles.controls}>
                      <button onClick={() => updateQty(item.id, (item.qty || 1) - 1)} aria-label="Decrease">−</button>
                      <input type="number" min="1" value={item.qty || 1} onChange={(e) => updateQty(item.id, Number(e.target.value))} />
                      <button onClick={() => updateQty(item.id, (item.qty || 1) + 1)} aria-label="Increase">+</button>
                      <button className={styles.remove} onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>
                  <div className={styles.subtotal}>${((item.price||0) * (item.qty||1)).toFixed(2)}</div>
                </li>
              ))}
            </ul>

            <aside className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <div className={styles.summaryActions}>
                <button className={styles.clear} onClick={clearCart}>Clear Cart</button>
                <button className={styles.checkout} onClick={checkout}>Checkout</button>
              </div>
            </aside>
          </>
        )}
      </div>
    </main>
  );
}
