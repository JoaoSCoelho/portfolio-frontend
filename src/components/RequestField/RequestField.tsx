'use client'

import styles from './RequestField.module.css'
import RequestTabs from './RequestTabs/RequestTabs'
import RequestUrlField from './RequestUrlField/RequestUrlField'

export default function RequestField() {
  return (
    <div className={styles.requestField}>
      <RequestUrlField />
      <RequestTabs />
    </div>
  )
}
