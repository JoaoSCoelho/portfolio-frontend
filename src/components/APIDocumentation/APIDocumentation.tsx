import { BsFillCaretRightFill, BsLock } from 'react-icons/bs'
import { FcLock } from 'react-icons/fc'

import styles from './APIDocumentation.module.css'

export default function APIDocumentation() {
  const routes = [
    {
      path: '/api/projects',
      method: 'GET',
      description: 'Rota para buscar os projetos feitos',
      title: 'Busca projetos',
      private: false,
    },
    {
      path: '/api/technologies',
      method: 'GET',
      description: 'Rota para buscar as tecnologias usadas nos projetos',
      title: 'Busca tecnologias',
      private: false,
    },
    {
      path: '/api/projects',
      method: 'POST',
      description: 'Rota para criar um novo projeto',
      title: 'Criar projeto',
      private: true,
    },
    {
      path: '/api/technologies',
      method: 'POST',
      description: 'Rota para criar uma nova tecnologia',
      title: 'Criar tecnologia',
      private: true,
    },
    {
      path: '/api/projects/:id',
      method: 'PUT',
      description: 'Rota para atualizar um projeto pelo seu id',
      title: 'Atualizar projeto',
      private: true,
    },
  ]

  return (
    <div className={styles.documentation}>
      {routes.map((route) => (
        <div className={styles.route} key={route.title}>
          <details>
            <summary>
              <div className={styles.left}>
                <BsFillCaretRightFill className={styles.caret} />
                <div
                  className={`${styles.method} ${
                    styles[route.method.toLowerCase()]
                  }`}
                >
                  {route.method}
                </div>
                <div className={styles.path}>{route.path}</div>
              </div>
              <div className={styles.right}>
                <div className={styles.title}>{route.title}</div>
                <div className={styles.tag}>
                  {route.private ? <FcLock /> : <BsLock color="transparent" />}
                </div>
              </div>
            </summary>
            <div className={styles.description}>{route.description}</div>
          </details>
        </div>
      ))}
    </div>
  )
}
