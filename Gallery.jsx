import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ZoomIn } from 'lucide-react'
import styles from './Gallery.module.css'
import reloj from '../../assets/ElproductoP.png'

const categoriasGaleria = [
  { id: 'todos', nombre: 'Todos los Acabados' },
  { id: 'negro', nombre: 'Negro Titanio' },
  { id: 'azul', nombre: 'Azul Océano' },
  { id: 'blanco', nombre: 'Plata Polar' },
]

const itemsGaleria = [
  {
    id: 1,
    titulo: 'FitForLife Negro Titanio',
    categoria: 'negro',
    claseColor: 'negro',
    descripcion: 'Diseño minimalista para deportes de alto rendimiento y uso formal.',
    tag: 'EDICIÓN ESTRELLA',
  },
  {
    id: 2,
    titulo: 'FitForLife Azul Océano',
    categoria: 'azul',
    claseColor: 'azul',
    descripcion: 'Inspirado en las profundidades marinas con resistencia 5 ATM.',
    tag: 'DEPORTIVO',
  },
  {
    id: 3,
    titulo: 'FitForLife Plata Polar',
    categoria: 'blanco',
    claseColor: 'blanco',
    descripcion: 'Luminosidad y pulido cerámico para quienes aprecian la sofisticación.',
    tag: 'PREMIUM',
  },
  {
    id: 4,
    titulo: 'Pantalla AMOLED en Acción',
    categoria: 'negro',
    claseColor: 'negro',
    descripcion: 'Visibilidad cristalina bajo luz solar directa a 1,000 nits.',
    tag: 'PANTALLA',
  },
  {
    id: 5,
    titulo: 'Sensores Biométricos PPG',
    categoria: 'azul',
    claseColor: 'azul',
    descripcion: 'Monitoreo cardíaco óptico continuo 24/7 con microchip integrado.',
    tag: 'SALUD',
  },
  {
    id: 6,
    titulo: 'Batería y Carga Magnética',
    categoria: 'blanco',
    claseColor: 'blanco',
    descripcion: 'Acople magnético rápido con hasta 7 días ininterrumpidos de batería.',
    tag: 'BATERÍA',
  },
]

const Gallery = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos')
  const [modalItem, setModalItem] = useState(null)

  useEffect(() => {
    document.title = 'FitForLife | Galería de Imágenes'
  }, [])

  const itemsFiltrados = filtroActivo === 'todos'
    ? itemsGaleria
    : itemsGaleria.filter((item) => item.categoria === filtroActivo)

  return (
    <div className={styles.pageWrapper}>
      {/* Cabecera */}
      <section className={styles.headerSection}>
        <div className={styles.badgeWrapper}>
          <span className={styles.tag}>
            <Sparkles size={15} />
            DISEÑO Y ESTÉTICA
          </span>
        </div>
        <h1 className={styles.title}>Galería de Imágenes de Producto</h1>
        <p className={styles.subtitle}>
          Explora los acabados, detalles de manufactura y perspectivas exclusivas de FitForLife en alta resolución.
        </p>
      </section>

      {/* Barra de Filtros */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersNav} role="tablist">
          {categoriasGaleria.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.filterBtn} ${filtroActivo === cat.id ? styles.filterActive : ''}`}
              onClick={() => setFiltroActivo(cat.id)}
              role="tab"
              aria-selected={filtroActivo === cat.id}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Imágenes */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {itemsFiltrados.map((item) => (
            <article
              key={item.id}
              className={styles.galleryCard}
              onClick={() => setModalItem(item)}
            >
              <div className={styles.imageBox}>
                <div className={`${styles.cardGlow} ${styles['glow-' + item.claseColor]}`} />
                <img
                  src={reloj}
                  alt={item.titulo}
                  className={`${styles.watchImg} ${styles[item.claseColor]}`}
                />
                <span className={styles.cardTag}>{item.tag}</span>
                <div className={styles.zoomOverlay}>
                  <ZoomIn size={24} />
                  <span>Ver detalle</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.titulo}</h3>
                <p className={styles.cardDesc}>{item.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal de Detalle */}
      {modalItem && (
        <div className={styles.modalBackdrop} onClick={() => setModalItem(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrapper}>
              <img
                src={reloj}
                alt={modalItem.titulo}
                className={`${styles.modalImg} ${styles[modalItem.claseColor]}`}
              />
            </div>
            <div className={styles.modalInfo}>
              <span className={styles.modalTag}>{modalItem.tag}</span>
              <h2>{modalItem.titulo}</h2>
              <p>{modalItem.descripcion}</p>
              <div className={styles.modalSpecs}>
                <div><strong>Resolución:</strong> 410 x 502 px</div>
                <div><strong>Protección:</strong> 5 ATM Impermeable</div>
                <div><strong>Autonomía:</strong> 7 Días</div>
              </div>
              <div className={styles.modalActions}>
                <Link to="/Ubicacion" className={styles.primaryBtn}>
                  <span>Dónde comprar</span>
                  <ArrowRight size={18} />
                </Link>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setModalItem(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
