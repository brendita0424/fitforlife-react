import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import styles from './MainLayout.module.css'

const MainLayout = () => {
  const { pathname } = useLocation()

  // Desplazar al tope al cambiar de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
