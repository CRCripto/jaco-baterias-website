const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Jacó Baterías Automotrices"
                className="h-12 w-auto"
                onError={(e) => (e.target.style.display = 'none')}
              />
              <div>
                <div className="font-bold text-lg leading-tight">Jacó Baterías</div>
                <div className="text-red-300 text-sm">Automotrices</div>
              </div>
            </div>
            <p className="text-red-200 text-sm leading-relaxed mb-4">
              ¡Cargamos tu mundo con buena energía!<br />
              Venta e instalación de baterías automotrices en Jacó, Costa Rica.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-red-200 text-xs ml-1">5.0 en Google (44 reseñas)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-red-300 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-red-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-red-300 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-red-100">
              <li className="flex gap-2">
                <span className="mt-0.5">📍</span>
                <span>Calle Lapa Verde, 50 mts este del hotel Océano, Jacó, Costa Rica</span>
              </li>
              <li>
                <a href="tel:+50670392289" className="hover:text-white transition-colors">
                  📞 +(506) 7039-2289
                </a>
              </li>
              <li>
                <a href="tel:+50621027300" className="hover:text-white transition-colors">
                  📞 +(506) 2102-7300
                </a>
              </li>
              <li>
                <a
                  href="mailto:jacobateriasautomotrices@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  ✉️ jacobateriasautomotrices@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/50670392289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  💬 WhatsApp: 7039-2289
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-red-300 text-xs">
          <p>© {year} Jacó Baterías Automotrices. Todos los derechos reservados.</p>
          <p>Jacó, Puntarenas, Costa Rica</p>
        </div>
      </div>
    </footer>
  )
}
