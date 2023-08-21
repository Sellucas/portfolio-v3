"use client"

import Marquee from 'react-fast-marquee'
import { ArrowRightCircle, Send } from 'lucide-react'

import Magnetic from '@/components/ui/magnetic'
import Container from '@/components/ui/container'

import styles from './style.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.main}>
      <>
        <div className={styles.pattern} />
        <div className={styles.banner} />
        <div className={styles.banner2} />
        <div className={styles.marquee}>
          <Marquee
            autoFill
            gradient
            gradientWidth={50}
            gradientColor={[231, 74, 134]}
          >
            <span>Entre em Contato </span>
            <span><Send color={"#f0ce30"} /></span>
            <span>Vamos Conversar</span>
            <span><Send color={"#f0ce30"} /></span>
          </Marquee>
        </div>
      </>

      <Container>
        <div className={styles.container}>
          <div>
            <h1>
              DANDO <span className={styles.vida}>VIDA</span> À <br />
              PROJETOS COM <br />
              ESTRATÉGIA <span className={styles.e}>&</span> <br />
              SEGURANÇA<span className={styles.dot}>.</span>
            </h1>

            <Magnetic>
              <Link className={styles.hireme} href={"/"}>Contratar <ArrowRightCircle size={60} strokeWidth={1} /></Link>
            </Magnetic>
          </div>
        </div>
      </Container>

      <footer className={styles.footer}>
        <Link href={"/"}>LinkedIn</Link>
        <Link href={"/"}>Github</Link>

        <Link className={styles.logo} href={"/"}>
          SELLUCAS<span>.</span>
        </Link>

        <Link href={"/"}>Email</Link>
        <Link href={"/"}>Currículo</Link>
      </footer>
    </div>
  )
}

export default Footer