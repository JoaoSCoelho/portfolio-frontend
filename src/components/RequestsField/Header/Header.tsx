import { BsFillCaretDownFill } from 'react-icons/bs'

import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <button className={`${styles.button} ${styles.first}`} disabled type="button">
        <span className={styles.text}>No Environment</span>
        <BsFillCaretDownFill />
      </button>

      <button className={`${styles.button} ${styles.last}`} disabled type="button">
        Cookies
      </button>
    </div>
  )
}
