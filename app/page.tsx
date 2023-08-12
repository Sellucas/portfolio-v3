import Hero from '@/components/hero'
import About from '@/components/about'

import styles from './page.module.css'
import Container from '@/components/ui/container'

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Hero />
        <About />
      </Container>
    </main>
  )
}
