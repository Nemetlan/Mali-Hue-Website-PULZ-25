import Image from "next/image";
import styles from "./page.module.css";
import { ContactCard } from "../../public/components/page/contactCard";
import { mc_Alexandria600, mc_Samthing, mc_Alexandria400 } from "@/utils/fonts";
import { ItemsCardPlaceholder, ItemsCard } from "@/public/components/shop/ItemsCard";
import getProducts from "@/services/api";

export default async function Home() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
    // Optionally, render an error message to the user
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ItemCardSpace}>
          {products.map((product) => (
            <ItemsCard key={product.id} itemTitle={product.title} itemPrice={product.lowest_price} itemImage={product.thumbnail} itemDes={product.short_description} />
          ))}
        </div>

        <section id="contact">
          <ContactCard />
        </section>
      </main>
    </div>
  );
}
