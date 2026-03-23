import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>Contact Mr. Tea Cafe</h1>
          <p>
            We would love to hear from you. Visit us, call us, or send us a message anytime.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <SectionTitle
              title="Get in Touch"
              subtitle="Reach out for inquiries, orders, or a relaxing tea-time visit."
            />

            <div className="contact-detail-list">
              <div className="contact-detail-card">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>

              <div className="contact-detail-card">
                <h3>Email</h3>
                <p>hello@mrteacafe.com</p>
              </div>

              <div className="contact-detail-card">
                <h3>Address</h3>
                <p>12 Tea Street, Bandra West, Mumbai, India</p>
              </div>
            </div>

            <p className="contact-note">
              We usually respond quickly and would be happy to help you with your questions.
            </p>

            <div className="map-wrapper">
              <iframe
                title="Mr. Tea Cafe Location"
                src="https://www.google.com/maps?q=Bandra%20West%20Mumbai&z=14&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="contact-form-box">
            <SectionTitle
              title="Send a Message"
              subtitle="Fill out the form below and we will get back to you soon."
            />

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="btn btn-primary full-width">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
