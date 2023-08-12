'use client'

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './style.module.scss'
import Nav from './nav';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <Link className={styles.logo} href={"/"}>
          SELLUCAS<span>.</span>
        </Link>

        <div className={styles.header}>
          <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>

      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}

export default Home