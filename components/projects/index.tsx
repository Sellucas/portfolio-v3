"use client"

import { Satisfy } from 'next/font/google'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { MoveUpRight, UserCircle2 } from "lucide-react";
import ReactCurvedText from 'react-curved-text';

import Container from '@/components/ui/container'
import Magnetic from '@/components/ui/magnetic';

import styles from './style.module.scss'

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const Projects = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.content}>
          <div className={styles.description}>
            <div>
              <h2 className={font.className}>Projetos</h2>
              <h1>
                Últimos <br />
                Projetos
              </h1>
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
            <motion.div whileHover={{ scale: 1.1 }} >
              <div>
                <div className={styles.separator} />
                <div className={styles.header}>
                  <h2>E-commerce &  <br />
                    Dashboard - Deo Store
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

            <motion.div whileHover={{ scale: 1.1 }} >
              <div className={styles.project2}>
                <div className={styles.separator} />
                <div className={styles.header}>
                  <h2>E-commerce &  <br />
                    Dashboard - Deo Store
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

            <motion.div whileHover={{ scale: 1.1 }} >
              <div className={styles.project3}>
                <div className={styles.separator} />
                <div className={styles.header}>
                  <h2>E-commerce &  <br />
                    Dashboard - Deo Store
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects