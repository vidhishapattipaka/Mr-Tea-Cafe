function ReviewCard({ review }) {
  return (
    <div className="review-card-elegant">
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

      <div className="review-stars">
        {'★'.repeat(5)}
      </div>

      <p className="review-text">
        “{review.text}”
      </p>
    </div>
  )
}

export default ReviewCard