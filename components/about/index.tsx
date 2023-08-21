"use client"

import { Satisfy } from 'next/font/google'
import { PlayCircle } from 'lucide-react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import ReactCurvedText from 'react-curved-text';
import Link from 'next/link';

import Container from '@/components/ui/container'

import styles from './style.module.scss'
import Magnetic from '../ui/magnetic';
import Heading from '../ui/heading';

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const About = () => {
  return (
    <section className={styles.main} id='sobre'>
      <Container>
        <div className={styles.grid}>
          <div className={styles.description}>
            <Heading
              head={'Experiência'}
              title1={"Habilidades &"}
              title2={"Tecnologias"}
              description={"Especializado em desenvolvimento web, porém estou sempre aberto a trabalhar com outras tecnologias."}
            />

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

          <div className={styles.ability}>
            <Zoom>
              <div className={styles.individualAbility}>
                <div className={styles.circle}>01.</div>
                <h2>Análise</h2>
                <p>Compreender as exigências dos clientes e reconhecer possibilidades de fornecer soluções aprimoradas.</p>
              </div>
            </Zoom>

            <Zoom delay={250}>
              <div className={styles.individualAbility}>
                <div className={styles.separator} />
                <div className={styles.circle}>02.</div>
                <h2>Desenvolvimento</h2>
                <p>Transformar ideias em aplicações funcionais e eficiente, por meio de tecnologias de última geração.</p>
              </div>
            </Zoom>

            <Zoom delay={500}>
              <div className={styles.individualAbility}>
                <div className={styles.separator} />
                <div className={styles.circle}>03.</div>
                <h2>Testes</h2>
                <p>Assegurar a excelência e consistência do software por meio de testes abrangentes e aprimoramentos contínuos.</p>
              </div>
            </Zoom>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About