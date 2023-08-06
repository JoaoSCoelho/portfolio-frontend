import styles from './RequestTabs.module.css'

export default function RequestTabs() {
  return (
    <div className={styles.requestTabs}>
      <div className={styles.tabs}>
        <div className={styles.tab}>Body</div>
        <div className={styles.tab}>Auth</div>
        <div className={styles.tab}>Query</div>
        <div className={styles.tab}>Headers</div>
        <div className={`${styles.tab} ${styles.docs}`}>Docs</div>
      </div>
    </div>
  )
}
