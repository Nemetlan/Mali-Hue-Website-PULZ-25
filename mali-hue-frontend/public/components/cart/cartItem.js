import styles from "./cartItem.module.css";
import Image from "next/image";

export default function CartItem({ item, ...props }) {
    const {
        thumbnail: productThumbnail,
        title: productTitle,
        short_description: productDescription,
        artist: productArtist,
    } = item;

    return (
        <div className={styles.item} {...props}>
            <div className={styles.thumb}>
                {productThumbnail && (
                    <Image
                        className={styles.img}
                        src={productThumbnail}
                        alt={productTitle}
                        width={120}
                        height={120}
                    />
                ) && console.log(productThumbnail)}
            </div>
            <div className={styles.meta}>
                <span className={styles.name}>{productTitle}</span>
                <span className={styles.price}>${item.price.toFixed(2)}</span>
            </div>
            <div className={styles.subtotal}>
                ${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    );
}
