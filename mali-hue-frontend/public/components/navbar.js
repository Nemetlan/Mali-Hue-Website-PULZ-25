import React from 'react';
import styles from './navbar.module.css'
import Image from 'next/image';
import { mc_OleaOlive, mc_Alexandria400, mc_Samthing} from '../../utils/fonts';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export function NavBar () {
  return (          
  <nav className={styles.navbar}>
    <div className={styles.navLeftCont}>
      <div className={mc_OleaOlive.className}>
        <p className={styles.NameOfStore}><Link href='/'>Mali Hue</Link></p>
      </div>
    </div>
    <div className={styles.navLeftCont}>
      <Link href='/shop' className={styles.NavBarItemsTXT}>
        Works
      </Link>
      <p className={styles.NavBarItemsTXT}>About</p>
      <div className={styles.cartIconCont}>
        <Image
          src="/icon/basket.svg"
          alt="Cart Icon"
          width={45}
          height={45}
          className={styles.cartIcon}
        />
      </div>
      <div className={styles.ContactUsCont}>
        <a href='#contact'><p className={`${styles.ContactusBTN} ${styles.NavBarItemsTXT}`}>Contact</p></a>
      </div>
    </div>
    </nav>
  );

}