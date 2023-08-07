import styles from './ResponseHTML.module.css'

export default function ResponseHTML() {
  // const { response } = useContext(ResponseContext)

  return (
    <div className={styles.responseHtml}>
      {/* {response?.body?.projects && (
        <div className={styles.projectsContainer}>
          {response.body.projects.map((project: IProject) => (
            <div className={styles.projectContainer} key={project.id}>
              {JSON.stringify(project)}
            </div>
          ))}
        </div>
      )} */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          fontSize: '2em',
        }}
      >
        Em construção...
      </div>
    </div>
  )
}
