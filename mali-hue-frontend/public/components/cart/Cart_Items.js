'use client';

import CartItem from "@/public/components/cart/cartItem";
import { getItemsFromCart } from "@/services/cart";




export function CartItems() {
    const cartItems = getItemsFromCart();
    console.log(cartItems);

    return (
        <div>
            {
                cartItems.map(item => {
                    return <CartItem key={item.itemID} itemID={item.itemID} price={item.price} />
                })
            } 
        </div>
    );
}                   
