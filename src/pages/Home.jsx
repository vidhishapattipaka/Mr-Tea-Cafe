import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import TeaCard from '../components/TeaCard'
import ReviewCard from '../components/ReviewCard'
import { popularTeas, specialTeas, reviews } from '../data/data'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">Welcome to Mr. Tea Cafe</span>
            <h1>Where Every Cup Brings Comfort, Flavor, and Warmth</h1>
            <p>
              Discover handcrafted teas, delicious snacks, and a cozy cafe atmosphere
              designed for relaxing moments and meaningful conversations.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">
                Explore Menu
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Visit Us
              </Link>
              </div>
          </div>
          <div className="hero-image">
            <img
              src="https://i.pinimg.com/736x/48/6a/c0/486ac0c895e28a637a23187742a69e20.jpg"
              alt="Tea cup"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Popular Tea"
            subtitle="Our customer favorites made fresh with premium ingredients."
          />
          <div className="grid grid-3">
            {popularTeas.map((item) => (
              <TeaCard key={item.id} item={item} />
            ))}
          </div>
          </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Special Tea"
            subtitle="Unique tea blends created for a memorable taste experience."
          />
          <div className="grid grid-3">
            {specialTeas.map((item) => (
              <TeaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Customer Reviews"
            subtitle="What our tea lovers say about their experience at Mr. Tea Cafe."
          />
          <div className="grid grid-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home