"use client"

import Image from 'next/image'
import { Satisfy } from 'next/font/google'
import { Send, Download, Mouse, ChevronsDown } from 'lucide-react'
import { motion } from "framer-motion";

import Container from '@/components/ui/container';

import styles from './style.module.scss'
import Link from 'next/link';

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
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                <button>Vamos Conversar <span><Send size={25} /></span></button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                <button className={styles.document}>Currículo <span><Download /></span></button>
              </motion.div>
            </div>
          </div>

          <div className={styles.img}>
            <Image src={"/cartoon-dog.png"} alt='' fill />
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