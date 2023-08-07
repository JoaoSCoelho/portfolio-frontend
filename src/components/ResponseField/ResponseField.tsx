import styles from './ResponseField.module.css'
import ResponseStatusField from './ResponseStatusField/ResponseStatusField'
import ResponseTabs from './ResponseTabs/ResponseTabs'

export default function ResponseField() {
  return (
    <div className={styles.responseField}>
      <ResponseStatusField />
      <ResponseTabs />
    </div>
  )
}
