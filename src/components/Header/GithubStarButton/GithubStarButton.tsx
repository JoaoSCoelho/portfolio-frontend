import { AiFillGithub } from 'react-icons/ai'

import styles from './GithubStarButton.module.css'

export default function GithubStarButton() {
  return (
    <button className={styles.button} type="button">
      <a
        className={styles.link}
        href="https://github.com/JoaoSCoelho/portfolio-backend"
      >
        <AiFillGithub className={styles.githubIcon} />

        <span className={styles.starText}>Star</span>
      </a>
    </button>
  )
}
