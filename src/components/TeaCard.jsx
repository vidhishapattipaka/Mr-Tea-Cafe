function TeaCard({ item }) {
  return (
    <div className="card tea-card">
      {item.image && <img src={item.image} alt={item.name} className="card-image" />}
      <div className="card-body">
        <div className="card-top">
          <h3>{item.name}</h3>
          <span>{item.price}</span>
        </div>
        {item.description && <p>{item.description}</p>}
      </div>
    </div>
  )
}

export default TeaCard