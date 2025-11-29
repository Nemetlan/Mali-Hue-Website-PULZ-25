import styles from "./Product.module.css";
import { mc_Alexandria600, mc_Samthing, mc_Alexandria400, mc_OleaOlive } from "@/utils/fonts";
import Image from "next/image";
import { getProductById } from "@/services/api";





export default async function Product({productID}) {
    const product = await getProductById(productID);
    console.log(product);

    let selctedPrice; 


    return (
      <div className={styles.productContainer}>

        <div className={styles.imageContainer}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className={styles.productImage}
          />
        </div>



        <div className={styles.detailsContainer}>

          <div className={styles.productDetails}>
            <p className={`${mc_Alexandria400.className} ${styles.productCategory}`}>{product.category}</p>
            <p className={`${mc_OleaOlive.className} ${styles.productTitle}`}>{product.title}</p>
            <p className={`${mc_Samthing.className} ${styles.productPrice}`}>{product.artist}</p>
            <p className={`${mc_Alexandria400.className} ${styles.productDescription}`}>{product.description}</p>
          </div>


          <div className={styles.productSelection}>
            <p className={`${mc_Alexandria600.className} ${styles.selectionLabel}`}>Select Size:</p>
            <div className={styles.sizeOptions}>
              {product.varients && product.varients.map((varient) => (
                <button key={product.id+'.'+varient.price} className={styles.sizeButton}>
                  <p className={styles.varientSize}>{varient.size}</p>
                  <p className={styles.varientPrice}>${varient.price}</p>
                </button>
                  ))
              }
            <p className={styles.quantityGuideSingularity}>As each creation is a unique whisper, brought forth in a strictly <b>limited edition</b>, we must reserve its embrace. We therefore respectfully observe a ceremonial limit of <b>one singular piece per design</b>.</p>
            </div>
          </div>

          <div className={styles.productPricing}>
            <div className={styles.priceContainer}>
              <p className={`${mc_Alexandria600.className} ${styles.totalLabel}`}>Total:</p>
              <p className={`${mc_Samthing.className} ${styles.totalPrice}`}>${product.price}</p>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.addToCartButton}>Add to Cart</button>
              <button className={styles.buyNowButton}>Buy Now</button>
            </div>
          </div>


        </div>
      </div>

    );
}       
