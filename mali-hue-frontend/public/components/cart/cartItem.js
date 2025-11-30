import styles from "./cartItem.module.css";
import { getProductById } from "@/services/api";
import Image from "next/image";
import { getItemsFromCart } from "@/services/cart";




export default function CartItem(itemID, price) {

    const product = getProductById(itemID, price);

    const {
      thumbnail: productThumbnail,
      category: productCategory,
      short_description: productDescription,
      artist: productArtist,
      variants: productVarients,
      title: productTitle
    } = product;

    return (
        <div>
            <div className={styles.itemContainer}>
                <div className={styles.itemThumbnail}>
                    <Image
                        src={productThumbnail}
                        alt={productTitle}
                        width={50}
                        height={50}
                    />
                </div>
                <div className={styles.itemInfo}>
                    <p className={styles.itemTitle}>{productTitle}</p>
                    <p className={styles.itemDescription}>{productDescription}</p>
                    <p className={styles.itemArtist}>{productArtist}</p>
                </div>
                <div className={styles.itemVarient}></div>
                <div className={styles.itemRemoveButton}></div>
            </div>
        </div>
    );
}

