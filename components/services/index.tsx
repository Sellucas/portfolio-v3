"use client"

import { Satisfy } from 'next/font/google'
import { MoveUpRight, PlayCircle } from 'lucide-react'
import ReactCurvedText from 'react-curved-text'
import { motion } from "framer-motion";

import Container from '@/components/ui/container'

import styles from './style.module.scss'
import Link from 'next/link';
import Magnetic from '../ui/magnetic';

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const Service = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.description}>
            <div>
              <h2 className={font.className}>Serviços</h2>
              <h1>
                Serviços que <br />
                Ofereço <br />
              </h1>
              <p>Ajudo empresas ambiciosas a gerar mais lucros, criando aplicativos web escaláveis, amigáveis ​​ao usuário e seguros.</p>
            </div>

            <div className={styles.buttons}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                <Magnetic>
                  <Link href={"/"}>
                    <ReactCurvedText width={300}
                      height={300}
                      cx={150}
                      cy={150}
                      rx={100}
                      ry={100}
                      startOffset={50}
                      reversed={true}
                      text='Vamos conversar • Vamos conversar • Vamos conversar •'
                      textProps={{ "style": { "fontSize": 24 } }}
                    />
                    <PlayCircle size={200} absoluteStrokeWidth className={styles.playicon} />
                  </Link>
                </Magnetic>
              </motion.div>
            </div>
          </div>

          <div className={styles.services}>
            <div>
              <div className={styles.separator} />
              <div className={styles.header}>
                <p>01.</p>
                <h2>Codificação de <br />
                  Design
                </h2>
              </div>

              <div className={styles.servicesLink}>
                <p>Explore</p>
                <Link href={'/'}>
                  <MoveUpRight size={35} color='white' />
                </Link>
              </div>
            </div>

            <div>
              <div className={styles.separator} />
              <div className={styles.header}>
                <p>02.</p>
                <h2>Aplicações <br />
                  Web
                </h2>
              </div>

              <div className={styles.servicesLink}>
                <p>Explore</p>
                <Link href={'/'}>
                  <MoveUpRight size={35} color='white' />
                </Link>
              </div>
            </div>

            <div>
              <div className={styles.separator} />
              <div className={styles.header}>
                <p>03.</p>
                <h2>Landing <br />
                  Pages
                </h2>
              </div>

              <div className={styles.servicesLink}>
                <p>Explore</p>
                <Link href={'/'}>
                  <MoveUpRight size={35} color='white' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Service