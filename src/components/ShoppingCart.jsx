import { useEffect } from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

function ShoppingCart({ cart, isOpen, onClose, onRemove, onUpdateQuantity }) {
  useEffect(() => {
    const closeWithEscape = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeWithEscape)
    return () => window.removeEventListener('keydown', closeWithEscape)
  }, [onClose])
  return (
    <div className={isOpen ? 'cart-overlay open' : 'cart-overlay'} onMouseDown={(event) => event.target === event.currentTarget && onClose()} aria-hidden={!isOpen}>
      <aside className="cart-panel" role="dialog" aria-modal="true" aria-label="Carrito de compras"><div className="cart-header"><h2>Tu carrito</h2><button className="icon-button" type="button" onClick={onClose} aria-label="Cerrar carrito">×</button></div><div className="cart-items">{cart.length === 0 ? <div className="empty-cart"><p><span>◇</span>Tu carrito está vacío.<br />Agrega un juego para comenzar.</p></div> : cart.map((item) => <CartItem key={item.id} item={item} onRemove={onRemove} onUpdateQuantity={onUpdateQuantity} />)}</div>{cart.length > 0 && <CartTotal cart={cart} />}</aside>
    </div>
  )
}
export default ShoppingCart
