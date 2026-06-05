import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]

const WA_NUMBER = '50670392289'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="Jacó Baterías Automotrices"
            className="h-10 w-auto"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <span
            className="hidden items-center gap-2"
            style={{ display: 'none' }}
          >
            <BatteryIcon />
            <span
              className={`font-bold text-lg leading-tight ${
                scrolled ? 'text-brand-red' : 'text-white'
              }`}
            >
              Jacó Baterías
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-brand-red ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola,%20me%20interesa%20información%20sobre%20baterías`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2 px-4"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola,%20me%20interesa%20información%20sobre%20baterías`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function BatteryIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="8" width="26" height="16" rx="3" fill="#CC0000" />
      <rect x="28" y="12" width="2" height="8" rx="1" fill="#CC0000" />
      <path d="M17 13l-4 4h3l-1 5 5-6h-4l1-3z" fill="white" />
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

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
