import React from 'react'
import styles from '../styles/Header.module.css'


const Header = () => {
    return (
        <div className={styles.bgImage}>
            <img
                src="/images/sofa.avif"
                alt='image'
                className={styles.headerImage}
            />
            <div className={styles.header} >
                <h1 className='text-white font-bold mt-10 text-right pr-4 uppercase' >silla sofa seat</h1>
                <h5 className='w-1/2 ml-auto pr-4 text-right mt-4 text-white sm:text-xl'>Wataalam wa kutengeneza masofa ya aina mbalimbali</h5>
                <div className={styles.headerContacts}>
                    <p className={`${styles.commas} text-sm ml-auto pr-4 text-right`}>Tunapatikana Mbeya TZ wasiliana nasi kwa namba
                        <a className=' font-bold mt-2 flex items-center justify-center' href="tel:+255765086564">
                            <svg className='w-4 h-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                            +255765086564
                        </a> <span className='text-center block' >au</span>
                        <a className=' font-bold flex items-center justify-center' href="tel:+255692047450">
                            <svg className='w-4 h-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                            +255692047450
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header