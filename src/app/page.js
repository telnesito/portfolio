import styles from './page.module.css'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <main className={styles.contenedorPrincipal}>
      <Profile />
      <AboutMe />
    </main>
  )
}
