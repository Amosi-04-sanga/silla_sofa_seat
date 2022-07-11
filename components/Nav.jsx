import Link from 'next/link'
import React from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <>
      <nav className={`${styles.navbar} flex`}>
        <div className="text-2xl uppercase ml-2 italic flex items-center">logo</div>
        <div className={`${styles.navlinks} ml-auto flex items-center justify-around`}>
          <Link href="/" >Home</Link>
          <Link href="#about" >about</Link>
          <Link href="#contacts" >Contacts</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav