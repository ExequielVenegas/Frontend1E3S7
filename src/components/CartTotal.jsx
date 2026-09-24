import { formatPrice } from '../data/products'

function CartTotal({ cart }) {
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0)
  return <div className="cart-summary"><div className="summary-row"><span>Productos</span><span>{count}</span></div><div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div><button className="checkout-button" type="button" onClick={() => window.alert('¡Gracias! Esta es una demostración académica.')}>Finalizar compra</button></div>
}
export default CartTotal
