import Hero from '@/components/hero'
import About from '@/components/about'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  )
}
