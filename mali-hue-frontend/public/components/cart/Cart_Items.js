'use client';

import styles from "@/public/components/cart/cartItems.module.css"
import CartItem from "@/public/components/cart/cartItem";

export function CartItems({ items }) {

    return (
        <div className={styles.CartItems}>
            {
                items.map(item => {
                    // Assuming getProductById exists and works as intended
                    return <CartItem key={item.itemID} itemID={item.itemID} item={item} />
                })
            } 
        </div>
    );
}                   
