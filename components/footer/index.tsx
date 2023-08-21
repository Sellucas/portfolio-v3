"use client"

import Marquee from 'react-fast-marquee'
import { ArrowRightCircle, Send } from 'lucide-react'
import { Bounce, JackInTheBox } from 'react-awesome-reveal'
import Link from 'next/link'

import Magnetic from '@/components/ui/magnetic'
import Container from '@/components/ui/container'

import styles from './style.module.scss'

const Footer = () => {
  return (
    <div className={styles.main} id='contato'>
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
            <JackInTheBox>
              <h1>
                DANDO <span className={styles.vida}>VIDA</span> À <br />
                PROJETOS COM <br />
                ESTRATÉGIA <span className={styles.e}>&</span> <br />
                SEGURANÇA<span className={styles.dot}>.</span>
              </h1>
            </JackInTheBox>

            <Bounce>
              <Magnetic>
                <Link className={styles.hireme} href={"https://wa.me/5548998600628"} target='_blank'>
                  Contratar <ArrowRightCircle size={60} strokeWidth={1} />
                </Link>
              </Magnetic>
            </Bounce>
          </div>
        </div>
      </Container>

      <footer className={styles.footer}>
        <Link href={"https://www.linkedin.com/in/lucas-sell-machado/"} target='_blank'>LinkedIn</Link>
        <Link href={"https://github.com/Sellucas"}>Github</Link>

        <Link className={styles.logo} href={"/"}>
          SELLUCAS<span>.</span>
        </Link>

        <Link href={"mailto:lucassellmachado@gmail.com"}>Email</Link>
        <Link href={"/"}>Currículo</Link>
      </footer>
    </div>
  )
}

export default Footer