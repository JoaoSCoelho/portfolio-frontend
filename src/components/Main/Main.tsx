import { ResponseContext } from '@/contexts/response'
import { useContext } from 'react'

import Aside from '../Aside/Aside'
import RequestField from '../RequestField/RequestField'
import RequestsField from '../RequestsField/RequestsField'
import ResponseField from '../ResponseField/ResponseField'
import ResponseHTML from '../ResponseHTML/ResponseHTML'
import ResponseInJSON from '../ResponseInJSON/ResponseInJSON'
import styles from './Main.module.css'

export default function Main() {
  const { tab } = useContext(ResponseContext)

  return (
    <div className={styles.main}>
      <Aside />
      <RequestsField />
      <div className={styles.right}>
        <RequestField />
        <ResponseField />

        <div
          className={`${styles.response} ${tab === 'html' ? styles.html : ''}`}
        >
          {tab === 'preview' ? (
            <ResponseInJSON type="body" />
          ) : tab === 'headers' ? (
            <ResponseInJSON type="headers" />
          ) : (
            <ResponseHTML />
          )}
        </div>
      </div>
    </div>
  )
}
