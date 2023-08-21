import { Satisfy } from 'next/font/google'

import styles from './style.module.scss'

interface HeadingProps {
  head: string
  title1: string
  title2: string
  description?: string
}

const font = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

const Heading: React.FC<HeadingProps> = ({ head, title1, title2, description }) => {
  return (
    <div className={styles.heading}>
      <h2 className={font.className}>{head}</h2>
      <h1>
        {title1} <br />
        {title2} <br />
      </h1>
      <p>{description}</p>
    </div>
  )
}

export default Heading