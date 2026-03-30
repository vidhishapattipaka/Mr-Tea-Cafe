import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ReviewCard from '../components/ReviewCard'
import GalleryCard from '../components/GalleryCard'
import { galleryImages, reviews } from '../data/data'
import heroTeaImg from '../assets/tea7.png'

const homeMenuItems = [
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
]

function Home() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <section className="hero hero-modern">
        <div className="container hero-modern-container">
          <div className="hero-modern-text">
            <span className="badge">Fresh Tea • Cozy Cafe • Fast Service</span>

            <h1>
              Enjoy The Finest
              <br />
              Tea Experience
              <br />
              At Mr. Tea Cafe
            </h1>

            <p>
              Sip freshly brewed tea, enjoy signature blends, and relax in a warm
              cafe atmosphere made for every tea lover.
            </p>

            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">
                View Menu
              </Link>

              <Link to="/contact" className="btn btn-secondary hero-outline-btn">
                Order Now
              </Link>
            </div>

            <div className="hero-bottom-features">
              <div className="hero-feature-item">
                <span className="hero-feature-icon">⚡</span>
                <span>Fast Delivery</span>
              </div>

              <div className="hero-feature-item">
                <span className="hero-feature-icon">🍃</span>
                <span>Fresh Ingredients</span>
              </div>

              <div className="hero-feature-item">
                <span className="hero-feature-icon">☕</span>
                <span>Premium Tea Blends</span>
              </div>
            </div>
          </div>

          <div className="hero-modern-image hero-modern-image-tea">
            <img
              src={heroTeaImg}
              alt="Tea pouring into cups"
              className="hero-tea-png"
            />
          </div>
        </div>
      </section>

      <section className="section home-menu-section">
        <div className="container">
          <SectionTitle
            title="Popular Tea Picks"
            subtitle="Hover on any tea card to explore details, or click to view full information."
          />

          <div className="tea-menu-grid">
            {homeMenuItems.map((item) => (
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

          <div className="center-btn">
            <Link to="/menu" className="btn btn-primary">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We serve quality, comfort, and taste in every order."
          />

          <div className="grid grid-4">
            <div className="why-card">
              <div className="why-icon">🍃</div>
              <h3>Fresh Ingredients</h3>
              <p>Every tea and snack is prepared using fresh and quality ingredients.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick service and timely delivery for a smooth customer experience.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">💸</div>
              <h3>Affordable Price</h3>
              <p>Enjoy premium taste and satisfying portions at budget-friendly prices.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">✨</div>
              <h3>Hygienic Preparation</h3>
              <p>We maintain cleanliness and care in every step of preparation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Gallery"
            subtitle="Take a look at our cafe moments, special teas, and cozy interiors."
          />
          <div className="gallery-grid">
            {galleryImages.slice(0, 6).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Customer Reviews"
            subtitle="Lovely words from our happy customers."
          />
          <div className="grid grid-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Location"
            subtitle="Visit us and enjoy your tea time in a cozy atmosphere."
          />

          <div className="location-box">
            <div className="location-info">
              <h3>Mr. Tea Cafe</h3>
              <p>12 Tea Street, Bandra West, Mumbai, India</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: hello@mrteacafe.com</p>
            </div>

            <div className="map-wrapper">
              <iframe
                title="Mr. Tea Cafe Location"
                src="https://www.google.com/maps?q=Bandra%20West%20Mumbai&z=14&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <h2>Ready to Enjoy Your Favorite Tea?</h2>
          <p>
            Visit Mr. Tea Cafe today and experience fresh tea, delicious food,
            and warm hospitality.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
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
    </>
  )
}

export default Home