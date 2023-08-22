// import Hero from '@/components/hero'
import Service from '@/components/services'
import About from '@/components/about'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Service />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
