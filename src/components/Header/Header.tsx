import Image from 'next/image'

import insomniaLogo from '../../assets/insomnia-logo.svg'
import GithubStarButton from './GithubStarButton/GithubStarButton'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Image width={40} height={40} src={insomniaLogo} alt="Insômnia logo" />

        <GithubStarButton />
      </div>

      <div className={styles.middle}>
        <strong>Portfólio</strong>
      </div>

      <div className={styles.right}>
        <button disabled type="button">
          Login
        </button>
        <button disabled type="button">
          Sign Up
        </button>
      </div>
    </div>
  )
}
