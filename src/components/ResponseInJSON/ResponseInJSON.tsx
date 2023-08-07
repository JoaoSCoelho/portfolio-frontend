'use client'

import FormattedJSON from '@/components/FormattedJSON/FormattedJSON'
import { RequestsContext } from '@/contexts/requests'
import { ResponseContext } from '@/contexts/response'
import { JSONPath } from 'jsonpath-plus'
import { useContext, useEffect, useState } from 'react'

import styles from './ResponseInJSON.module.css'

export default function ResponseInJSON({ type }: { type: 'body' | 'headers' }) {
  const { response } = useContext(ResponseContext)
  const { selectedRequest } = useContext(RequestsContext)
  const [json, setJson] = useState()
  const [expression, setExpression] = useState<string>('')

  const format = () => {
    return expression && response
      ? JSONPath({ json: response[type], path: expression })
      : response?.[type]
  }

  useEffect(() => {
    setExpression('')
    setJson(undefined)
  }, [type, selectedRequest, response])

  return (
    <div className={styles.responseInJSON}>
      <div className={styles.json}>
        {response && <FormattedJSON json={json ?? response?.[type]} />}
      </div>
      <div className={styles.jsonPath}>
        <form
          onSubmit={(ev) => {
            ev.preventDefault()
            setJson(format())
          }}
        >
          <input
            onChange={(ev) => setExpression(ev.target.value)}
            value={expression}
            type="text"
            placeholder="$.projects[*].name (JSON path)"
          />
        </form>
      </div>
    </div>
  )
}
