function ReviewCard({ review }) {
  return (
    <div className="review-card-elegant">
      <div className="review-top">
        <div className="review-avatar">
          {review.name.charAt(0)}
        </div>

        <div>
          <h4>{review.name}</h4>
          <span className="review-role">Tea Lover</span>
        </div>
      </div>
function ReviewCard({ review }) {
  return (
    <div className="review-card-elegant">
      
      {/* Quote Icon */}
      <span className="review-quote">❝</span>

      <div className="review-top">
        <div className="review-avatar">
          {review.name.charAt(0)}
        </div>

        <div>
          <h4>{review.name}</h4>
          <span className="review-role">Tea Lover</span>
        </div>
      </div>

      {/* Stars */}
      <div className="review-stars">
        {'★'.repeat(5)}
      </div>

      {/* Review Text */}
      <p className="review-text">
        “{review.text}”
      </p>
    </div>
  )
}

export default ReviewCard
      <div className="review-stars">★★★★★</div>

      <p className="review-text">“{review.text}”</p>
    </div>
  )
}

export default ReviewCard
