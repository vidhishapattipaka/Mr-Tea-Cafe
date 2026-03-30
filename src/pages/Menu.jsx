import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const menuItems = [
  {
    category: 'Milk Tea',
    name: 'Masala Chai',
    price: '₹40',
    image:
      'https://i.pinimg.com/1200x/0e/97/0b/0e970b644e7e87c2d7505e51379ef28c.jpg',
    description:
      'A comforting Indian tea brewed with milk, tea leaves, and aromatic spices.',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar', 'Cardamom', 'Clove', 'Ginger'],
  },
  {
    category: 'Milk Tea',
    name: 'Elaichi Chai',
    price: '₹45',
    image:
      'https://i.pinimg.com/1200x/ca/c9/5a/cac95ad82d90db588665b9986777fcb4.jpg',
    description:
      'Smooth and fragrant tea with the sweet warmth of cardamom.',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar', 'Cardamom'],
  },
  {
    category: 'Milk Tea',
    name: 'Ginger Chai',
    price: '₹45',
    image:
      'https://i.pinimg.com/736x/7a/e5/05/7ae505a698961da490fa2a22fdb4b19e.jpg',
    description:
      'Fresh ginger adds a bold and soothing flavor to this classic chai.',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar', 'Fresh Ginger'],
  },
  {
    category: 'Milk Tea',
    name: 'Kesar Chai',
    price: '₹60',
    image:
      'https://i.pinimg.com/1200x/76/e0/2e/76e02e85c9516020823e614f64e3fc28.jpg',
    description:
      'A rich saffron-infused chai with a luxurious aroma and taste.',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar', 'Saffron'],
  },
  {
    category: 'Milk Tea',
    name: 'South Special:-Filter Tea',
    price: '₹70',
    image:
      'https://i.pinimg.com/1200x/ac/19/28/ac192866ffaf0421fb026e1be095fdd5.jpg',
    description:
      'A playful twist on chai with south culture notes and creamy texture.',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar, Speacial South touch'],
  },
  {
    category: 'Milk Tea',
    name: 'Kulhad Chai',
    price: '₹50',
    image:
      'https://i.pinimg.com/736x/1e/8b/f9/1e8bf9b284fc5bd47b71fe99e1cc673d.jpg',
    description:
      'Traditional chai served with earthy kulhad-style warmth and flavor.',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar', 'Spices'],
  },
  {
    category: 'Green Tea',
    name: 'Classic Green Tea',
    price: '₹50',
    image:
      'https://i.pinimg.com/736x/33/44/b4/3344b471b8ae59206338a60703ed541b.jpg',
    description: 'A light and refreshing green tea for a clean tea experience.',
    ingredients: ['Green Tea Leaves', 'Water'],
  },
  {
    category: 'Green Tea',
    name: 'Lemon Green Tea',
    price: '₹55',
    image:
      'https://i.pinimg.com/1200x/61/00/b3/6100b3cffba15eb522bfc135ba1039c2.jpg',
    description: 'Refreshing green tea with a bright citrus twist.',
    ingredients: ['Green Tea Leaves', 'Lemon', 'Water', 'Honey'],
  },
  {
    category: 'Green Tea',
    name: 'Mint Green Tea',
    price: '₹55',
    image:
      'https://i.pinimg.com/736x/11/24/f9/1124f956180bcb20fdbabfc0724d46f9.jpg',
    description: 'Cool and refreshing green tea infused with mint.',
    ingredients: ['Green Tea Leaves', 'Mint', 'Water'],
  },
  {
    category: 'Green Tea',
    name: 'Honey Green Tea',
    price: '₹60',
    image:
      'https://i.pinimg.com/736x/70/33/8c/70338c919a8087d8facd49dd046c771b.jpg',
    description: 'A soothing green tea lightly sweetened with honey.',
    ingredients: ['Green Tea Leaves', 'Honey', 'Water'],
  },
  {
    category: 'Green Tea',
    name: 'Tulsi Green Tea',
    price: '₹60',
    image:
      'https://i.pinimg.com/1200x/84/be/30/84be3089a3dada088daa76eab5d01b98.jpg',
    description: 'A calming herbal blend with tulsi and green tea.',
    ingredients: ['Green Tea Leaves', 'Tulsi', 'Water'],
  },
  {
    category: 'Special Tea',
    name: 'Kashmiri Kahwa',
    price: '₹80',
    image:
      'https://i.pinimg.com/736x/d6/38/03/d63803e5b0b2596c45fbc01300e8e9ad.jpg',
    description: 'A fragrant Kashmiri tea with spices and saffron.',
    ingredients: ['Green Tea', 'Saffron', 'Cinnamon', 'Almonds', 'Cardamom'],
  },
  {
    category: 'Special Tea',
    name: 'Butter Tea',
    price: '₹90',
    image:
      'https://i.pinimg.com/736x/75/93/fa/7593fa693a6ca16e9accce4e14f83b82.jpg',
    description: 'A creamy, rich tea with a unique comforting flavor.',
    ingredients: ['Tea', 'Butter', 'Milk', 'Salt'],
  },
  {
    category: 'Special Tea',
    name: 'Rose Tea',
    price: '₹70',
    image:
      'https://i.pinimg.com/736x/c3/9b/ad/c39bad229f8e14564774ee1b251186ab.jpg',
    description: 'A delicate floral tea with soft rose aroma.',
    ingredients: ['Tea Leaves', 'Rose Petals', 'Water', 'Honey'],
  },
  {
    category: 'Special Tea',
    name: 'Iced Tea',
    price: '₹80',
    image:
      'https://i.pinimg.com/736x/33/20/d5/3320d550c0704ae1849a6d8bd4fcb5f4.jpg',
    description: 'Cool, refreshing tea served chilled.',
    ingredients: ['Tea', 'Ice', 'Lemon', 'Sugar'],
  },
  {
    category: 'Special Tea',
    name: 'Peach Iced Tea',
    price: '₹90',
    image:
      'https://i.pinimg.com/1200x/51/7f/54/517f5403fe9ce83c5ca01c8c33c1585c.jpg',
    description: 'Refreshing iced tea with juicy peach flavor.',
    ingredients: ['Tea', 'Peach Syrup', 'Ice', 'Lemon'],
  },
  {
    category: 'Special Tea',
    name: 'Blue Tea',
    price: '₹85',
    image:
      'https://i.pinimg.com/1200x/c1/ff/5b/c1ff5bc0c009f19adfe84210c1994242.jpg',
    description: 'A vibrant herbal tea made from butterfly pea flowers.',
    ingredients: ['Butterfly Pea Flowers', 'Water', 'Honey'],
  },
  {
    category: 'Special Tea',
    name: 'Hibiscus Tea',
    price: '₹85',
    image:
      'https://i.pinimg.com/1200x/3f/b6/a3/3fb6a3978dd35ecbe16a07e448df39be.jpg',
    description: 'Tangy and floral herbal tea with a beautiful red hue.',
    ingredients: ['Hibiscus', 'Water', 'Honey'],
  },
  {
    category: 'Special Tea',
    name: 'Matcha Tea',
    price: '₹100',
    image:
      'https://i.pinimg.com/736x/52/2f/98/522f982f88048da147ed011efef16ac1.jpg',
    description: 'A bold and earthy Japanese green tea experience.',
    ingredients: ['Matcha Powder', 'Water', 'Milk'],
  },
  {
    category: 'Signature Blends',
    name: 'Saffron Delight Tea',
    price: '₹95',
    image:
      'https://i.pinimg.com/1200x/49/40/44/494044d333910de342654e37f9357f33.jpg',
    description: 'A premium tea blend with rich saffron aroma.',
    ingredients: ['Tea Leaves', 'Saffron', 'Milk', 'Sugar'],
  },
  {
    category: 'Signature Blends',
    name: 'Honey Lemon Tea',
    price: '₹75',
    image:
      'https://i.pinimg.com/736x/72/68/01/726801f7258427be9a129f1373f439a3.jpg',
    description: 'A soothing tea blend with honey and lemon freshness.',
    ingredients: ['Tea', 'Honey', 'Lemon', 'Water'],
  },
  {
    category: 'Signature Blends',
    name: 'Rose Milk Tea',
    price: '₹85',
    image:
      'https://i.pinimg.com/1200x/9d/c2/72/9dc272220bf5856dbae4d7adc90821f7.jpg',
    description: 'Creamy milk tea with a soft and floral rose flavor.',
    ingredients: ['Tea Leaves', 'Milk', 'Rose Syrup', 'Sugar'],
  },
  {
    category: 'Signature Blends',
    name: 'Mint Lemon Iced Tea',
    price: '₹90',
    image:
      'https://i.pinimg.com/736x/03/e1/1a/03e11a88ea01f400cacbcdc1edf7796b.jpg',
    description: 'A chilled, zesty tea with minty freshness.',
    ingredients: ['Tea', 'Mint', 'Lemon', 'Ice', 'Sugar'],
  },
]

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Explore our tea varieties and signature special blends.</p>
        </div>
      </section>

      <section className="section menu-page-section">
        <div className="container">
          <SectionTitle
            title="Our Tea Collection"
            subtitle="Hover on any tea card to explore details, or click to view full information."
          />

          <div className="tea-menu-grid">
            {menuItems.map((item) => (
              <div
                className="tea-menu-card"
                key={item.name}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedItem(item)
                  }
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="tea-menu-image"
                />

                <div className="tea-menu-overlay">
                  <span className="tea-menu-category">{item.category}</span>
                  <span className="tea-menu-price">{item.price}</span>
                  <h3>{item.name}</h3>
                  <p className="tea-menu-desc">{item.description}</p>

                  <div className="tea-menu-ingredients">
                    {item.ingredients.slice(0, 4).map((ingredient) => (
                      <span key={ingredient}>{ingredient}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="menu-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="menu-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="menu-modal-close"
              onClick={() => setSelectedItem(null)}
              type="button"
            >
              ×
            </button>

            <div className="menu-modal-image-wrap">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="menu-modal-image"
              />
            </div>

            <div className="menu-modal-content">
              <span className="menu-modal-badge">{selectedItem.category}</span>
              <h2>{selectedItem.name}</h2>
              <p className="menu-modal-price">{selectedItem.price}</p>

              <p className="menu-modal-description">{selectedItem.description}</p>

              <div className="menu-modal-ingredients">
                <h4>Ingredients</h4>
                <div className="ingredient-list">
                  {selectedItem.ingredients.map((ingredient) => (
                    <span key={ingredient} className="ingredient-chip">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu