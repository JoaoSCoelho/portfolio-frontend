import { ResponseContext } from '@/contexts/response'
import api from '@/services/api'
import { IProject } from '@/types/Project'
import { ITechnology } from '@/types/Technology'
import { useContext, useEffect, useState } from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'

import styles from './ResponseHTML.module.css'

export default function ResponseHTML() {
  const { response } = useContext(ResponseContext)
  const [technologies, setTechnologies] = useState<ITechnology[]>()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get('/api/technologies')

        setTechnologies(response.data.technologies)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className={styles.responseHtml}>
      {response?.body?.projects ? (
        <div className={styles.projectsContainer}>
          {response.body.projects.map((project: IProject) => (
            <div className={styles.projectWrapper}>
              <details className={styles.projectContainer} key={project.id}>
                <summary>
                  <strong className={styles.name}>{project.name}</strong>
                  {(project.bannerUrl || project.previewImageUrl) && (
                    <img
                      className={styles.banner}
                      src={project.bannerUrl || project.previewImageUrl}
                      alt={project.name}
                    />
                  )}
                  <div className={styles.usedTechnologiesContainer}>
                    {project.usedTechnologies.map((technology) => (
                      <div key={technology} className={styles.technology}>
                        {technologies?.find((tech) => tech.name === technology)
                          ?.logoUrl && (
                          <img
                            className={styles.technologyLogo}
                            src={
                              technologies.find(
                                (tech) => tech.name === technology,
                              )!.logoUrl
                            }
                            alt={technology}
                          />
                        )}
                        {technology}
                      </div>
                    ))}
                  </div>

                  <div className={styles.linksContainer}>
                    {project.link && (
                      <a className={styles.link} href={project.link}>
                        <AiOutlineLink /> Acesse
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a className={styles.link} href={project.repositoryUrl}>
                        <AiFillGithub /> Repositório
                      </a>
                    )}
                  </div>

                  <div className={styles.showMore}>
                    <BsChevronCompactDown />
                  </div>
                </summary>

                <div className={styles.description}>
                  {project.description.split('\n').map((desc) => (
                    <p>{desc}</p>
                  ))}
                </div>

                {project.features.length ? (
                  <div className={styles.featuresContainer}>
                    <strong>Features</strong>

                    <ul className={styles.list}>
                      {project.features.map((feature) => (
                        <li className={styles.feature} key={feature}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </details>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.notFoundScreen}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              color: 'white',
              fontSize: '2em',
              fontWeight: '900',
              wordSpacing: '5px',
              textShadow:
                '0 1px #a896ff, 0 2px #a896ff, 0 3px #a896ff, 0 4px #a896ff',
            }}
          >
            NÃO TEMOS NENHUM HTML PARA VOCÊ NESTE MOMENTO (DICA: BUSQUE POR
            PROJETOS)
          </div>
        </div>
      )}
    </div>
  )
}
