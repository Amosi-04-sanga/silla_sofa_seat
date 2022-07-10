import Link from 'next/link'
import React from 'react'
import styles from '../styles/Product.module.css'


const product_card = ({ sofa }) => {

  return (
    <>
      <Link href="#" >

        <div className={styles.imageContainer} >
          <img className='w-full' src={sofa.frontImage.fields.file.url} alt={sofa.title} />
          <div className={styles.description}>
            <h3 className='text-sm p-px' > {sofa.title} </h3>
            <p className='text-sm p-px' >pata kwa bei ya TSH {sofa.price}/= </p>
          </div>
        </div>

      </Link>
    </>
  )
}

export default product_card

