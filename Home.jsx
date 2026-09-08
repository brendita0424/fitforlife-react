import { useState, useEffect, useRef, useCallback, useId } from 'react'
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Bell,
  Check,
  ChevronRight,
  Droplets,
  Flame,
  HeartPulse,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Watch,
  Zap,
} from 'lucide-react'
import styles from './Home.module.css'
import reloj from '../../assets/ElproductoP.png'

const modelosData = {
  negro: {
    nombre: 'Negro Titanio',
    tagline: 'Elegancia discreta y resistencia extrema.',
    acabado: 'Aluminio anodizado mate',
  },
  azul: {
    nombre: 'Azul Océano',
    tagline: 'Energía dinámica y estilo contemporáneo.',
    acabado: 'Acero inoxidable pulido',
  },
  blanco: {
    nombre: 'Plata Polar',
    tagline: 'Minimalismo puro y luminosidad premium.',
    acabado: 'Cerámica y bisel satinado',
  },
}

const caracteristicasData = [
  {
    icon: HeartPulse,
    titulo: 'Ritmo Cardíaco 24/7',
    descripcion: 'Monitoreo biométrico continuo con alertas inteligentes ante irregularidades en reposo o actividad.',
    color: '#ff4d6d',
  },
  {
    icon: MoonStar,
    titulo: 'Sueño Inteligente',
    descripcion: 'Análisis detallado de fases REM, sueño ligero y descanso profundo con recomendaciones de recuperación.',
    color: '#8338ec',
  },
  {
    icon: Flame,
    titulo: '+20 Modos Deportivos',
    descripcion: 'Métricas precisas de ritmo, calorías, distancia y rendimiento para running, ciclismo, gimnasio y más.',
    color: '#ff7b00',
  },
  {
    icon: Droplets,
    titulo: 'Resistencia al Agua 5 ATM',
    descripcion: 'Sumergible hasta 50 metros. Diseñado para natación, ducha o entrenamientos bajo la lluvia intensa.',
    color: '#00b4d8',
  },
  {
    icon: BatteryCharging,
    titulo: 'Batería de 7 Días',
    descripcion: 'Autonomía de larga duración con tecnología de carga rápida magnética: de 0% a 80% en solo 35 minutos.',
    color: '#38b000',
  },
  {
    icon: Bell,
    titulo: 'Notificaciones en Vivo',
    descripcion: 'Recibe llamadas, mensajes de WhatsApp y alertas de tus aplicaciones favoritas sin sacar el teléfono.',
    color: '#36ADA3',
  },
]

const especificacionesTecnicas = [
  { label: 'Pantalla', valor: '1.9" Ultra AMOLED (410 x 502 px)' },
  { label: 'Brillo Máximo', valor: '1,000 nits (visible bajo luz solar directa)' },
  { label: 'Autonomía', valor: 'Hasta 7 días de uso estándar' },
  { label: 'Conectividad', valor: 'Bluetooth 5.3 de bajo consumo + GPS' },
  { label: 'Sensores', valor: 'Sensor óptico PPG, acelerómetro, giroscopio, SpO2' },
  { label: 'Resistencia', valor: '5 ATM (sumergible 50 m)' },
  { label: 'Compatibilidad', valor: 'iOS 13+ y Android 8.0+' },
  { label: 'Peso del cuerpo', valor: '36 gramos (ultra liviano)' },
]

