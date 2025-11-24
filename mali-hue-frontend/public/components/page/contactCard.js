import styles from './contactCard.module.css';
import { mc_Alexandria400, mc_Samthing, mc_Alexandria600 } from '../../../utils/fonts.js';
import React from 'react';
import Image from 'next/image';
import Form from 'next/form';
import { contactFormAction } from '../serverMutation/contactFormAction';


export function ContactCard() {
  return (
    <div className={styles.contactCardSpace}>
        <div className={`${styles.contactCard} ${mc_Alexandria400.className}`}>
            
            <div className={styles.contactCardColumn1}>
                <div className={styles.contactCardTitle}>
                    <p className={`${styles.ContactTitle} ${mc_Samthing.className}`}>Contact Us</p>
                </div>
                <div className={styles.contactCardSocials}>
                    <div className={styles.socialItems}>
                        <Image 
                            src="/icon/x-logo.svg" 
                            alt="X Logo"
                            width={24} 
                            height={24} 
                            className={styles.socialIcon} 
                        />
                        <Image 
                            src="/icon/github-logo.svg" 
                            alt="Github"
                            width={24} 
                            height={24} 
                            className={styles.socialIcon} 
                        />
                        <Image 
                            src="/icon/instagram-logo.svg" 
                            alt="Instagram"
                            width={24} 
                            height={24} 
                            className={styles.socialIcon} 
                        />
                    </div>
                    <div className={styles.SingleLine}></div>
                    <div className={styles.socialText}>
                        <p className={styles.socialTextTXT}>Share your hue.</p>    
                    </div> 
                </div>
            </div>
        
            <div className={styles.contactCardColumn2}>
                <div className={styles.contactCardDesTitle}>
                    <p className={`${styles.contactCardDesTitleTXT} ${mc_Alexandria600.className}`}>Your VISION on Our Canvas</p>
                </div>
                <div className={styles.contactCardDes}>
                    <p className={styles.desText}>Seeking a precise hue or specific dimension? Contact our studio for exclusive, commissioned artwork, perfectly tailored to your space.</p>
                </div>
                <div className={styles.contactCardForm}>
                    <Form className={styles.Contactform} action={contactFormAction}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className={styles.formInput}
                            name='ContactName'
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className={styles.formInput}
                            name='ContactEmail'
                            required
                        />
                        <button type="submit" className={styles.formSubmitBtn}>Submit</button>
                    </Form>
                </div>
                <div className={styles.contactCardFormSubtitle}></div>
            </div>
        
        </div>
    </div>
  )
};