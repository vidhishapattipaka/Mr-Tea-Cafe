function GalleryCard({ item }) {
  return (
    <div className="gallery-card">
      <img src={item.image} alt={item.title} />

      <div className="gallery-overlay">
        <div className="gallery-content">
          <h3>{item.title}</h3>
          <span className="gallery-tag">Mr. Tea Cafe</span>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard