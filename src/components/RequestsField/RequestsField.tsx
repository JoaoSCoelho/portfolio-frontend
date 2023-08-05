import FilterSection from './FilterSection/FilterSection'
import Header from './Header/Header'
import RequestList from './RequestList/RequestList'
import styles from './RequestsField.module.css'

export default function RequestsField() {
  return (
    <div className={styles.requestsField}>
      <Header />
      <FilterSection />
      <RequestList
        requests={[
          {
            name: 'get projects',
            method: 'GET',
          },
          {
            name: 'create project',
            method: 'POST',
          },
          {
            name: 'update project',
            method: 'PUT',
          },
          {
            name: 'delete project',
            method: 'DELETE',
          },
        ]}
        selectedRequest="create project"
      />
    </div>
  )
}
