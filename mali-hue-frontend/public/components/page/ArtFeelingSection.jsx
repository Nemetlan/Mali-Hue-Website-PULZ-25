import React from 'react';
import styles from './ArtFeelingSection.module.css';
import { mc_Samthing, mc_Alexandria600 } from '@/utils/fonts';

const ArtFeelingSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headingContainer}>
          <div className={styles.textLine}>
            <div className={styles.blackBox}>
              <span className={mc_Samthing.className}>ART</span>
            </div>
            <span className={`${mc_Alexandria600.className} ${styles.normalText}`}>is not canvas</span>
          </div>

          <div className={styles.textLine}>
            <span className={`${mc_Alexandria600.className} ${styles.normalText}`}>It is the</span>
            <div className={styles.blackBox}>
              <span className={`${mc_Samthing.className}`}>Feeling</span>
            </div>
          </div>
        </div>

        <p className={`${mc_Alexandria600.className} ${styles.quote}`}>
          “We sell feeling, not surfaces. Art to bring calm, spark vision, and cultivate greatness in your space.”
        </p>
      </div>
    </section>
  );
};

export default ArtFeelingSection;