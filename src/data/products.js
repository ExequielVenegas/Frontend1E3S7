import fireEmblem from '../assets/fe.jpg'
import finalFantasy from '../assets/ff7.jpg'
import mario from '../assets/mario.avif'
import metroid from '../assets/metroid.avif'
import silksong from '../assets/silksong.avif'
import talesOfArise from '../assets/toa.jpg'
import zelda from '../assets/zelda.avif'

export const products = [
  { id: 1, name: 'Final Fantasy VII Rebirth', category: 'RPG', platform: 'PS5', normalPrice: 69990, offerPrice: 49990, description: 'Una travesía épica más allá de Midgar, con combates dinámicos y un mundo por descubrir.', image: finalFantasy },
  { id: 2, name: 'The Legend of Zelda', category: 'Aventura', platform: 'Switch', normalPrice: 59990, offerPrice: 44990, description: 'Explora un reino abierto, resuelve antiguos misterios y crea tu propio camino heroico.', image: zelda },
  { id: 3, name: 'Hollow Knight Silksong', category: 'Metroidvania', platform: 'PC', normalPrice: 32990, offerPrice: 27990, description: 'Asciende por un reino encantado con movimientos ágiles y desafiantes combates.', image: silksong },
  { id: 4, name: 'Super Mario Odyssey', category: 'Plataformas', platform: 'Switch', normalPrice: 54990, offerPrice: 39990, description: 'Viaja por mundos sorprendentes junto a Cappy en una aventura llena de secretos.', image: mario },
  { id: 5, name: 'Metroid Dread', category: 'Acción', platform: 'Switch', normalPrice: 57990, offerPrice: 42990, description: 'Sobrevive a una amenaza implacable mientras exploras los laberintos de ZDR.', image: metroid },
  { id: 6, name: 'Tales of Arise', category: 'RPG', platform: 'PC', normalPrice: 44990, offerPrice: 24990, description: 'Dos mundos enfrentados y un grupo de héroes unidos por la libertad.', image: talesOfArise },
  { id: 7, name: 'Fire Emblem Engage', category: 'Estrategia', platform: 'Switch', normalPrice: 59990, offerPrice: 46990, description: 'Combina estrategia por turnos y héroes legendarios en batallas decisivas.', image: fireEmblem },
]

export const formatPrice = (price) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)
