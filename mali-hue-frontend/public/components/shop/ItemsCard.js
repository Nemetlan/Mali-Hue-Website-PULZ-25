import {mc_Alexandria400, mc_Samthing, mc_Alexandria600, mc_Alexandria300} from '@/utils/fonts';
import React from 'react';
import styles from './ItemsCard.module.css';
import Image from 'next/image';


export function ItemsCard({itemImage, itemTitle, itemPrice, itemDes}) {
    let img_path = `${itemImage}`;

    return (
    <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
            <Image
                src={img_path}
                alt={itemTitle}
                width={500}
                height={500}
                className={styles.itemImage}
            />
        </div>
        <div className={styles.itemDetailsContainer}>
            <div className={styles.itemDetails}>
                <p className={`${mc_Alexandria600.className} ${styles.ItemsCard_Name}`}>{itemTitle}</p>
                <p className={`${mc_Alexandria300.className} ${styles.ItemsCard_Des}`}>{itemDes}</p>
                <div className={`${mc_Samthing.className} ${styles.ItemsCard_PriceCont}`}>
                    <p className={styles.ItemsCard_PriceStarting}>staring at</p>    
                    <p className={styles.ItemsCard_Price}>${itemPrice}</p>
                </div>
            </div>    
        </div>
    </div>
    )

};

export function ItemsCardPlaceholder() {
    return (
        <ItemsCard itemImage="1.png" itemTitle="Timeless Bark" itemPrice="10" itemDes="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    )};

