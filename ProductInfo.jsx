import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BatteryCharging,
  Cpu,
  Droplets,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Watch,
  Zap,
} from 'lucide-react'
import styles from './ProductInfo.module.css'
import reloj from '../../assets/ElproductoP.png'

const especificacionesDetalladas = [
  {
    categoria: 'Pantalla y Visualización',
    icon: Watch,
    items: [
      { label: 'Tipo de Panel', valor: 'Ultra AMOLED de 1.9 pulgadas a color' },
      { label: 'Resolución', valor: '410 x 502 píxeles (326 ppi retina)' },
      { label: 'Tasa de Refresco', valor: '60 Hz con tecnología Always-On Display' },
      { label: 'Brillo Pico', valor: '1,000 nits con sensor de luz ambiental' },
      { label: 'Protección', valor: 'Cristal templado curvado 2.5D resistente a arañazos' },
    ],
  },
  {
    categoria: 'Batería y Energía',
    icon: BatteryCharging,
    items: [
      { label: 'Capacidad', valor: '380 mAh de iones de litio de alta densidad' },
      { label: 'Autonomía Típica', valor: 'Hasta 7 días de uso intenso' },
      { label: 'Modo Ultra Ahorro', valor: 'Hasta 14 días de funciones esenciales' },
      { label: 'Método de Carga', valor: 'Base magnética USB de acople rápido' },
      { label: 'Tiempo de Carga', valor: '35 min para 80% / 55 min carga completa' },
    ],
  },
  {
    categoria: 'Sensores Biométricos & Salud',
    icon: HeartPulse,
    items: [
      { label: 'Monitor Cardíaco', valor: 'Sensor óptico PPG bi-led de alta precisión' },
      { label: 'Oxígeno en Sangre', valor: 'Monitor continuo SpO2 24 horas' },
      { label: 'Control de Estrés', valor: 'Algoritmo VFC (Variabilidad de Frecuencia Cardíaca)' },
      { label: 'Seguimiento de Sueño', valor: 'Análisis de sueño ligero, profundo y fase REM' },
    ],
  },
  {
    categoria: 'Conectividad y Construcción',
    icon: Cpu,
    items: [
      { label: 'Conectividad Inalámbrica', valor: 'Bluetooth 5.3 Low Energy + BLE' },
      { label: 'Geolocalización', valor: 'GPS / GLONASS / Galileo asistido' },
      { label: 'Resistencia al Agua', valor: 'Certificación 5 ATM (sumergible hasta 50 m)' },
      { label: 'Materiales del Chasis', valor: 'Aleación de aluminio espacial y polímero reforzado' },
      { label: 'Compatibilidad', valor: 'iOS 13.0+ y Android 8.0+ mediante App FitForLife' },
    ],
  },
]

const ProductInfo = () => {
  const [categoriaActiva, setCategoriaActiva] = useState(0)

  useEffect(() => {
    document.title = 'FitForLife | Información del Producto'
  }, [])

  return (
    <div className={styles.pageWrapper}>
      {/* Cabecera de Página */}
      <section className={styles.headerSection}>
        <div className={styles.badgeWrapper}>
          <span className={styles.tag}>
            <Sparkles size={15} />
            INGENIERÍA Y PRECISIÓN
          </span>
        </div>
        <h1 className={styles.title}>
          Ficha Técnica y Detalles de Rendimiento
        </h1>
        <p className={styles.subtitle}>
          Conoce a fondo cada componente, sensor y material que hace de FitForLife un referente en tecnología de salud portátil.
        </p>
      </section>

      {/* Hero Showcase Técnico */}
      <section className={styles.techHeroSection}>
        <div className={styles.techHeroGrid}>
          <div className={styles.techVisualCol}>
            <div className={styles.ambientGlow} />
            <img
              src={reloj}
              alt="Estructura técnica del reloj FitForLife"
              className={styles.techWatchImg}
            />
            <div className={styles.floatingHighlight}>
              <ShieldCheck size={20} className={styles.shieldIcon} />
              <div>
                <strong>Certificado 5 ATM</strong>
                <span>Impermeable 50 metros</span>
              </div>
            </div>
          </div>

          <div className={styles.techDetailsCol}>
            <span className={styles.miniTag}>ARQUITECTURA DE VANGUARDIA</span>
            <h2 className={styles.colTitle}>Diseñado para resistir tus desafíos más exigentes</h2>
            <p className={styles.colDesc}>
              Cada milímetro del FitForLife ha sido concebido para combinar ligereza y solidez. Su chasis de aluminio aeroespacial alberga los sensores biométricos más precisos del mercado, ofreciendo mediciones fiables tanto en atletas como en el día a día.
            </p>

            <div className={styles.metricHighlights}>
              <div className={styles.metricBox}>
                <Zap size={22} className={styles.accentIcon} />
                <strong>1.9" AMOLED</strong>
                <span>Pantalla ultra nítida</span>
              </div>
              <div className={styles.metricBox}>
                <BatteryCharging size={22} className={styles.accentIcon} />
                <strong>7 Días</strong>
                <span>Batería ininterrumpida</span>
              </div>
              <div className={styles.metricBox}>
                <Droplets size={22} className={styles.accentIcon} />
                <strong>50 Metros</strong>
                <span>Resistencia acuática</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pestañas de Especificaciones por Categoría */}
      <section className={styles.specsTabsSection}>
        <div className={styles.tabsNav}>
          {especificacionesDetalladas.map((spec, index) => {
            const Icon = spec.icon
            return (
              <button
                key={spec.categoria}
                type="button"
                className={`${styles.tabBtn} ${categoriaActiva === index ? styles.tabBtnActive : ''}`}
                onClick={() => setCategoriaActiva(index)}
              >
                <Icon size={18} />
                <span>{spec.categoria}</span>
              </button>
            )
          })}
        </div>

        <div className={styles.tabContentCard}>
          <div className={styles.tabHeader}>
            <h3>{especificacionesDetalladas[categoriaActiva].categoria}</h3>
            <span className={styles.tabItemsCount}>
              {especificacionesDetalladas[categoriaActiva].items.length} especificaciones clave
            </span>
          </div>

          <div className={styles.specsGrid}>
            {especificacionesDetalladas[categoriaActiva].items.map((item) => (
              <div key={item.label} className={styles.specCardItem}>
                <span className={styles.specItemLabel}>{item.label}</span>
                <strong className={styles.specItemValue}>{item.valor}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Llamada a la Acción */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <div>
            <h2>¿Listo para llevar tu entrenamiento al siguiente nivel?</h2>
            <p>Elige tu modelo favorito en la galería o consulta dónde adquirirlo en puntos oficiales.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link to="/Galeria" className={styles.secondaryBtn}>
              Ver en Galería
            </Link>
            <Link to="/Ubicacion" className={styles.primaryBtn}>
              <span>Dónde encontrarlo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductInfo
