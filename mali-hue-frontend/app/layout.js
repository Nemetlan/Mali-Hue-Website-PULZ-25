import "./globals.css";
import styles from "./layout.module.css";
import localFont from 'next/font/local';
import { mc_OleaOlive, mc_Samthing, mc_Alexandria400 } from '../utils/fonts';
// You can also centralize fonts in `utils/fonts.js` and import them.
import Image from "next/image";
import { NavBar } from '../public/components/navbar';
import { CreditBar } from '../public/components/creditbar';

export const metadata = {
  title: "Mali Hue",
  description: "Designed and Developed by Thilina Jayasekara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mc_OleaOlive.className} ${mc_Samthing.className} ${mc_Alexandria400.className}`}>
          <div className={styles.Wholepage}>
            <NavBar />
            {children}
            <CreditBar />
          </div>
      </body>
    </html>
  );
}


