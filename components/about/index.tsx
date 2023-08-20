"use client"

import { Satisfy } from 'next/font/google'
import { PlayCircle, Send } from 'lucide-react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { motion } from "framer-motion";

import Container from '@/components/ui/container'

import styles from './style.module.scss'
import Link from 'next/link';
import Magnetic from '../ui/magnetic';
import ReactCurvedText from 'react-curved-text';

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const About = () => {
  return (
    <section className={styles.main}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.description}>
            <div>
              <h2 className={font.className}>Experiência</h2>
              <h1>
                Habilidades & <br />
                Tecnologias <br />
              </h1>
              <p>Especializado em desenvolvimento web, porém estou sempre aberto a trabalhar com outras tecnologias.</p>
            </div>

            <div className={styles.stack}>
              <h3>Tecnologias</h3>

              <Marquee
                autoFill
                gradient
                gradientWidth={50}
                aria-label="Tecnologias"
              >
                <span>
                  <Image src={"/nextjs.svg"} alt='Next.js' width={80} height={80} />
                  <Image src={"/reactjs.svg"} alt='React.js' width={80} height={80} />
                  <Image src={"/javascript.svg"} alt='JavaScript' width={80} height={80} />
                  <Image src={"/typescript.svg"} alt='TypeScript' width={80} height={80} />
                  <Image src={"/sass.svg"} alt='Sass' width={80} height={80} />
                  <Image src={"/tailwind.svg"} alt='Tailwind' width={80} height={80} />
                  <Image src={"/mysql.svg"} alt='MySQL' width={80} height={80} />
                  <Image src={"/mongodb.svg"} alt='MongoDB' width={80} height={80} />
                  <Image src={"/jest.svg"} alt='Jest' width={80} height={80} />
                  <Image src={"/git.svg"} alt='Git' width={80} height={80} />
                </span>
              </Marquee>
            </div>

            {/* <div className={styles.hireMe}>
              <div className={styles.blue}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                  <Link href={"/"}>
                    <div>
                      <span>Vamos Conversar <Send color='#f0ce30' size={35} absoluteStrokeWidth/></span>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div> */}
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

          <div className={styles.ability}>
            <div className={styles.individualAbility}>
              <div className={styles.circle}>01.</div>
              <h2>Análise</h2>
              <p>Compreender as exigências dos clientes e reconhecer possibilidades de fornecer soluções aprimoradas.</p>
            </div>

            <div className={styles.individualAbility}>
              <div className={styles.separator} />
              <div className={styles.circle}>02.</div>
              <h2>Desenvolvimento</h2>
              <p>Transformar ideias em aplicações funcionais e eficiente, por meio de tecnologias de última geração.</p>
            </div>

            <div className={styles.individualAbility}>
              <div className={styles.separator} />
              <div className={styles.circle}>03.</div>
              <h2>Testes</h2>
              <p>Assegurar a excelência e consistência do software por meio de testes abrangentes e aprimoramentos contínuos.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About