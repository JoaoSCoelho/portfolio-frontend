'use client'

import FormattedJSON from '@/components/FormattedJSON/FormattedJSON'
import { ResponseContext } from '@/contexts/response'
import jsonpath from 'jsonpath'
import { useContext, useEffect, useState } from 'react'

import styles from './ResponseInJSON.module.css'

export default function ResponseInJSON({ type }: { type: 'body' | 'headers' }) {
  const { response } = useContext(ResponseContext)
  const [json, setJson] = useState()
  const [expression, setExpression] = useState<string>('')

  const format = () => {
    return expression && response
      ? jsonpath.query(response[type], expression)
      : response?.[type]
  }

  useEffect(() => setJson(undefined), [type])

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
            defaultValue={expression}
            type="text"
            placeholder="$.projects[*].name (JSON path)"
          />
        </form>
      </div>
    </div>
  )
}
