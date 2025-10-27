import React, { useState } from 'react';
import axios from 'axios';

export default function ChapaPayment() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/chapa/pay', {
        amount: 500,               // ETB
        email: 'customer@example.com',
        first_name: 'John',
        last_name: 'Doe',
        tx_ref: `TX-${Date.now()}` // unique ref
      });

      const paymentUrl = response.data.data.checkout_url;
      window.location.href = paymentUrl; // redirect to Chapa checkout page
    } catch (err) {
      console.error(err);
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      disabled={loading}
    >
      {loading ? 'Processing...' : 'Pay with Chapa'}
    </button>
  );
}
