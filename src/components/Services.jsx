const SERVICES = [
  {
    icon: <BatteryIcon />,
    title: 'Venta de Baterías',
    description:
      'Amplio catálogo de baterías para todo tipo de vehículos: autos, camionetas, motocicletas y más. Marcas Rocket, Interstate y otras.',
    color: 'bg-red-50 text-brand-red',
  },
  {
    icon: <WrenchIcon />,
    title: 'Instalación Incluida',
    description:
      'Instalamos tu batería nueva sin costo adicional. Técnicos especializados para garantizar un trabajo seguro y correcto.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <TruckIcon />,
    title: 'Delivery a Domicilio',
    description:
      'Llevamos la batería hasta donde estás. Servicio de entrega disponible en Jacó y zonas aledañas. ¡Tu comodidad es nuestra prioridad!',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <ShieldIcon />,
    title: 'Garantía 2 Años',
    description:
      'Todas nuestras baterías incluyen garantía de 2 años. Respaldamos la calidad de nuestros productos con la mejor atención al cliente.',
    color: 'bg-yellow-50 text-yellow-600',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">
            Lo que ofrecemos
          </span>
          <h2 className="section-title mt-2">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Todo lo que necesitas para que tu vehículo tenga la energía que merece
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-brand-red rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            ¿Tu batería está fallando?
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            No esperes a quedarte varado. Contáctanos ahora y te ayudamos de inmediato.
          </p>
          <a
            href="https://wa.me/50670392289?text=Hola,%20necesito%20ayuda%20con%20mi%20batería"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function BatteryIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="18" height="11" rx="2" />
      <path d="M20 11h2v4h-2" />
      <path d="M7 11l2 2-2 2M12 10v6" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 4v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
