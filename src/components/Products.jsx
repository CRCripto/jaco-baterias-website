const WA_NUMBER = '50670392289'

const PRODUCTS = [
  {
    id: 1,
    brand: 'Rocket',
    brandColor: 'bg-green-600',
    model: 'ES 34R',
    description: 'Batería de alto rendimiento libre de mantenimiento',
    specs: { BCI: '34R', CCA: '850A', RC: '120 min' },
    image: '/images/products/rocket-34r.png',
    featured: true,
  },
  {
    id: 2,
    brand: 'Rocket',
    brandColor: 'bg-green-600',
    model: 'ES 27',
    description: 'Ideal para sedanes y vehículos medianos',
    specs: { BCI: '27', CCA: '600A', RC: '100 min' },
    image: '/images/products/rocket-27.png',
    featured: false,
  },
  {
    id: 3,
    brand: 'Interstate',
    brandColor: 'bg-blue-800',
    model: 'MTP-34R',
    description: 'Potencia superior para climas tropicales',
    specs: { BCI: '34R', CCA: '800A', RC: '115 min' },
    image: '/images/products/interstate-34r.png',
    featured: true,
  },
  {
    id: 4,
    brand: 'Interstate',
    brandColor: 'bg-blue-800',
    model: 'MTP-27',
    description: 'Excelente vida útil para uso diario',
    specs: { BCI: '27', CCA: '690A', RC: '105 min' },
    image: '/images/products/interstate-27.png',
    featured: false,
  },
  {
    id: 5,
    brand: 'Rocket',
    brandColor: 'bg-green-600',
    model: 'ES 31',
    description: 'Para camionetas y vehículos de trabajo pesado',
    specs: { BCI: '31', CCA: '950A', RC: '140 min' },
    image: '/images/products/rocket-31.png',
    featured: false,
  },
  {
    id: 6,
    brand: 'Consultar',
    brandColor: 'bg-gray-600',
    model: 'Otras marcas',
    description: 'Tenemos baterías para motocicletas, lanchas y más. Consultá disponibilidad.',
    specs: { BCI: 'Varios', CCA: 'Varios', RC: 'Varios' },
    image: null,
    featured: false,
  },
]

export default function Products() {
  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">
            Catálogo
          </span>
          <h2 className="section-title mt-2">Nuestros Productos</h2>
          <p className="section-subtitle">
            Las mejores marcas del mercado a tu disposición. Consultá precios por WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            ¿No encontrás lo que buscás? Tenemos muchas más opciones disponibles.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola,%20quisiera%20saber%20qué%20baterías%20tienen%20disponibles`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const waMessage = `Hola, me interesa la batería ${product.brand} ${product.model}. ¿Cuál es el precio?`

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image area */}
      <div className="relative bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
        {product.featured && (
          <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            Popular
          </span>
        )}
        <span className={`absolute top-3 right-3 ${product.brandColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
          {product.brand}
        </span>
        {product.image ? (
          <>
            <img
              src={product.image}
              alt={`${product.brand} ${product.model}`}
              className="h-36 object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden flex-col items-center justify-center text-gray-300">
              <BatteryPlaceholderIcon />
              <span className="text-xs mt-2">Imagen próximamente</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-300">
            <BatteryPlaceholderIcon />
            <span className="text-xs mt-2">Imagen próximamente</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-gray-900">
          {product.brand} {product.model}
        </h3>
        <p className="text-gray-500 text-sm mt-1 mb-4">{product.description}</p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {Object.entries(product.specs).map(([key, val]) => (
            <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-400 font-medium">{key}</div>
              <div className="text-sm font-bold text-gray-800">{val}</div>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="mt-auto">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-whatsapp justify-center text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Consultar precio
          </a>
        </div>
      </div>
    </div>
  )
}

function BatteryPlaceholderIcon() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
      <rect x="4" y="16" width="52" height="32" rx="6" />
      <rect x="56" y="24" width="4" height="16" rx="2" />
      <path d="M36 26l-8 8h6l-2 10 10-12h-8l2-6z" fill="white" opacity="0.5" />
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
