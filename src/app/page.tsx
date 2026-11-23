const products = [
  {
    name: "Collar Elegance",
    category: "Collares",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
  },
  {
    name: "Anillo Golden",
    category: "Anillos",
    price: "$380.00",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
  },
  {
    name: "Pulsera Shine",
    category: "Pulseras",
    price: "$520.00",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
  },
  {
    name: "Aretes Classic",
    category: "Aretes",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#332b25]">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 bg-white">
        <h1 className="text-2xl font-serif tracking-widest text-[#a47c45]">
          LUMIÈRE
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-[#b18a54]">
            Inicio
          </a>
          <a href="#productos" className="hover:text-[#b18a54]">
            Productos
          </a>
          <a href="#nosotros" className="hover:text-[#b18a54]">
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-[#b18a54]">
            Contacto
          </a>
        </nav>

        <a
          href="#productos"
          className="border border-[#b18a54] px-5 py-2 text-sm hover:bg-[#b18a54] hover:text-white transition"
        >
          Comprar
        </a>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 min-h-[520px] items-center gap-8 px-6 md:px-20 py-16">
        <div>
          <p className="uppercase tracking-[4px] text-xs text-[#a47c45] mb-5">
            Elegancia en cada detalle
          </p>

          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Brilla con tu
            <span className="block italic text-[#b18a54]">propio estilo.</span>
          </h2>

          <p className="text-gray-600 leading-7 max-w-md mb-8">
            Descubre nuestra colección de joyería y accesorios. Piezas diseñadas
            para acompañarte en cada momento especial.
          </p>

          <a
            href="#productos"
            className="inline-block bg-[#a47c45] text-white px-8 py-4 text-sm tracking-wider hover:bg-[#806037] transition"
          >
            DESCUBRIR COLECCIÓN
          </a>
        </div>

        <div className="h-[400px] md:h-[470px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000"
            alt="Colección de joyería elegante"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-white py-14 px-6 text-center">
        <p className="text-xs tracking-[4px] text-[#a47c45] mb-3">EXPLORA</p>
        <h2 className="text-3xl font-serif mb-10">Nuestras categorías</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["Anillos", "Collares", "Pulseras", "Aretes"].map((category) => (
            <a
              key={category}
              href="#productos"
              className="border border-[#d8c8ad] px-8 py-4 min-w-36 hover:bg-[#a47c45] hover:text-white transition"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[4px] text-[#a47c45] mb-3">
            NUESTRA SELECCIÓN
          </p>
          <h2 className="text-3xl md:text-4xl font-serif">
            Productos destacados
          </h2>
          <p className="text-gray-500 mt-3">
            Encuentra esa pieza especial para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="h-72 overflow-hidden bg-[#eee8df]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="pt-4">
                <p className="text-xs text-[#a47c45] uppercase tracking-widest">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <a
                  href="#contacto"
                  className="inline-block mt-4 border-b border-[#a47c45] pb-1 text-sm hover:text-[#a47c45]"
                >
                  Consultar producto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-[#eee7dc] px-6 py-20 text-center">
        <p className="text-xs tracking-[4px] text-[#a47c45] mb-4">
          NUESTRA ESENCIA
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          La belleza está en los detalles
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-7">
          Creemos que cada accesorio cuenta una historia. Por eso seleccionamos
          piezas que combinan elegancia, estilo y personalidad para hacer
          especial cada momento.
        </p>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-[#332b25] text-white px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-serif tracking-widest text-[#d4b27d]">
            LUMIÈRE
          </h2>
          <p className="text-sm text-gray-300 mt-4">
            Elegancia que te acompaña.
          </p>
          <p className="text-xs text-gray-400 mt-8">
            © 2026 LUMIÈRE. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
