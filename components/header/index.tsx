'use client'

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './style.module.scss'
import Nav from './nav';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.main}>

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