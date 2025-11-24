import styles from './creditbar.module.css';
import { mc_Alexandria400, mc_Samthing, mc_Alexandria600 } from '../../utils/fonts';
import Image from 'next/image';

export function CreditBar () {
    return (          
    <div className={styles.CreditBarSpace} >
        <div className={styles.CreditBar}>
            <div className={styles.RightCont}>
                <Image
                src="/icon/copyright.svg"
                alt="Cart Icon"
                width={45}
                height={45}
                className={styles.CopyrightIcon}
                />
                <p className={styles.CreditBarTXT}>
                    Designed and Developed by
                </p> 
                <div className={mc_Samthing.className}>
                    <p className={styles.CreditUsername}>
                         <a href='https://github.com/Nemetlan/'>
                        Nemetlan
                        </a>
                    </p>
                </div>
                <p className={styles.RealNameAuthor}>
                     <a href='https://www.instagram.com/imthilinax'>
                    (Thilina Jayasekara)
                    </a>
                </p>
            </div>
            <div className={styles.LeftCont}>
                <div className={mc_Alexandria600.className}>
                    <p className={styles.CompTag}>
                        <a href='https://pulz.acicts.lk/categories/codeflow/webdev'>
                            #PULZ&apos;25
                        </a>
                    </p>    
                </div>
            </div>
        </div>
    </div>
    );  
}