'use client'

import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />

        <Main />
      </div>
    </div>
  )
}
