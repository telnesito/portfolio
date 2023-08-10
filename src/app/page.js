import styles from './page.module.css'
import Profile from './components/Profile'

export default function Home() {
  return (
    <main className={styles.contenedorPrincipal}>
      <Profile />
    </main>
  )
}
