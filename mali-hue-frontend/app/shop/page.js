import Image from "next/image";
import styles from "./page.module.css";
import { ContactCard } from '../../public/components/page/contactCard';
import { mc_Alexandria600, mc_Samthing, mc_Alexandria400 } from "@/utils/fonts";
import { ItemsCardPlaceholder } from "@/public/components/shop/ItemsCard";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.ItemCardSpace}>
          <ItemsCardPlaceholder />
          <ItemsCardPlaceholder />
          <ItemsCardPlaceholder />
          <ItemsCardPlaceholder />
        </div>
        
       <section id="contact"><ContactCard /></section> 
      </main>
    </div>
  );
}
