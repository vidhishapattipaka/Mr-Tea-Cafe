import SectionTitle from '../components/SectionTitle'
import { teamMembers } from '../data/data'

function About() {
  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our cafe, our journey, and the people behind it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionTitle title="About Mr. Tea Cafe" />
            <p>
              Mr. Tea Cafe is a cozy destination for tea lovers who appreciate quality,
              taste, and a calm cafe experience. We are dedicated to serving freshly brewed
              teas, delicious snacks, and special blends that create a perfect balance of
              flavor and comfort. Our space is designed to be relaxing, friendly, and full
              of warmth, making it the ideal spot for casual meetups, peaceful breaks, and
              meaningful conversations. At Mr. Tea Cafe, every cup is made with passion so
              that each visit feels refreshing, special, and memorable.
            </p>
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
          <SectionTitle title="Our Story" />
          <p>
            What started as a passion for serving authentic tea has grown into a cozy cafe
            loved by customers for its taste, quality, and comfort. Every cup we serve is
            made with care and consistency, and every guest is welcomed like family.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mission-vision-grid">
          <div className="info-box">
            <h3>Our Mission</h3>
            <p>
              To serve premium tea and snacks in a welcoming environment where every guest
              feels at home.
            </p>
          </div>

          <div className="info-box">
            <h3>Our Vision</h3>
            <p>
              To become the most loved neighborhood tea cafe known for quality, comfort,
              and memorable experiences.
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