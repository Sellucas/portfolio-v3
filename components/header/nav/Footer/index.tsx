import Link from 'next/link';
import { Github, Linkedin, FileText } from 'lucide-react';

import styles from './style.module.scss';

const index = () => {
  return (
    <div className={styles.footer}>
      <Link href={"https://github.com/Sellucas/"} target='_blank'>
        <Github />
      </Link>
      <Link href={"https://www.linkedin.com/in/lucas-sell-machado/"} target='_blank'>
        <Linkedin />
      </Link>
      <Link href={""} target='_blank'>
        <FileText />
      </Link>
    </div>
  )
}

export default index