'use client';
import React, { useState } from 'react';
import styles from './Settings.module.css';

export default function Settings() {
  const [settings, setSettings] = useState({
    storeName: 'Mali Hue',
    currency: 'USD',
    language: 'English',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="storeName">Store Name</label>
          <input type="text" id="storeName" name="storeName" value={settings.storeName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="currency">Currency</label>
          <select id="currency" name="currency" value={settings.currency} onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="language">Language</label>
          <select id="language" name="language" value={settings.language} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <button type="submit" className={styles.saveButton}>Save Settings</button>
      </form>
    </div>
  );
}
