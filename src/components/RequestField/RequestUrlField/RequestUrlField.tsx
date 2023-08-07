'use client'

import Loading from '@/components/Loading/Loading'
import { IRequest, RequestsContext } from '@/contexts/requests'
import { ResponseContext } from '@/contexts/response'
import api from '@/services/api'
import { useContext } from 'react'

import styles from './RequestUrlField.module.css'

const RESPONSE_STATUS_TEXT: { [key: number]: string } = {
  200: 'OK',
  201: 'Created',
  400: 'Bad request',
  401: 'Unauthorized',
  404: 'Not Found',
  500: 'Internal server error',
}

export default function RequestUrlField() {
  const { selectedRequest, requests, setRequests } = useContext(RequestsContext)
  const selectedRequestObj = requests.find(
    (req) => req.name === selectedRequest,
  )

  const { setResponse, setIsLoading, isLoading } = useContext(ResponseContext)

  const makeRequest = async () => {
    if (!selectedRequestObj) return

    setIsLoading(true)

    try {
      const response = await api[
        selectedRequestObj.method.toLowerCase() as Lowercase<IRequest['method']>
      ](selectedRequestObj.path)
      setResponse({
        body: response.data,
        headers: response.headers,
        statusCode: response.status,
        statusText:
          response.statusText || RESPONSE_STATUS_TEXT[response.status],
        response: response,
      })
      setIsLoading(false)
    } catch (error: any) {
      console.error(error)
      setResponse({
        body: error.response?.data ?? 'Erro ao fazer requisição 😥',
        headers: error.response?.headers ?? {},
        statusCode: error.response?.status ?? 0,
        statusText:
          (error.response?.statusText ||
            RESPONSE_STATUS_TEXT[error.response?.status]) ??
          'Erro interno',
        response: error.response,
      })
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.requestUrlField}>
      <div className={styles.methodSelectContainer}>
        <select
          className={`${styles.methodSelect} ${
            styles[selectedRequestObj?.method.toLowerCase() ?? 'GET']
          }`}
          value={selectedRequestObj?.method}
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
            className={`${styles.methodOption} ${styles.get}`}
          >
            GET
          </option>
          <option
            value="POST"
            className={`${styles.methodOption} ${styles.post}`}
          >
            POST
          </option>
          <option
            value="PUT"
            className={`${styles.methodOption} ${styles.put}`}
          >
            PUT
          </option>
          <option
            value="DELETE"
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
        <button
          type="submit"
          onClick={() => makeRequest()}
          className={styles.submitButton}
        >
          {isLoading ? <Loading color="white" /> : 'Send'}
        </button>
      </div>
    </div>
  )
}
