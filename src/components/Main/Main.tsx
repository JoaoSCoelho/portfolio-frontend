import Aside from '../Aside/Aside'
import RequestsField from '../RequestsField/RequestsField'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div className={styles.main}>
      <Aside />
      <RequestsField />
      {/* <RequestField /> */}
    </div>
  )
}
