import styles from './page.module.css'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Outstanding from './components/Outstanding'
import Education from './components/Education'

export default function Home() {
  return (
    <main className={styles.contenedorPrincipal}>
      <Profile />
      <AboutMe />
      <Outstanding />
      <Education />
    </main>
  )
}
