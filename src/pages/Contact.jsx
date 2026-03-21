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
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Visit, call, or message us anytime.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <SectionTitle title="Get in Touch" />
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> hello@mrteacafe.com</p>
            <p><strong>Address:</strong> 12 Tea Street, Bandra West, Mumbai, India</p>

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
            <SectionTitle title="Send a Message" />
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