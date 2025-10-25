import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './customerReview.css'

const reviews = [
  {
    id: 1,
    name: 'John D.',
    avatar: 'https://via.placeholder.com/80',
    text: 'Amazing experience! The staff were friendly and the rooms were clean and comfortable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah K.',
    avatar: 'https://via.placeholder.com/80',
    text: "Loved the location and the amenities. Will definitely come back!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Mike S.',
    avatar: 'https://via.placeholder.com/80',
    text: 'Great value for money. The breakfast buffet was delicious.',
    rating: 4,
  },
]

function CustomerReview() {
  return (
    <section className="customer-review-section container my-5">
      <h2 className="mb-4 text-center">Customer Reviews</h2>

      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={400}
        showThumbs={false}
        showStatus={false}
        showIndicators
        stopOnHover
        emulateTouch
        swipeable
        centerMode={false}
      >
        {reviews.map((r) => (
          <div key={r.id} className="review-slide">
            <article className="review-card shadow-sm rounded-3 p-4 d-flex flex-column flex-md-row align-items-center gap-3">
              <img src={r.avatar} alt={`${r.name} avatar`} className="review-avatar " width="80" height="80" />
              <div className="review-body">
                <p className="review-text mb-2">“{r.text}”</p>
                <div className="d-flex align-items-center gap-2">
                  <div className="review-name fw-600">{r.name}</div>
                  <div className="review-rating text-warning">
                    {Array(r.rating).fill().map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default CustomerReview