function Home() {
  // ──────────────────────────────────────────────────────────
  // useState: interactividad del menú, modelo de color y modal
  // ──────────────────────────────────────────────────────────
  const [modelo, setModelo] = useState('negro')
  const [mostrarInfo, setMostrarInfo] = useState(false)

  // useState: estado del formulario de suscripción
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [enviado, setEnviado] = useState(false)

  // useState: temporizador de oferta limitada (en segundos)
  const DURACION_OFERTA = 23 * 60 * 60 + 47 * 60 + 30 // 23h 47m 30s
  const [tiempoRestante, setTiempoRestante] = useState(DURACION_OFERTA)

  // ──────────────────────────────────────────────────────────
  // useRef: referencia al formulario (scroll) y al primer campo
  // (auto-focus al hacer clic en el botón CTA principal)
  // ──────────────────────────────────────────────────────────
  const formularioRef = useRef(null)
  const inputNombreRef = useRef(null)

  // useId: identificadores únicos y accesibles para etiquetas
  // del formulario de contacto y suscripción
  const nombreId = useId()
  const correoId = useId()

  // ──────────────────────────────────────────────────────────
  // useEffect: título de la pestaña del navegador
  // ──────────────────────────────────────────────────────────
  useEffect(() => {
    document.title = 'FitForLife | Smartwatch de Nueva Generación'
  }, [])

  // ──────────────────────────────────────────────────────────
  // useEffect: temporizador de oferta limitada (cuenta regresiva)
  // Se inicializa una vez y decrementa cada segundo.
  // Cuando llega a 0, se detiene automáticamente.
  // ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (tiempoRestante <= 0) return
    const intervalo = setInterval(() => {
      setTiempoRestante((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(intervalo)
  }, [tiempoRestante])

  // ──────────────────────────────────────────────────────────
  // useCallback: navegar al formulario y auto-enfocar el
  // primer campo (input nombre) usando useRef directamente
  // ──────────────────────────────────────────────────────────
  const irAlFormulario = useCallback(() => {
    formularioRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    // useRef: enfoque automático del primer campo del formulario
    setTimeout(() => inputNombreRef.current?.focus(), 400)
  }, [])

  // useCallback: memoriza el cambio de modelo para evitar re-renders
  const cambiarModelo = useCallback((nuevoModelo) => {
    setModelo(nuevoModelo)
  }, [])

  // useCallback: memoriza el manejador del formulario
  const manejarFormulario = useCallback((e) => {
    e.preventDefault()
    if (!nombre.trim() || !correo.trim()) return
    setEnviado(true)
    setTimeout(() => {
      setNombre('')
      setCorreo('')
      setEnviado(false)
    }, 3000)
  }, [nombre, correo])

  // Formatear segundos → HH:MM:SS para el temporizador
  const formatearTiempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, '0')
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0')
    const s = String(segundos % 60).padStart(2, '0')
    return { h, m, s }
  }
  const { h, m, s } = formatearTiempo(tiempoRestante)

  return (
    <div className={styles.home}>
      {/* =====================================
          HERO / INICIO
      ====================================== */}
      <section id="inicio" className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Columna Izquierda: Información */}
          <section className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <span className={styles.tag}>
                <Sparkles size={15} />
                NUEVA GENERACIÓN 2026
              </span>
            </div>

            {/* ── useEffect: temporizador de oferta limitada ── */}
            <div className={styles.ofertaBanner}>
              <span className={styles.ofertaLabel}>🔥 Oferta de lanzamiento — Termina en:</span>
              <div className={styles.ofertaClock}>
                <span className={styles.clockBlock}>
                  <strong>{h}</strong>
                  <small>horas</small>
                </span>
                <span className={styles.clockSep}>:</span>
                <span className={styles.clockBlock}>
                  <strong>{m}</strong>
                  <small>min</small>
                </span>
                <span className={styles.clockSep}>:</span>
                <span className={styles.clockBlock}>
                  <strong>{s}</strong>
                  <small>seg</small>
                </span>
              </div>
            </div>

            <h1 className={styles.heroTitle}>
              Tecnología que cuida <span className={styles.titleGradient}>tu salud en cada latido.</span>
            </h1>

            <p className={styles.description}>
              Descubre <strong>FitForLife</strong>: el smartwatch de alta precisión diseñado para
              acompañarte en cada jornada. Monitorea tu bienestar en tiempo real, maximiza tu energía deportiva
              y mantente conectado con total sofisticación.
            </p>

            {/* Botones de acción */}
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={irAlFormulario}
              >
                <span>Quiero conocerlo</span>
                <ArrowRight size={18} />
              </button>

              <a href="#caracteristicas" className={styles.secondaryButton}>
                Ver características
              </a>
            </div>

            {/* Indicadores rápidos / Estadísticas */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>24/7</strong>
                <span>Monitoreo continuo</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <strong>+20</strong>
                <span>Modos deportivos</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <strong>7 Días</strong>
                <span>Autonomía de batería</span>
              </div>
            </div>
          </section>

          {/* Columna Derecha: Showcase del Reloj */}
          <section className={styles.productSection}>
            <div className={`${styles.glow} ${styles[`glow-${modelo}`]}`} aria-hidden="true" />

            <div className={styles.watchWrapper}>
              <div className={styles.newBadge}>
                <Zap size={13} />
                <span>NUEVO</span>
              </div>

              {/* Imagen del reloj con filtro dinámico según color */}
              <img
                src={reloj}
                alt={`Reloj inteligente FitForLife acabado ${modelosData[modelo].nombre}`}
                className={`${styles.watch} ${styles[modelo]}`}
                loading="eager"
              />

              {/* Tarjetas flotantes de métricas vivas */}
              <div className={`${styles.floatingChip} ${styles.chipHeart}`}>
                <div className={styles.chipIconHeart}>
                  <HeartPulse size={18} />
                </div>
                <div>
                  <span className={styles.chipValue}>74 BPM</span>
                  <span className={styles.chipLabel}>Ritmo estable</span>
                </div>
              </div>

              <div className={`${styles.floatingChip} ${styles.chipActivity}`}>
                <div className={styles.chipIconActivity}>
                  <Flame size={18} />
                </div>
                <div>
                  <span className={styles.chipValue}>9,420 pasos</span>
                  <span className={styles.chipLabel}>Meta cumplida</span>
                </div>
              </div>
            </div>

            {/* Selector interactivo de color */}
            <div className={styles.colorSelector}>
              <p className={styles.selectorLabel}>
                Acabado: <strong>{modelosData[modelo].nombre}</strong>
              </p>

              <div className={styles.colorButtons} role="radiogroup" aria-label="Selecciona color del reloj">
                <button
                  type="button"
                  className={`${styles.colorButton} ${styles.blackColor} ${
                    modelo === 'negro' ? styles.colorActive : ''
                  }`}
                  onClick={() => cambiarModelo('negro')}
                  aria-label="Modelo negro titanio"
                  aria-checked={modelo === 'negro'}
                  role="radio"
                />

                <button
                  type="button"
                  className={`${styles.colorButton} ${styles.blueColor} ${
                    modelo === 'azul' ? styles.colorActive : ''
                  }`}
                  onClick={() => cambiarModelo('azul')}
                  aria-label="Modelo azul océano"
                  aria-checked={modelo === 'azul'}
                  role="radio"
                />

                <button
                  type="button"
                  className={`${styles.colorButton} ${styles.whiteColor} ${
                    modelo === 'blanco' ? styles.colorActive : ''
                  }`}
                  onClick={() => cambiarModelo('blanco')}
                  aria-label="Modelo plata polar"
                  aria-checked={modelo === 'blanco'}
                  role="radio"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* =====================================
          CARACTERÍSTICAS
      ====================================== */}
      <section id="caracteristicas" className={styles.features}>
        <div className={styles.sectionHeader}>
          <span className={styles.subheading}>TODO EN TU MUÑECA</span>
          <h2 className={styles.sectionTitle}>Diseñado para potenciar tu día a día</h2>
          <p className={styles.sectionDesc}>
            Ingeniería de vanguardia y diseño ergonómico para brindarte precisión, confort y estilo en todo momento.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {caracteristicasData.map(({ icon: Icon, titulo, descripcion, color }) => (
            <article key={titulo} className={styles.featureCard}>
              <div
                className={styles.featureIconBox}
                style={{ '--icon-accent': color }}
              >
                <Icon size={24} />
              </div>
              <h3 className={styles.featureTitle}>{titulo}</h3>
              <p className={styles.featureDesc}>{descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          MODELOS & SELECCIÓN
      ====================================== */}
      <section id="modelos" className={styles.modelsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.subheading}>ENCUENTRA TU ESTILO</span>
          <h2 className={styles.sectionTitle}>Elige tu FitForLife ideal</h2>
        </div>

        <div className={styles.modelContainer}>
          <div className={styles.modelImageCol}>
            <div className={styles.modelImageWrapper}>
              <img
                src={reloj}
                alt={`FitForLife en ${modelosData[modelo].nombre}`}
                className={`${styles.modelPreviewWatch} ${styles[modelo]}`}
              />
            </div>
          </div>

          <div className={styles.modelInfoCol}>
            <div className={styles.modelTag}>{modelosData[modelo].acabado}</div>
            <h3 className={styles.modelTitle}>FitForLife {modelosData[modelo].nombre}</h3>
            <p className={styles.modelSubtitle}>{modelosData[modelo].tagline}</p>

            <ul className={styles.featureList}>
              <li>
                <Check className={styles.checkIcon} size={18} />
                <span>Monitoreo biométrico de salud 24 horas continuo</span>
              </li>
              <li>
                <Check className={styles.checkIcon} size={18} />
                <span>Más de 20 modos deportivos y seguimiento GPS asistido</span>
              </li>
              <li>
                <Check className={styles.checkIcon} size={18} />
                <span>Pantalla AMOLED con protección contra golpes y rayones</span>
              </li>
              <li>
                <Check className={styles.checkIcon} size={18} />
                <span>Resistencia al agua certificada 5 ATM para natación</span>
              </li>
            </ul>

            <div className={styles.modelActions}>
              <button
                type="button"
                className={styles.infoButton}
                onClick={() => setMostrarInfo(!mostrarInfo)}
              >
                <span>{mostrarInfo ? 'Ocultar detalles técnicos' : 'Ver ficha técnica completa'}</span>
                <ChevronRight
                  size={18}
                  className={`${styles.chevron} ${mostrarInfo ? styles.chevronOpen : ''}`}
                />
              </button>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={irAlFormulario}
              >
                <span>Apartar mi modelo</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Cuadro desplegable de especificaciones */}
            {mostrarInfo && (
              <div className={styles.specificationsBox}>
                <h4>Especificaciones de ingeniería</h4>
                <div className={styles.specListGrid}>
                  {especificacionesTecnicas.map((spec) => (
                    <div key={spec.label} className={styles.specRow}>
                      <span className={styles.specLabel}>{spec.label}</span>
                      <strong className={styles.specValue}>{spec.valor}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          ESPECIFICACIONES RÁPIDAS
      ====================================== */}
      <section id="especificaciones" className={styles.specsSection}>
        <div className={styles.specsCard}>
          <div className={styles.specsHeader}>
            <div>
              <span className={styles.subheading}>DETALLES DE RENDIMIENTO</span>
              <h2 className={styles.specsTitle}>Potencia sin concesiones</h2>
            </div>
            <ShieldCheck className={styles.shieldIcon} size={48} />
          </div>

          <div className={styles.specsPillsGrid}>
            <div className={styles.specPill}>
              <Watch size={20} />
              <span>Pantalla 1.9" AMOLED táctil</span>
            </div>
            <div className={styles.specPill}>
              <BatteryCharging size={20} />
              <span>Batería hasta 7 días continuo</span>
            </div>
            <div className={styles.specPill}>
              <Droplets size={20} />
              <span>5 ATM Sumergible</span>
            </div>
            <div className={styles.specPill}>
              <Zap size={20} />
              <span>Bluetooth 5.3 + GPS Asistido</span>
            </div>
            <div className={styles.specPill}>
              <HeartPulse size={20} />
              <span>Sensor óptico PPG + SpO2</span>
            </div>
            <div className={styles.specPill}>
              <Activity size={20} />
              <span>Compatible Android & iOS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACTO / REGISTRO
      ====================================== */}
      <section id="contacto" className={styles.contactSection} ref={formularioRef}>
        <div className={styles.contactCard}>
          <div className={styles.contactHeader}>
            <span className={styles.subheading}>MANTENTE INFORMADO</span>
            <h2 className={styles.contactTitle}>Sé parte de la comunidad FitForLife</h2>
            <p className={styles.contactSubtitle}>
              Regístrate para recibir novedades exclusivas, descuentos de prelanzamiento y consejos
              personalizados de entrenamiento y salud.
            </p>
          </div>

          <form className={styles.form} onSubmit={manejarFormulario} noValidate>
            <div className={styles.inputGroup}>
              <label htmlFor={nombreId}>Nombre completo</label>
              <input
                id={nombreId}
                type="text"
                placeholder="Ej. Brenda Rodríguez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor={correoId}>Correo electrónico</label>
              <input
                id={correoId}
                type="email"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>Registrarme y obtener beneficios</span>
              <ArrowRight size={18} />
            </button>

            {enviado && (
              <div className={styles.successMessage} role="alert">
                <Check size={18} />
                <span>¡Gracias por registrarte! Te mantendremos al tanto de las novedades de FitForLife.</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
