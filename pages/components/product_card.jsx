import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Product.module.css'


const product_card = ({ sofa }) => {


  return (
    <>
      <Link href="/sofa-item" >
        <div className={styles.imageContainer} >
          <img className='w-full' src={sofa.frontImage.fields.file.url} alt="front image" />
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
