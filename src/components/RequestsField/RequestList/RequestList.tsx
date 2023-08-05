import styles from './RequestList.module.css'

export interface IRequest {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  name: string
}

interface IRequestListProps {
  requests: IRequest[]
  selectedRequest: string
}

export default function RequestList({ requests, selectedRequest }: IRequestListProps) {
  return (
    <div className={styles.requestList}>
      {requests.map((request) => (
        <div
          className={`${styles.requestContainer} ${
            selectedRequest === request.name ? styles.selected : ''
          }`}
          key={request.method + '-' + request.name}
        >
          <span className={`${styles.method} ${styles[request.method.toLowerCase()]}`}>
            {request.method === 'DELETE' ? 'DEL' : request.method}
          </span>
          <span className={styles.name}>{request.name}</span>
        </div>
      ))}
    </div>
  )
}
