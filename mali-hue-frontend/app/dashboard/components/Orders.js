import React from 'react';
import styles from './Orders.module.css';

const orders = [
  { id: 1, customer: 'John Doe', date: '2023-01-15', total: '$150.00', status: 'Shipped' },
  { id: 2, customer: 'Jane Smith', date: '2023-01-16', total: '$250.00', status: 'Processing' },
  { id: 3, customer: 'Bob Johnson', date: '2023-01-17', total: '$75.50', status: 'Delivered' },
];

export default function Orders() {
  return (
    <div className={styles.orders}>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
