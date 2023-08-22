"use client"

import { Satisfy } from 'next/font/google'
import { MoveUpRight, PlayCircle } from 'lucide-react'
import Link from 'next/link';
import ReactCurvedText from 'react-curved-text'
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";

import Container from '@/components/ui/container'
import Magnetic from '@/components/ui/magnetic';

import styles from './style.module.scss'
import Heading from '../ui/heading';

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
            <Heading
              head={'Serviços'}
              title1={"Serviços que"}
              title2={"Ofereço"}
              description={"Ajudo empresas ambiciosas a gerar mais lucros, criando aplicativos web escaláveis, amigáveis ​​ao usuário e seguros."}
            />

            <div className={styles.buttons}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                <Magnetic>
                  <Link href={"https://wa.me/5548998600628"} target='_blank'>
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
            <Zoom cascade>
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
            </Zoom>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Service