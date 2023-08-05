import { AiFillHome } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

import styles from './Aside.module.css'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <button className={styles.asideButton} disabled type="button">
        <AiFillHome className={styles.icon} />
      </button>

      <button className={styles.plusButton} disabled type="button">
        <BsPlus className={styles.icon} />
      </button>
    </aside>
  )
}
