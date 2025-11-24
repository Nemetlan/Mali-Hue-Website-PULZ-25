import React from 'react';
import styles from './page.module.css';
import { mc_Alexandria400, mc_Alexandria600, mc_Samthing } from '@/utils/fonts';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <div className={styles.contactCardColumn1}>
          <div className={styles.contactCardTitle}>
            <p className={`${styles.ContactTitle} ${mc_Samthing.className}`}>Welcome Back</p>
          </div>
        </div>
        <div className={styles.contactCardColumn2}>
          <div className={styles.contactCardDesTitle}>
            <p className={`${styles.contactCardDesTitleTXT} ${mc_Alexandria600.className}`}>Dashboard Login</p>
          </div>
          <form className={styles.form}>
            <input 
                type="email" 
                placeholder="Email" 
                className={styles.formInput}
                name='ContactEmail'
                required
            />
            <input 
                type="password" 
                placeholder="Password" 
                className={styles.formInput}
                name='password'
                required
            />
            <button type="submit" className={styles.formSubmitBtn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
