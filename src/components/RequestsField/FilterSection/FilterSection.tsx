import {
  BsCaretDownFill,
  BsCaretUpFill,
  BsFillPlusCircleFill,
} from 'react-icons/bs'

import styles from './FilterSection.module.css'

export default function FilterSection() {
  return (
    <div className={styles.filterSection}>
      <input className={styles.filter} placeholder="Filter" />
      <div className={styles.selectContainer}>
        <label htmlFor="requests-order-by">
          <div className={styles.carets}>
            <BsCaretUpFill />
            <BsCaretDownFill />
          </div>
        </label>
        <select
          className={styles.orderSelect}
          name="order-by"
          id="requests-order-by"
          disabled
        ></select>
      </div>

      <button type="button" className={styles.newReqButton}>
        <BsFillPlusCircleFill />
      </button>
    </div>
  )
}
