'use client'

import Link from 'next/link';
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

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  return (
    <>
      <div className={styles.main}>
        <Link className={styles.logo} href={"/"}>
          SELLUCAS<span>.</span>
        </Link>

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
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}

export default Home