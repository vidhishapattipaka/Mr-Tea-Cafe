import SectionTitle from '../components/SectionTitle'
import GalleryCard from '../components/GalleryCard'
import { galleryImages } from '../data/data'

function Gallery() {
  return (import SectionTitle from '../components/SectionTitle'
import GalleryCard from '../components/GalleryCard'
import { galleryImages } from '../data/data'

function Gallery() {
  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>Gallery</h1>
          <p>Take a look at our cafe space, tea moments, and cozy interiors.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Cafe Moments"
            subtitle="A visual journey through our tea, preparation, and ambience."
          />
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>Gallery</h1>
          <p>Take a look at our cafe space, tea moments, and cozy interiors.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Cafe Moments"
            subtitle="A visual journey through our tea, preparation, and ambience."
          />
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
