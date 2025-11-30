'use client';

function Add2Cart(itemID, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItemIndex = cart.findIndex(item => item.itemID === itemID);


    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1; 
        console.log(cart);
    } else {
        console.log("addeing");
        cart.push({ itemID, price, quantity: 1 });
    }
  localStorage.setItem('cart', JSON.stringify(cart));
  return true;
}


export function RemoveFromCart(itemID) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.itemID !== itemID);
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function getItemsFromCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}


export default Add2Cart;
