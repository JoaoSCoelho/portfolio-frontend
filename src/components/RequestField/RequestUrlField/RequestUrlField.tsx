'use client'

import { RequestsContext } from '@/contexts/requests'
import { useContext } from 'react'

import styles from './RequestUrlField.module.css'

export default function RequestUrlField() {
  const { selectedRequest, requests, setRequests } = useContext(RequestsContext)
  const selectedRequestObj = requests.find((req) => req.name === selectedRequest)

  return (
    <div className={styles.requestUrlField}>
      <div className={styles.methodSelectContainer}>
        <select
          className={`${styles.methodSelect} ${
            styles[selectedRequestObj?.method.toLowerCase() ?? 'GET']
          }`}
          onChange={(ev) => {
            setRequests((reqs) =>
              reqs.reduce(
                (prev, curr) =>
                  [
                    ...prev,
                    curr.name === selectedRequest
                      ? { ...curr, method: ev.target.value }
                      : curr,
                  ] as any,
                [],
              ),
            )
          }}
          name="request-method"
          id="request-method-select"
        >
          <option
            value="GET"
            selected={selectedRequestObj?.method === 'GET'}
            className={`${styles.methodOption} ${styles.get}`}
          >
            GET
          </option>
          <option
            value="POST"
            selected={selectedRequestObj?.method === 'POST'}
            className={`${styles.methodOption} ${styles.post}`}
          >
            POST
          </option>
          <option
            value="PUT"
            selected={selectedRequestObj?.method === 'PUT'}
            className={`${styles.methodOption} ${styles.put}`}
          >
            PUT
          </option>
          <option
            value="DELETE"
            selected={selectedRequestObj?.method === 'DELETE'}
            className={`${styles.methodOption} ${styles.delete}`}
          >
            DELETE
          </option>
        </select>
      </div>

      <div className={styles.urlInputContainer}>
        <div className={styles.baseUrlTag}>base_url</div>
        <input
          spellCheck={false}
          type="text"
          value={selectedRequestObj?.path}
          onChange={(ev) => {
            setRequests((reqs) =>
              reqs.reduce(
                (prev, curr) =>
                  [
                    ...prev,
                    curr.name === selectedRequest
                      ? { ...curr, path: ev.target.value }
                      : curr,
                  ] as any,
                [],
              ),
            )
          }}
          className={styles.urlInput}
        />
      </div>

      <div className={styles.submitButtonContainer}>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </div>
    </div>
  )
}
