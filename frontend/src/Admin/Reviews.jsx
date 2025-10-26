import React from 'react';

const mockReviews = [
  { id: 1, customer: 'John Doe', rating: 5, comment: 'Excellent service!', date: '2025-10-01' },
  { id: 2, customer: 'Jane Smith', rating: 4, comment: 'Very comfortable stay.', date: '2025-10-03' },
  { id: 3, customer: 'Mike Johnson', rating: 3, comment: 'Average experience.', date: '2025-10-05' },
];

const Reviews = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Customer Reviews</h2>
      <p className="text-sm text-gray-600">View and manage customer feedback and ratings.</p>

      <div className="space-y-4">
        {mockReviews.map((review) => (
          <div key={review.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{review.customer}</span>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-yellow-400 ${i < review.rating ? '' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-2">{review.comment}</p>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:underline">Reply</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
