import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import { products } from './data/products'
import './App.css'

const getInitialCart = () => {
  try { return JSON.parse(localStorage.getItem('juegotendo-cart')) ?? [] } catch { return [] }
}

function App() {
  const [currentPage, setCurrentPage] = useState('inicio')
  const [cart, setCart] = useState(getInitialCart)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [notice, setNotice] = useState('')

  useEffect(() => { localStorage.setItem('juegotendo-cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => {
    if (!notice) return undefined
    const timer = window.setTimeout(() => setNotice(''), 2200)
    return () => window.clearTimeout(timer)
  }, [notice])

  const categories = ['Todos', ...new Set(products.map((product) => product.category))]
  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((product) =>
      (category === 'Todos' || product.category === category) &&
      (product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term)),
    )
  }, [category, search])
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id)
      return existing
        ? currentCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...currentCart, { ...product, quantity: 1 }]
    })
    setNotice(`${product.name} se agregó al carrito`)
  }

  const updateQuantity = (productId, amount) => {
    setCart((currentCart) => currentCart
      .map((item) => item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item)
      .filter((item) => item.quantity > 0))
  }

  const removeFromCart = (productId) => setCart((currentCart) => currentCart.filter((item) => item.id !== productId))

  return (
    <div className="app-shell">
      <Header currentPage={currentPage} cartCount={cartCount} onNavigate={navigateTo} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        {currentPage === 'inicio' ? (
          <>
            <Hero onExplore={() => navigateTo('catalogo')} />
            <section className="benefits" aria-label="Beneficios de Juegotendo">
              <article><span>01</span><div><strong>Compra fácil</strong><p>Encuentra tus juegos favoritos en pocos pasos.</p></div></article>
              <article><span>02</span><div><strong>Ofertas semanales</strong><p>Precios especiales seleccionados para ti.</p></div></article>
              <article><span>03</span><div><strong>Entrega digital</strong><p>Tu próxima aventura disponible al instante.</p></div></article>
            </section>
          </>
        ) : (
          <section className="catalog-section" aria-labelledby="catalog-title">
            <div className="breadcrumb"><button type="button" onClick={() => navigateTo('inicio')}>Inicio</button><span>›</span><strong>Juegos</strong></div>
            <div className="section-heading"><div><p className="eyebrow">Juegotendo</p><h1 id="catalog-title">Juegos</h1></div><p>{filteredProducts.length} títulos disponibles</p></div>
            <div className="catalog-layout">
              <aside className="filters-panel">
                <h2>Filtrar por</h2>
                <label className="search-field"><span aria-hidden="true">⌕</span><span className="sr-only">Buscar un videojuego</span><input type="search" placeholder="Buscar juegos" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
                <fieldset><legend>Categoría</legend>{categories.map((item) => <label className="radio-filter" key={item}><input type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} /><span>{item}</span></label>)}</fieldset>
              </aside>
              <div className="catalog-content"><ProductList products={filteredProducts} onAddToCart={addToCart} /></div>
            </div>
          </section>
        )}
      </main>
      <footer><strong>Juegotendo</strong><p>Tu próxima aventura comienza aquí.</p><button type="button" onClick={() => navigateTo('catalogo')}>Ver todos los juegos</button></footer>
      {notice && <div className="toast" role="status">{notice}</div>}
      <ShoppingCart cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />
    </div>
  )
}

export default App
