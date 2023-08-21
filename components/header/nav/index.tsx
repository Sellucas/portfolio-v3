import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Magnetic from '@/components/ui/magnetic';
import { menuSlide } from '../anim';

import styles from './style.module.scss';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "Sobre",
    href: "#sobre",
  },
  {
    title: "Projetos",
    href: "#projetos",
  },
  {
    title: "Contato",
    href: "#contato",
  },
]

const Nav = () => {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
        <div className={styles.body}>
          <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
            <div className={styles.header}>
              <p>Sellucas - Frontend Developer</p>
            </div>
            {
              navItems.map((data, index) => {
                return (
                  <Magnetic key={index}>
                    <Link data={{ ...data, index }}
                      isActive={selectedIndicator == data.href}
                      setSelectedIndicator={setSelectedIndicator}></Link>
                  </Magnetic>
                )
              })
            }
          </div>
          <Footer />
        </div>
        <Curve />
      </motion.div>
    </>
  )
}

export default Nav