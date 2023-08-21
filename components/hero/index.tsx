"use client"

import Image from 'next/image'
import { Satisfy } from 'next/font/google'
import { Send, Download, Mouse, ChevronsDown } from 'lucide-react'
import { motion } from "framer-motion";
import { Bounce } from 'react-awesome-reveal';
import Link from 'next/link';

import Container from '@/components/ui/container';

import styles from './style.module.scss'

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const bounceAnimation = {
  y: [-20, 0, -20],
  transition: {
    y: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Link className={styles.logo} href={"/"}>
          SELLUCAS<span>.</span>
        </Link>

        <div className={styles.grid}>
          <div className={styles.description}>
            <h2 className={font.className}>Olá!</h2>
            <h1>
              Eu construo <br />
              Projetos <span>&</span> <br />
              Experiências
            </h1>
            <p>Oi! Eu sou um desenvolvedor Frontend - Meu objetivo é criar aplicativos web escaláveis e seguros.</p>

            <div className={styles.buttons}>
              <Bounce>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                  <Link href={"https://wa.me/5548998600628"} target='_blank' className={styles.talk}>
                    Vamos Conversar <span><Send size={25} /></span>
                  </Link>
                </motion.div>
              </Bounce>
              <Bounce delay={500}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                  <Link href={"/"} target='_blank' className={styles.document}>
                    Currículo <span><Download /></span>
                  </Link>
                </motion.div>
              </Bounce>
            </div>
          </div>

          <div className={styles.img}>
            <Image src={"/dog-cartoon.png"} alt='Cartoon Dog' fill priority />
          </div>
        </div>
        <div>
          <motion.div
            animate={bounceAnimation}
            className={styles.scrolldown}
          >
            <Mouse size={30} absoluteStrokeWidth />
            <ChevronsDown size={30} absoluteStrokeWidth />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default Hero