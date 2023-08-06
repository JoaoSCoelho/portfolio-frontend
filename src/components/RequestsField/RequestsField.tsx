import FilterSection from './FilterSection/FilterSection'
import Header from './Header/Header'
import RequestList from './RequestList/RequestList'
import styles from './RequestsField.module.css'

export default function RequestsField() {
  return (
    <div className={styles.requestsField}>
      <Header />
      <FilterSection />
      <RequestList />
    </div>
  )
}
