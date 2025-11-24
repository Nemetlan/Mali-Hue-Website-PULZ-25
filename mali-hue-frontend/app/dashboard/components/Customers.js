import React from 'react';
import styles from './Customers.module.css';

const customers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', totalSpent: '$1,500.00' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', totalSpent: '$2,500.00' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', totalSpent: '$750.50' },
];

export default function Customers() {
  return (
    <div className={styles.customers}>
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.totalSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
