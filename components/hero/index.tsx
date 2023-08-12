import Image from 'next/image'
import { Satisfy } from 'next/font/google'
import { Send, Download } from 'lucide-react'

import styles from './style.module.scss'

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const Hero = () => {
  return (
    <div className={styles.main}>
     
    </div>
  )
}

export default Hero