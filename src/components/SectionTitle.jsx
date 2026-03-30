function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="section-badge">Mr. Tea Cafe</span>
      <h2>{title}</h2>
      <div className="section-line"></div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle