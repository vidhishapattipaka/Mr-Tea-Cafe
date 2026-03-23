import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ReviewCard from '../components/ReviewCard'
import GalleryCard from '../components/GalleryCard'
import { galleryImages, reviews } from '../data/data'

function Home() {
  return (
    <>
      <section className="hero hero-modern">
        <div className="container hero-modern-container">
          <div className="hero-modern-text">
            <span className="badge">Fresh Tea • Cozy Cafe • Fast Service</span>

            <h1>
              Enjoy The Finest <br />
              Tea Experience <br />
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

          <div className="hero-modern-image">
            <img
              src="https://i.pinimg.com/1200x/65/61/bf/6561bf8eab627ef90139c355e53707d2.jpg"
              alt="Cafe food and tea"
            />
          </div>
        </div>
      </section>

      <section className="section home-menu-section">
        <div className="container">
          <SectionTitle
            title="Our Menu"
            subtitle="Explore our delicious tea varieties and signature blends."
          />

          <div className="menu-board-wrapper">
            <div className="menu-board menu-board-home">
              <div className="menu-board-head">
                <p className="menu-board-small">Mr. Tea Cafe</p>
                <h3 className="menu-board-title">MENU</h3>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Milk Tea</span>
                <div className="menu-line">
                  <p>Masala Milk Tea</p>
                  <span>₹60</span>
                </div>
                <div className="menu-line">
                  <p>Elaichi Tea</p>
                  <span>₹70</span>
                </div>
                <div className="menu-line">
                  <p>Ginger Tea</p>
                  <span>₹65</span>
                </div>
                <div className="menu-line">
                  <p>Kulhad Chai</p>
                  <span>₹50</span>
                </div>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Green Tea</span>
                <div className="menu-line">
                  <p>Pure Green Tea</p>
                  <span>₹80</span>
                </div>
                <div className="menu-line">
                  <p>Lemon Green Tea</p>
                  <span>₹90</span>
                </div>
                <div className="menu-line">
                  <p>Mint Green Tea</p>
                  <span>₹95</span>
                </div>
                <div className="menu-line">
                  <p>Honey Green Tea</p>
                  <span>₹60</span>
                </div>
              </div>
            </div>

            <div className="menu-board menu-board-home">
              <div className="menu-board-head">
                <p className="menu-board-small">Mr. Tea Cafe</p>
                <h3 className="menu-board-title">MENU</h3>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Special Tea</span>
                <div className="menu-line">
                  <p>Kashmiri Kahwa</p>
                  <span>₹120</span>
                </div>
                <div className="menu-line">
                  <p>Rose Tea</p>
                  <span>₹110</span>
                </div>
                <div className="menu-line">
                  <p>Saffron Delight Tea</p>
                  <span>₹130</span>
                </div>
                <div className="menu-line">
                  <p>Blue Tea</p>
                  <span>₹85</span>
                </div>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Signature Blends</span>
                <div className="menu-line">
                  <p>Honey Lemon Tea</p>
                  <span>₹75</span>
                </div>
                <div className="menu-line">
                  <p>Rose Milk Tea</p>
                  <span>₹85</span>
                </div>
                <div className="menu-line">
                  <p>Mint Lemon Iced Tea</p>
                  <span>₹90</span>
                </div>
                <div className="menu-line">
                  <p>Peach Iced Tea</p>
                  <span>₹90</span>
                </div>
              </div>
            </div>
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
    </>
  )
}

export default Home
