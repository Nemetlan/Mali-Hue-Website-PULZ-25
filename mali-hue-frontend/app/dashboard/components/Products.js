'use client'
import React, { useState } from 'react';
import styles from './Products.module.css';

const initialProducts = [
  { id: 1, name: 'Product 1', price: '$25.00', stock: 100 },
  { id: 2, name: 'Product 2', price: '$50.00', stock: 50 },
  { id: 3, name: 'Product 3', price: '$15.00', stock: 200 },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className={styles.products}>
      <h2>Products</h2>
      <button className={styles.addButton}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton} onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
