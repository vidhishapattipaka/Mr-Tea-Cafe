import SectionTitle from '../components/SectionTitle'
import { teamMembers } from '../data/data'

function About() {
  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>About Mr. Tea Cafe</h1>
          <p>
            Discover our story, our values, and the passion behind every cup we serve.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionTitle
              title="About Mr. Tea Cafe"
              subtitle="A warm place for tea lovers, conversations, and comforting moments."
            />
            <p>
              Mr. Tea Cafe is a cozy destination for tea lovers who appreciate quality,
              taste, and a peaceful cafe experience. We are dedicated to serving freshly
              brewed teas, delicious snacks, and signature blends that create the perfect
              balance of flavor and comfort. Our cafe is designed to feel warm, inviting,
              and relaxing, making it the ideal place for casual meetups, short breaks,
              and meaningful conversations. At Mr. Tea Cafe, every cup is prepared with
              care so that each visit feels refreshing, special, and memorable.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-card">
                <h3>Fresh Ingredients</h3>
                <p>We use quality ingredients to serve flavorful tea and tasty bites.</p>
              </div>

              <div className="about-highlight-card">
                <h3>Cozy Ambience</h3>
                <p>A calm and welcoming space made for comfort and connection.</p>
              </div>
            </div>
          </div>

          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
            alt="Cafe interior"
          />
        </div>
      </section>

      <section className="section section-light">
        <div className="container story-box">
          <SectionTitle
            title="Our Story"
            subtitle="Built with passion, warmth, and a love for authentic tea."
          />
          <p>
            What started as a passion for serving authentic tea has grown into a cozy cafe
            loved by customers for its taste, quality, and comfort. From classic favorites
            to special blends, every drink is prepared with consistency and care. Over time,
            Mr. Tea Cafe has become more than just a cafe — it has become a place where
            people come together to relax, connect, and enjoy simple moments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mission-vision-grid">
          <div className="info-box">
            <h3>Our Mission</h3>
            <p>
              To serve premium tea and snacks in a welcoming environment where every guest
              feels comfortable, valued, and at home.
            </p>
          </div>

          <div className="info-box">
            <h3>Our Vision</h3>
            <p>
              To become the most loved neighborhood tea cafe, known for quality, comfort,
              hospitality, and memorable customer experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The passionate people who bring Mr. Tea Cafe to life."
          />
          <div className="grid grid-3">
            {teamMembers.map((member) => (
              <div className="card team-card" key={member.id}>
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="card-body">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
