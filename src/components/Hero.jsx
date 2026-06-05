const WA_NUMBER = '50670392289'
const PHONE = '7039-2289'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-red"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="20" fill="white" />
              <rect x="0" y="0" width="20" height="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-dark opacity-40" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-brand-dark opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center md:text-left animate-fade-up">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-4 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-white/80 text-sm ml-1">5.0 · 44 reseñas en Google</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Jacó Baterías
            <span className="block text-yellow-300">Automotrices</span>
          </h1>

          <p className="text-white/90 text-xl md:text-2xl font-medium mb-2">
            ¡Cargamos tu mundo con buena energía!
          </p>

          <p className="text-white/70 text-base mb-8 max-w-md mx-auto md:mx-0">
            Venta e instalación de baterías para todo tipo de vehículos en Jacó, Costa Rica.
            Contamos con las mejores marcas del mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola,%20me%20interesa%20información%20sobre%20baterías`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center text-base py-3 px-8"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
            <a
              href={`tel:+506${PHONE.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 border border-white/30"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            {['Instalación incluida', 'Delivery disponible', 'Garantía 2 años'].map((badge) => (
              <span
                key={badge}
                className="bg-white/20 text-white text-sm px-3 py-1 rounded-full border border-white/30"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image / logo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Logo image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/images/logo.svg"
                alt="Jacó Baterías Automotrices"
                className="w-56 h-56 md:w-72 md:h-72 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <div className="hidden text-center p-8">
                <BatteryBigIcon />
                <p className="text-white/60 text-sm mt-2">Logo aquí</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-2 rounded-full shadow-lg">
              ⭐ 5.0 Google
            </div>
            <div className="absolute -top-4 -right-4 bg-white text-brand-red font-bold text-sm px-4 py-2 rounded-full shadow-lg">
              2 Años de Garantía
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs">Ver más</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function BatteryBigIcon() {
  return (
    <svg className="w-24 h-24 text-white/40 mx-auto" viewBox="0 0 64 64" fill="currentColor">
      <rect x="4" y="16" width="52" height="32" rx="6" />
      <rect x="56" y="24" width="4" height="16" rx="2" />
      <path d="M36 26l-8 8h6l-2 10 10-12h-8l2-6z" fill="white" />
    </svg>
  )
}
