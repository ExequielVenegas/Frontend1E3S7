import { formatPrice } from '../data/products'

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <article className="cart-item"><img src={item.image} alt="" /><div><h3>{item.name}</h3><span className="cart-item-price">{formatPrice(item.offerPrice * item.quantity)}</span><div className="quantity-controls" aria-label={`Cantidad de ${item.name}`}><button type="button" onClick={() => onUpdateQuantity(item.id, -1)} aria-label={`Quitar una unidad de ${item.name}`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => onUpdateQuantity(item.id, 1)} aria-label={`Agregar una unidad de ${item.name}`}>+</button></div></div><button className="remove-button" type="button" onClick={() => onRemove(item.id)}>Eliminar</button></article>
  )
}
export default CartItem
