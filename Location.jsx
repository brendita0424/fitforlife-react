import { useEffect, useState } from 'react'
import {
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react'
import styles from './Location.module.css'

const tiendasFisicas = [
  {
    id: 1,
    nombre: 'FitForLife Flagship Store - Centro',
    ciudad: 'Ciudad Principal',
    direccion: 'Av. Tecnológica 1420, Plaza Innovación, Nivel 2',
    horario: 'Lunes a Sábado: 10:00 - 20:00 / Domingo: 11:00 - 18:00',
    telefono: '+52 (55) 8420-1122',
    estado: 'Punto Oficial & Servicio Técnico',
  },
  {
    id: 2,
    nombre: 'Distribuidor Autorizado - Zona Norte',
    ciudad: 'Zona Metropolitana Norte',
    direccion: 'Paseo del Deporte 850, Local 14',
    horario: 'Lunes a Domingo: 10:00 - 21:00',
    telefono: '+52 (55) 8420-3344',
    estado: 'Demostración y Venta',
  },
  {
    id: 3,
    nombre: 'Fitness & Tech Hub - Zona Sur',
    ciudad: 'Centro Comercial Santa Fe, Ala Deportiva',
    direccion: 'Calzada del Bosque 300, Módulo 4',
    horario: 'Lunes a Sábado: 11:00 - 20:00',
    telefono: '+52 (55) 8420-5566',
    estado: 'Stock Disponible Inmediato',
  },
]

const Location = () => {
  const [consultaEnviada, setConsultaEnviada] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', email: '', ciudad: '' })

  useEffect(() => {
    document.title = 'FitForLife | Dónde Encontrarlo y Distribuidores'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nombre.trim() || !formData.email.trim()) return
    setConsultaEnviada(true)
    setTimeout(() => {
      setFormData({ nombre: '', email: '', ciudad: '' })
    }, 2000)
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Cabecera */}
      <section className={styles.headerSection}>
        <div className={styles.badgeWrapper}>
          <span className={styles.tag}>
            <Sparkles size={15} />
            DISPONIBILIDAD Y PUNTOS OFICIALES
          </span>
        </div>
        <h1 className={styles.title}>Dónde puedes encontrar FitForLife</h1>
        <p className={styles.subtitle}>
          Adquiere tu smartwatch en nuestra tienda en línea oficial con envío inmediato o visítanos en centros autorizados para probarlo en persona.
        </p>
      </section>

      {/* Ventajas de Compra */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Truck size={24} />
            </div>
            <h3>Envío Express Gratuito</h3>
            <p>Entrega en 24 a 48 horas con número de seguimiento y empaque de seguridad.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <ShieldCheck size={24} />
            </div>
            <h3>Garantía Oficial de 2 Años</h3>
            <p>Soporte técnico directo, cambio garantizado por defectos y repuestos certificados.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Clock size={24} />
            </div>
            <h3>Prueba de 30 Días</h3>
            <p>Pruébalo en tus rutinas. Si no supera tus expectativas, te devolvemos el 100% de tu dinero.</p>
          </div>
        </div>
      </section>

      {/* Tiendas Físicas */}
      <section className={styles.storesSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.miniTag}>PUNTOS DE VENTA EN VIVO</span>
          <h2>Tiendas y Centros de Experiencia</h2>
          <p>Encuentra asesores especializados que te ayudarán a configurar y vincular tu FitForLife.</p>
        </div>

        <div className={styles.storesGrid}>
          {tiendasFisicas.map((tienda) => (
            <article key={tienda.id} className={styles.storeCard}>
              <div className={styles.storeHeader}>
                <span className={styles.storeBadge}>{tienda.estado}</span>
                <h3>{tienda.nombre}</h3>
              </div>

              <div className={styles.storeDetails}>
                <div className={styles.detailRow}>
                  <MapPin size={18} className={styles.iconAccent} />
                  <span>{tienda.direccion} ({tienda.ciudad})</span>
                </div>
                <div className={styles.detailRow}>
                  <Clock size={18} className={styles.iconAccent} />
                  <span>{tienda.horario}</span>
                </div>
                <div className={styles.detailRow}>
                  <Phone size={18} className={styles.iconAccent} />
                  <span>{tienda.telefono}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Formulario de Localizador y Asistencia */}
      <section className={styles.locatorSection}>
        <div className={styles.locatorCard}>
          <div className={styles.locatorHeader}>
            <span className={styles.miniTag}>¿NO ENCUENTRAS TU CIUDAD?</span>
            <h2>Consulta disponibilidad en tu localidad</h2>
            <p>Déjanos tus datos y te enviaremos el punto de venta más cercano o el enlace directo para envío prioritario.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="loc-name">Nombre</label>
              <input
                id="loc-name"
                type="text"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="loc-email">Correo Electrónico</label>
              <input
                id="loc-email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="loc-city">Ciudad o Código Postal</label>
              <input
                id="loc-city"
                type="text"
                placeholder="Ej. Monterrey o CP 06700"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Consultar disponibilidad inmediata
            </button>

            {consultaEnviada && (
              <div className={styles.successAlert} role="alert">
                ¡Gracias! Nuestro equipo te contactará en breve con la opción de compra más conveniente para tu ubicación.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Location;
