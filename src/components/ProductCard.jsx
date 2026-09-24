import { formatPrice } from '../data/products'

function ProductCard({ product, onAddToCart }) {
  const discount = Math.round((1 - product.offerPrice / product.normalPrice) * 100)
  return (
    <article className="product-card">
      <div className="product-image-wrap"><img className="product-image" src={product.image} alt={`Portada de ${product.name}`} /><span className="discount-badge">-{discount}%</span></div>
      <div className="product-info"><div className="product-meta"><span>{product.category}</span><span>{product.platform}</span></div><h3>{product.name}</h3><p className="product-description">{product.description}</p><div className="product-footer"><div className="price-block"><span className="normal-price">{formatPrice(product.normalPrice)}</span><span className="offer-price">{formatPrice(product.offerPrice)}</span></div><button className="add-button" type="button" onClick={() => onAddToCart(product)}>Agregar +</button></div></div>
    </article>
  )
}
export default ProductCard
