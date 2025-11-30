import Image from "next/image";
import styles from "./page.module.css";
import { ContactCard } from '../public/components/page/contactCard';
import { mc_Alexandria600, mc_Samthing, mc_Alexandria400 } from "@/utils/fonts";
import ArtFeelingSection from "../public/components/page/ArtFeelingSection";


export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ALLprop}>
        <div className={styles.introSection}>
          <div className={styles.introSecLeft}>
            <ArtFeelingSection />
          </div>
          <div className={styles.introSecRight}>
            <div className={styles.FisrtImageItem}>
              <Image
                src="/photos/1.png"
                alt="Timeless Bark"
                width={652}
                height={1000}
                className={styles.FisrtImageItemPNG} />
              <p className={`${mc_Alexandria600.className} ${styles.imageCaption}`}>#Timeless Bark</p>
              <p className={`${mc_Alexandria400.className} ${styles.imageCaptionDes}`}>Evokes natural resilience and enduring beauty, perfect for a calming piece.</p>
            </div>
          </div>
        </div>

        <div className={styles.fewImageSection}>
          <div className={styles.fewImageItem}>
            <div className={styles.FisrtImageItem}>
              <Image
                src="/photos/2.png"
                alt="Timeless Bark"
                width={750}
                height={1000}
                className={styles.TwoImageItemPNG} />
              <p className={`${mc_Alexandria600.className} ${styles.imageCaption}`}>#Ethereal Swirl</p>
              <p className={`${mc_Alexandria400.className} ${styles.imageCaptionDes}`}>Focuses on the dreamy, almost ghostly quality of the movement.</p>
            </div>
            <div className={styles.FisrtImageItem}>
              <Image
                src="/photos/3.png"
                alt="Timeless Bark"
                width={990}
                height={690}
                className={styles.ThirdImageItemPNG} />
              <p className={`${mc_Alexandria600.className} ${styles.imageCaption}`}>#Quiet Resolve</p>
              <p className={`${mc_Alexandria400.className} ${styles.imageCaptionDes}`}>Emphasizes the knight&apos;s inner strength and peaceful determination.</p>
            </div>
          </div>
        </div>
        </div>

        

       <section id="contact"><ContactCard /></section> 
      </main>
    </div>
  );
}
