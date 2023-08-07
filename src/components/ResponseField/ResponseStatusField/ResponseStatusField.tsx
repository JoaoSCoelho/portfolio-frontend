'use client'

import { ResponseContext } from '@/contexts/response'
import { slugify } from '@/utils/slugify'
import { useContext } from 'react'

import styles from './ResponseStatusField.module.css'

export default function ResponseStatusField() {
  const { response } = useContext(ResponseContext)
  console.log(response)
  return (
    <div className={styles.responseStatusField}>
      {response && (
        <>
          <div
            className={`${styles.statusCodeTag} ${styles[slugify(response.statusText)]} ${
              styles.tag
            }`}
          >
            <span
              className={`${styles.statusCode} ${styles[slugify(response.statusText)]}`}
            >
              {response.statusCode}
            </span>
            <span className={styles.statusText}> {response.statusText}</span>
          </div>

          <div className={`${styles.timeTag} ${styles.tag}`}>
            <span className={styles.time}> ms</span>
          </div>

          <div className={`${styles.sizeTag} ${styles.tag}`}>
            {/* Prettify it */}
            <span className={styles.size}>{response.headers?.['content-length']} B</span>
          </div>
        </>
      )}
    </div>
  )
}
