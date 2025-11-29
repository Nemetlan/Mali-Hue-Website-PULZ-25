import Image from "next/image";
import styles from "./page.module.css";
import { ContactCard } from "../../public/components/page/contactCard";
import { mc_Alexandria600, mc_Samthing, mc_Alexandria400 } from "@/utils/fonts";
import { ItemsCardPlaceholder, ItemsCard } from "@/public/components/shop/ItemsCard";
import getProducts from "@/services/api";

export default function Home() {
  getProducts()
    .then((products) => {
      console.log("Fetched products:", products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ItemCardSpace}>
          <ItemsCard />
          <ItemsCardPlaceholder />
          <ItemsCardPlaceholder />
          <ItemsCardPlaceholder />
          <ItemsCardPlaceholder />
        </div>

        <section id="contact">
          <ContactCard />
        </section>
      </main>
    </div>
  );
}
