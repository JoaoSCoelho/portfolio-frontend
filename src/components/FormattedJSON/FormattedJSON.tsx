import { syntaxHighlight } from '@/utils/syntaxHighlight'

import styles from './FormattedJSON.module.css'

export default function FormattedJSON({ json }: { json: any }) {
  return (
    <pre
      className={styles.pre}
      dangerouslySetInnerHTML={{
        __html: json ? syntaxHighlight(JSON.stringify(json, null, 2), styles) : '',
      }}
    ></pre>
  )
}
