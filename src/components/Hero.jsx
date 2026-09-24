import fireEmblem from '../assets/fe.jpg'

function Hero({ onExplore }) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-intro"><p className="eyebrow">Tienda de videojuegos</p><h1 id="hero-title">Juega, descubre y vive nuevas historias.</h1><p>Encuentra aventuras inolvidables para PC y consolas, con ofertas seleccionadas todas las semanas.</p><button className="primary-button" type="button" onClick={onExplore}>Ver catálogo</button></div>
      <article className="featured-game"><div className="featured-image"><img src={fireEmblem} alt="Personajes de Fire Emblem Engage" /><span>Oferta destacada</span></div><div className="featured-details"><div><p>Disponible ahora</p><h2>Fire Emblem Engage</h2></div><button type="button" onClick={onExplore}>Ver juego</button></div></article>
    </section>
  )
}

export default Hero
