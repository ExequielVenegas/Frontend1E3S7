function Header({ currentPage, cartCount, onNavigate, onOpenCart }) {
  return (
    <header className="site-header">
      <button className="wordmark" type="button" onClick={() => onNavigate('inicio')}>Juegotendo</button>
      <nav aria-label="Navegación principal">
        <button className={currentPage === 'inicio' ? 'active' : ''} type="button" onClick={() => onNavigate('inicio')}>Inicio</button>
        <button className={currentPage === 'catalogo' ? 'active' : ''} type="button" onClick={() => onNavigate('catalogo')}>Juegos</button>
      </nav>
      <button className="cart-trigger" type="button" onClick={onOpenCart} aria-label={`Abrir carrito con ${cartCount} productos`}><span>Carrito</span><span className="cart-count">{cartCount}</span></button>
    </header>
  )
}

export default Header
