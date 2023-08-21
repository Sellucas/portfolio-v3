"use client"

import { Satisfy } from 'next/font/google'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { MoveUpRight, UserCircle2 } from "lucide-react";
import ReactCurvedText from 'react-curved-text';
import { Zoom } from "react-awesome-reveal";

import Container from '@/components/ui/container'
import Magnetic from '@/components/ui/magnetic';

import styles from './style.module.scss'
import Heading from '../ui/heading';

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const Projects = () => {
  return (
    <div className={styles.main} id='projetos'>
      <Container>
        <div className={styles.content}>
          <div className={styles.description}>
            <Heading
              head={"Projetos"}
              title1={"Últimos"}
              title2={"Projetos"}
              description={"Projetos recentemente finalizados que merecem ser destacados."}
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
                      text='Me contrate • Me contrate • Me contrate • Me contrate'
                      textProps={{ "style": { "fontSize": 24 } }}
                    />
                    <UserCircle2 size={200} absoluteStrokeWidth className={styles.playicon} />
                  </Link>
                </Magnetic>
              </motion.div>
            </div>
          </div>

          <div className={styles.project}>
            <Zoom>
              <motion.div whileHover={{ scale: 1.1 }} >
                <div>
                  <div className={styles.separator} />
                  <div className={styles.header}>
                    <h2>E-commerce &  <br />
                      Dashboard - Deo Store
                    </h2>
                    <Link href={'https://lnkd.in/dNQhRfJc'} target='_blank'>
                      <MoveUpRight size={35} color='white' />
                    </Link>
                  </div>
                  <p>Fullstack - Web app</p>
                  <div className={styles.projectFeatured}>
                    <Image src={"/empty.jpg"} alt='' fill />
                  </div>
                </div>
              </motion.div>
            </Zoom>

            <Zoom delay={250}>
              <motion.div whileHover={{ scale: 1.1 }} >
                <div className={styles.project2}>
                  <div className={styles.separator} />
                  <div className={styles.header}>
                    <h2>CardFlex  <br />
                      Cartões Físicos e Virtuais
                    </h2>
                    <Link href={'https://lnkd.in/dr6N2AZc'} target='_blank'>
                      <MoveUpRight size={35} color='white' />
                    </Link>
                  </div>
                  <p>Front-end</p>
                  <div className={styles.projectFeatured}>
                    <Image src={"/empty.jpg"} alt='' fill />
                  </div>
                </div>
              </motion.div>
            </Zoom>

            <Zoom delay={500}>
              <motion.div whileHover={{ scale: 1.1 }} >
                <div className={styles.project3}>
                  <div className={styles.separator} />
                  <div className={styles.header}>
                    <h2>CluedUp  <br />
                      Controle Sua Jornada
                    </h2>
                    <Link href={'/'}>
                      <MoveUpRight size={35} color='white' />
                    </Link>
                  </div>
                  <p>Fullstack - Web app</p>
                  <div className={styles.projectFeatured}>
                    <Image src={"/empty.jpg"} alt='' fill />
                  </div>
                </div>
              </motion.div>
            </Zoom>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects