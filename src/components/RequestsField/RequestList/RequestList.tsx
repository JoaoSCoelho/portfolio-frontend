import { RequestsContext } from '@/contexts/requests'
import { useContext } from 'react'

import styles from './RequestList.module.css'

export default function RequestList() {
  const { requests, selectedRequest, setSelectedRequest } =
    useContext(RequestsContext)

  return (
    <div className={styles.requestList}>
      {requests.map((request) => (
        <div
          onClick={() => setSelectedRequest(request.name)}
          className={`${styles.requestContainer} ${
            selectedRequest === request.name ? styles.selected : ''
          }`}
          key={request.method + '-' + request.name}
        >
          <span
            className={`${styles.method} ${
              styles[request.method.toLowerCase()]
            }`}
          >
            {request.method === 'DELETE' ? 'DEL' : request.method}
          </span>
          <span className={styles.name}>{request.name}</span>
        </div>
      ))}
    </div>
  )
}
