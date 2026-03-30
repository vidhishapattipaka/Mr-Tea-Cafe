function TeaCard({ item }) {
  return (
    <div className="card tea-card">
      {item.image && (
        <div className="tea-image-wrapper">
          <img src={item.image} alt={item.name} className="card-image" />
          <span className="tea-badge">Popular</span>
        </div>
      )}

      <div className="card-body">
        <div className="card-top">
          <h3>{item.name}</h3>
          <span className="price">{item.price}</span>
        </div>

        {item.description && <p>{item.description}</p>}
      </div>
    </div>
  )
}

export default TeaCard