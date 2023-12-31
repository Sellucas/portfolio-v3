'use client'

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

import Magnetic from '@/components/ui/magnetic';

import styles from './style.module.scss'
import Nav from './nav';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Show header after scroll
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= window.innerHeight) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Header input animation
  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  // Disable global scroll
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isActive]);

  return (
    <>
      <div className={styles.main}>
        {isVisible &&
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={styles.header}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
          >
            <Magnetic>
              <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
              </div>
            </Magnetic>
          </motion.div>
        }

      </div >
      <AnimatePresence mode="wait">
        {isActive &&
          <>
            <div className={styles.blur} />
            <Nav />
          </>}
      </AnimatePresence>
    </>
  )
}

export default Home