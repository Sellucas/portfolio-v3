import Hero from '@/components/hero'
import Service from '@/components/services'
import About from '@/components/about'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Service />
      <About />
    </main>
  )
}
