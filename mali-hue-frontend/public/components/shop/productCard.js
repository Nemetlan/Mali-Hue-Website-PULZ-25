'use client';

import React, {use, useState} from "react";
import styles from "./Product.module.css";
import { mc_Alexandria600, mc_Samthing, mc_Alexandria400, mc_OleaOlive, mc_Alexandria300} from "@/utils/fonts";
import Image from "next/image";
import showPopup from './addToCard'
import Add2Cart from "@/services/cart";




export default function ProductCard ({ product }) {

    const {
      thumbnail: productThumbnail,
      category: productCategory,
      description: productDescription,
      artist: productArtist,
      variants: productVarients,
      title: productTitle
    } = product;

    const [finalPrice, setFinalPrice] = useState(productVarients[0].price);
    const [isAdding, setIsAdding] = useState(false);
    const [finalItemID, setFinalItemID] = useState(productVarients[0].id);


    if (isAdding) {
        alert("Adding to cart")
        if (Add2Cart(finalItemID, finalPrice)) {
            alert("Item added to cart")
            setTimeout(1000)
            setIsAdding(false);
        } else {
            setIsAdding(false);
            alert("Item already in cart")
        }

    }




    return (
    <div className={styles.productContainer}>

        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}>
          <Image
            src={productThumbnail}
            alt={productTitle}
            width={500}
            height={500}
            className={styles.productImage}
          />
          </div>
        </div>


        <div className={styles.detailsContainer}>

          <div className={styles.productDetails}>
            <p className={`${mc_Alexandria400.className} ${styles.productCategory}`}>{productCategory}</p>
            <p className={`${mc_OleaOlive.className} ${styles.productTitle}`}>{productTitle}</p>
            <p className={`${mc_Samthing.className} ${styles.productArtist}`}>Designed By {productArtist}</p>
            <p className={`${mc_Alexandria400.className} ${styles.productDescription}`}>{productDescription}</p>
          </div>


          <div className={styles.productSelection}>
            <p className={`${mc_Alexandria600.className} ${styles.selectionLabel}`}>Select Size:</p>
            <div className={styles.sizeOptions}>
              {productVarients && productVarients.map((varient) => (
                <button key={varient.size} className={styles.sizeButton} onClick={() => setFinalPrice(varient.price) && setFinalItemID(varient.id)}>
                <p className={styles.varientSize}>{varient.size}</p>
                <p className={styles.varientPrice}>${varient.price}</p>
                </button>
              ))}
            </div>
            <p className={`${mc_Alexandria300.className} ${styles.quantityGuideSingularity}`}>As each creation is a unique whisper, brought forth in a strictly <b>limited edition</b>, we must reserve its embrace. We therefore respectfully observe a ceremonial limit of <b>one singular piece per design</b>.</p>
          </div>

        <div className={styles.productPricing}>
            <div className={styles.priceContainer}>
                <p className={`${mc_Alexandria600.className} ${styles.totalLabel}`}>Total:</p>
                <p className={`${mc_Samthing.className} ${styles.totalPrice}`}>{finalPrice ? `$${finalPrice}` : ''}</p>
            </div>
            <div className={styles.actionButtons}>
                <button className={`${isAdding ? styles.actionButtons_Adding : styles.actionButtons_} ${styles.actionButtons_}`} onClick={() => setIsAdding(true)}>{ isAdding ? "Added" : "Add to Cart"}</button>
            </div>
        </div>

          {/* < PricingBrick productVarients={productVarients} /> */}




        </div>
      </div>
    )
}