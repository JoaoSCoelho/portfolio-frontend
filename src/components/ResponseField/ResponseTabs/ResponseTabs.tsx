'use client'

import { ResponseContext } from '@/contexts/response'
import { useContext } from 'react'

import styles from './ResponseTabs.module.css'

export default function ResponseTabs() {
  const { tab, setTab } = useContext(ResponseContext)

  return (
    <div className={styles.responseTabs}>
      <div className={styles.tabs}>
        <div
          onClick={() => setTab('preview')}
          className={`${styles.tab} ${tab === 'preview' ? styles.active : ''}`}
        >
          Preview
        </div>
        <div
          onClick={() => setTab('headers')}
          className={`${styles.tab} ${tab === 'headers' ? styles.active : ''}`}
        >
          Headers
        </div>
        <div className={`${styles.tab}`}>Cookies</div>
        <div className={`${styles.tab}`}>Timeline</div>
        <div
          onClick={() => setTab('html')}
          className={`${styles.tab} ${tab === 'html' ? styles.active : ''}`}
        >
          HTML
        </div>
      </div>
    </div>
  )
}
