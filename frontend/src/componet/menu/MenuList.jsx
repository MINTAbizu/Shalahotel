import React, { useEffect, useState } from 'react';
import Manu from '../manu/Manu'; // Menu Card Component

export default function MenuList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">🍽️ Our Menu</h2>

      <div className="row g-4">
        {items.map((i) => (
          <div key={i._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Manu
              id={i._id}
              image={i.image}
              price={i.price}
              description={i.name}
              rating={Math.round(i.rating || 0)}
            />
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center text-muted py-5">
          <p>Loading menu items...</p>
        </div>
      )}
    </div>
  );
}
