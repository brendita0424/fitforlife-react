import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout.jsx'
import Home from '../pages/Home/Home.jsx'
import ProductInfo from '../pages/ProductInfo/ProductInfo.jsx'
import Gallery from '../pages/Gallery/Gallery.jsx'
import Location from '../pages/Location/Location.jsx'
import Footer from '../pages/Footer/Footer.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas principales */}
          <Route index element={<Home />} />
          <Route path="DS3" element={<ProductInfo />} />
          <Route path="Galeria" element={<Gallery />} />
          <Route path="Ubicacion" element={<Location />} />
          <Route path="Footer" element={<Footer />} />
          
          {/* Redirección para cualquier ruta desconocida */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
