import React from 'react'
import styles from '../../styles/Header.module.css'
// 

const Header = () => {
    return (
        <div className={styles.bgImage}>
            <img
                src="/images/sofa.avif"
                alt='image'
                className={styles.headerImage}
            />
            <div className={styles.header} >
                <h1 className='text-white font-bold mt-10 text-right pr-4 uppercase' >silla qual sofa</h1>
                <h5 className='w-1/2 ml-auto pr-4 text-right mt-4 text-white text-xl'>Wataalam wa kutengeneza masofa ya aina mbalimbali</h5>
                <div className={styles.headerContacts}>
                    <p className={`${styles.commas} text-sm ml-auto pr-4 text-right`}>Tunapatikana Mbeya TZ wasiliana nasi kwa namba +2557854654</p>
                </div>
            </div>
        </div>
    )
}

export default Header